import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import SelectCoins from '../components/Compare/SelectCoins'
import getCoinPrice from '../functions/getCoinPrices';
import settingChartData from '../functions/settingChartData';
import SelectDays from "../components/Coin/SelectDays";
import getCoinInfo from '../functions/getCoinInfo';
import coinObject from '../functions/coinObject';
import List from '../components/Dashboard/List';
import CoinInfo from '../components/Coin/CoinInfo';
import Loader from '../components/Common/Loader';
import LineChart from '../components/Coin/LineChart';
import TogglePriceType from '../components/Coin/TogglePriceType.js';

function ComparePage() {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [chartData, setChartData] = useState(null);
  const [crypto1Info, setCrypt1Info] = useState(null);
  const [crypto2Info, setCrypt2Info] = useState(null);
  const [days, setDays] = useState(30);
  const [priceType, setPriceType] = useState("prices");
  const [isLoading, setIsLoading] = useState(false);
  const [errorOccur, setErrorOccur] = useState(false);


  async function handleCrypto(value, isCrypto1) {
    setIsLoading(true);
    if (isCrypto1) {
      const data = await getCoinInfo(value);
      if (data) {
        coinObject(setCrypt1Info, data);
        setCrypto1(value);
      }
      const price1 = await getCoinPrice(value, days, priceType);
      const price2 = await getCoinPrice(crypto2, days, priceType);
      settingChartData(setChartData, price1, price2, value, crypto2);
    }
    else {
      const data = await getCoinInfo(value);
      if (data) {
        coinObject(setCrypt2Info, data);
        setCrypto2(value);
      }
      const price1 = await getCoinPrice(crypto1, days, priceType);
      const price2 = await getCoinPrice(value, days, priceType);
      settingChartData(setChartData, price1, price2, crypto1, value);
    }
    setIsLoading(false);
  }


  useEffect(() => {
    console.log("reload");
    fetchCoinDetails();
  }, [])

  const handleDaysChange = async (event) => {
    const prices1 = await getCoinPrice(crypto1, Number(event.target.value), priceType);
    const prices2 = await getCoinPrice(crypto2, Number(event.target.value), priceType);
    settingChartData(setChartData, prices1, prices2, crypto1, crypto2);
    setDays(event.target.value);
  };

  async function handleChangePriceType(value) {
    const prices1 = await getCoinPrice(crypto1, days, value);
    const prices2 = await getCoinPrice(crypto2, days, value);
    settingChartData(setChartData, prices1, prices2, crypto1, crypto2);
    setPriceType(value);
  }

  async function fetchCoinDetails() {
    setIsLoading(true);
    const data1 = await getCoinInfo(crypto1);
    const data2 = await getCoinInfo(crypto2);
    console.log(data1, data2);
    if (data1) {
      coinObject(setCrypt1Info, data1);
    }
    if (data2) {
      coinObject(setCrypt2Info, data2);
    }

    const prices1 = await getCoinPrice(crypto1, days, priceType);
    const prices2 = await getCoinPrice(crypto2, days, priceType);

    settingChartData(setChartData, prices1, prices2, crypto1, crypto2);
    setIsLoading(false);
  }

  if (isLoading) {
    return (
      <div>
        <Header />
        <Loader />

      </div>
    )
  }

  return (
    <div>
      <Header />

      <div className='coin-handler'>
        <SelectCoins crypto1={crypto1} crypto2={crypto2} handleCrypto={handleCrypto} />
        <SelectDays days={days} handleDaysChange={handleDaysChange} />
      </div>


      <table>
        <thead className='id-info'>
          {
            crypto1Info !== null && <List coin={crypto1Info} />
          }
          {
            crypto2Info !== null && <List coin={crypto2Info} />
          }
        </thead>

      </table>

      {
        <div className='chart-data'>
          <TogglePriceType priceType={priceType} handleChangePriceType={handleChangePriceType} />

          {
            (chartData !== null && chartData !== undefined) && <LineChart chartData={chartData} priceType={priceType} multiAxis={true} />
          }

        </div>
      }

      {
        crypto1Info !== null && <CoinInfo heading={crypto1Info.name} desc={crypto1Info.desc} />
      }

      {
        crypto2Info !== null && <CoinInfo heading={crypto2Info.name} desc={crypto2Info.desc} />
      }
    </div>
  )
}

export default ComparePage