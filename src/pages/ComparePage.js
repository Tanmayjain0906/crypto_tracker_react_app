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
import { Co2Sharp } from '@mui/icons-material';

function ComparePage() {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  // const [crypto1ChartData, setCrypto1ChartData] = useState({});
  // const [crypto2ChartData, setCrypto2ChartData] = useState({});
  const [crypto1Info, setCrypt1Info] = useState(null);
  const [crypto2Info, setCrypt2Info] = useState(null);
  const [days, setDays] = useState(30);
  const [priceType, setPriceType] = useState("prices");


  async function handleCrypto(value, isCrypto1) {
    
    if(isCrypto1) {
      const data = await getCoinInfo(value);
      if(data)
      {
        coinObject(setCrypt1Info, data);
        setCrypto1(value);
      }
      const prices = await getCoinPrice(value, days, priceType);
      if(prices.length > 0)
      {
        // settingChartData(setCrypto1ChartData, prices1);
      }
      
    }
    else
    {
      const data = await getCoinInfo(value);
      if(data)
      {
        coinObject(setCrypt2Info, data);
        setCrypto2(value);
      }
      const prices = await getCoinPrice(value, days, priceType);
      if(prices.length > 0)
      {
        // settingChartData(setCrypto2ChartData, prices1);
      }
      
    }
  }


  useEffect(() => {
    console.log("reload");
    fetchCoinDetails();
  }, [])

  const handleDaysChange = async (event) => {
    const prices1 = await getCoinPrice(crypto1, Number(event.target.value), priceType);
    const prices2 = await getCoinPrice(crypto2, Number(event.target.value), priceType);
    if (prices1.length > 0 && prices2.length > 0) {
      // settingChartData(setCrypto1ChartData, prices1);
      // settingChartData(setCrypto2ChartData, prices2);
    }
    setDays(event.target.value);
  };

  async function fetchCoinDetails() {

    const data1 = await getCoinInfo(crypto1);
    const data2 = await getCoinInfo(crypto2);

    if(data1)
    {
      coinObject(setCrypt1Info, data1);
    }
    if(data2)
    {
      coinObject(setCrypt2Info, data2);
    }

    const prices1 = await getCoinPrice(crypto1, days, priceType);
    const prices2 = await getCoinPrice(crypto2, days, priceType);

    if(prices1.length > 0)
    {
      // settingChartData(setCrypto1ChartData, prices1);
    }
    if(prices2.length > 0)
    {
      // settingChartData(setCrypto2ChartData, prices2);
    }
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