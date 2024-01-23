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
import convertDate from '../functions/convertDate';

function CoinPage() {
  const { id } = useParams();

  const [coinData, setCoinData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [days, setDays] = useState(30);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    fetchData();
  }, [id])

  async function fetchData() {
    setIsLoading(true);
    const data = await getCoinInfo(id);
    if (data) {
      coinObject(setCoinData, data);
      const prices = await getCoinPrice(id, days);
      console.log(prices);
      if (prices.length > 0) {
        setChartData({
          labels: prices.map((price) => convertDate(price[0])),
          datasets: [
            {
              data: prices.map((price) => price[1]),
              borderColor: "#3a80e9",
              borderWidth: 2,
              fill: true,
              tension: 0.25,
              backgroundColor: "rgba(58, 128, 233, 0.1)",
              borderColor: "#3a80e9",
              pointRadius: 0,
            },
          ]
        })
      }

    }

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

      <table>
        <thead className='id-info'>
          {
            coinData !== null && <List coin={coinData} />
          }
        </thead>

      </table>

      {
        coinData !== null && <div className='chart-data'><LineChart chartData={chartData} /></div>
      }

      {
        coinData !== null && <CoinInfo heading={coinData.name} desc={coinData.desc} />
      }

    </div>
  )
}

export default CoinPage