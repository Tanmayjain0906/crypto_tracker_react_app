import axios from "axios";
import { toast } from 'react-toastify';

export default async function get100coins() {

    try {
        const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en");

        return response.data;
    }
    catch (err) {
        toast.error("CoinGecko Api Problem, Try After Sometime!");
        return [];
    }
}