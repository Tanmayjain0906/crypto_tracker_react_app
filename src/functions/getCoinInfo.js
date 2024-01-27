import axios from "axios";
import { toast } from 'react-toastify';

export default async function getCoinInfo(id) {
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
        return response.data;
    }
    catch (err) {
        toast.error("CoinGecko Api Problem, Try After Sometime!");
    }
}