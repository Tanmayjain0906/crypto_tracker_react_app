import axios from "axios";

export default async function getCoinInfo(id) {
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
        return response.data;
    }
    catch (err) {
        alert(err.message);
    }
}