import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import coinObject from '../functions/coinObject';
import List from '../components/Dashboard/List';
import Header from '../components/Common/Header';
import Loader from '../components/Common/Loader';
import CoinInfo from '../components/Coin/CoinInfo';
import getCoinInfo from '../functions/getCoinInfo';
import getCoinPrice from '../functions/getCoinPrices';
import LineChart from '../components/Coin/LineChart';
import settingChartData from '../functions/settingChartData';
import SelectDays from '../components/Coin/SelectDays';
import TogglePriceType from '../components/Coin/TogglePriceType.js';

function CoinPage() {
  const { id } = useParams();

  const [coinData, setCoinData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [days, setDays] = useState(30);
  const [chartData, setChartData] = useState({});
  const [priceType, setPriceType] = useState("prices");

  useEffect(() => {
    fetchData();
  }, [id])

  async function fetchData() {
    setIsLoading(true);
    const data = await getCoinInfo(id);
    if (data) {
      coinObject(setCoinData, data);
      const prices = await getCoinPrice(id, days, priceType);
      console.log(prices);
      if (prices.length > 0) {
        settingChartData(setChartData, prices);
      }

    }

    setIsLoading(false);
  }


  const handleDaysChange = async (event) => {

    const prices = await getCoinPrice(id, Number(event.target.value), priceType);
    if (prices.length > 0) {
      settingChartData(setChartData, prices);
    }
    setDays(event.target.value);

  };

  async function handleChangePriceType(value) {
    const prices = await getCoinPrice(id, days, value);
    if (prices.length > 0) {
      settingChartData(setChartData, prices);
    }
    setPriceType(value);
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

      <table>
        <thead className='id-info'>
          {
            coinData !== null && <List coin={coinData} />
          }
        </thead>

      </table>

      {
        coinData !== null && <div className='chart-data'>
          <SelectDays days={days} handleDaysChange={handleDaysChange} text={"Price Changed In: "}/>
          <TogglePriceType priceType={priceType} handleChangePriceType={handleChangePriceType} />
          <LineChart chartData={chartData} priceType={priceType}/>
        </div>
      }

      {
        (coinData !== null && coinData.desc) && <CoinInfo heading={coinData.name} desc={coinData.desc} />
      }

    </div>
  )
}

export default CoinPage