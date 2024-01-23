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

function CoinPage() {
  const { id } = useParams();

  const [coinData, setCoinData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [days, setDays] = useState(7);

  useEffect(() => {
    fetchData();
  }, [id])

  async function fetchData() {
    setIsLoading(true);
    const data = await getCoinInfo(id);
    if(data)
    {
      coinObject(setCoinData, data);
      const prices = await getCoinPrice(id, days);
      console.log(prices.length);
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
        coinData !== null && <CoinInfo heading={coinData.name} desc={coinData.desc} />
      }

    </div>
  )
}

export default CoinPage