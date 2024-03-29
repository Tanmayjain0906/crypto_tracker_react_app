import axios from "axios";
import { toast } from 'react-toastify';

export default async function getCoinPrice(id, days, priceType)
{
  try
  {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`);
    
    return response.data[priceType];
  }
  catch(err)
  {
    toast.error("CoinGecko Api Problem, Try After Sometime!");
  }
}