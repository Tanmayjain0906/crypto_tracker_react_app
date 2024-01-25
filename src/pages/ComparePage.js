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

function ComparePage() {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [crypto1ChartData, setCrypto1ChartData] = useState({});
  const [crypto2ChartData, setCrypto2ChartData] = useState({});
  const [crypto1Info, setCrypt1Info] = useState(null);
  const [crypto2Info, setCrypt2Info] = useState(null);
  const [days, setDays] = useState(30);
  const [priceType, setPriceType] = useState("prices");


  async function handleCrypto1(e) {

    console.log("crypto 1" + e.target.value);
    const data1 = await getCoinInfo(e.target.value);

    if (data1) {
      coinObject(setCrypt1Info, data1);
      const prices1 = await getCoinPrice(e.target.value, days, priceType);
      if (prices1.length > 0) {
        settingChartData(setCrypto1ChartData, prices1);
      }
    }
    setCrypto1(e.target.value);
  }

  async function handleCrypto2(e) {
    console.log("crypt 2" + e.target.value);
    const data2 = await getCoinInfo(e.target.value);
    if (data2) {
      coinObject(setCrypt2Info, data2);
      const prices2 = await getCoinPrice(e.target.value, days, priceType);
      if (prices2.length > 0) {
        settingChartData(setCrypto2ChartData, prices2);
      }
    }
    setCrypto2(e.target.value);
  }

  useEffect(() => {
    fetchCoinDetails();
  }, [])

  const handleDaysChange = async (event) => {
    const prices1 = await getCoinPrice(crypto1, Number(event.target.value), priceType);
    const prices2 = await getCoinPrice(crypto2, Number(event.target.value), priceType);
    if (prices1.length > 0 && prices2.length > 0) {
      settingChartData(setCrypto1ChartData, prices1);
      settingChartData(setCrypto2ChartData, prices2);
    }
    setDays(event.target.value);

  };

  async function fetchCoinDetails() {

    const data1 = await getCoinInfo(crypto1);
    const data2 = await getCoinInfo(crypto2);

    if (data1 && data2) {
      coinObject(setCrypt1Info, data1);
      coinObject(setCrypt2Info, data2);

      const prices1 = await getCoinPrice(crypto1, days, priceType);
      const prices2 = await getCoinPrice(crypto1, days, priceType);
      if (prices1.length > 0 && prices2.length > 0) {
        settingChartData(setCrypto1ChartData, prices1);
        settingChartData(setCrypto2ChartData, prices2);
      }
    }
  }


  return (
    <div>
      <Header />

      <div className='coin-handler'>
        <SelectCoins crypto1={crypto1} crypto2={crypto2} handleCrypto1={handleCrypto1} handleCrypto2={handleCrypto2} />
        <SelectDays days={days} handleDaysChange={handleDaysChange} />
      </div>


      <table>
        <thead className='id-info'>
          {
            crypto1Info !== null && <List coin={crypto1Info} />
          }
          {
            crypto1Info !== null && <List coin={crypto2Info} />
          }
        </thead>

      </table>

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