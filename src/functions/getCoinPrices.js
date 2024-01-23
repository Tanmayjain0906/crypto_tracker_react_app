import axios from "axios";

export default async function getCoinPrice(id, days)
{
  try
  {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`);
    console.log(response.data);
    return response.data.prices;
  }
  catch(err)
  {
    alert(err.message);
  }
}