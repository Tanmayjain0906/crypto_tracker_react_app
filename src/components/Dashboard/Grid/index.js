import React from 'react'
import "./style.css"
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import TrendingDownOutlinedIcon from '@mui/icons-material/TrendingDownOutlined';
import { useNavigate } from 'react-router-dom';

function Grid({ coin }) {
    const navigate = useNavigate();
    return (
        <div className={`card ${coin.market_cap_change_percentage_24h > 0 ? "hover-green" : "hover-red"}`} onClick={() => navigate(`/coin/${coin.id}`)}>
            <div className='logo-div'>
                <img src={coin.image} />
                <div className='coin-info'>
                    <p className='symbol'>{coin.symbol}</p>
                    <p className='name'>{coin.name}</p>
                </div>
            </div>

            <div className='market-cap'>
                <p className={coin.market_cap_change_percentage_24h > 0 ? "green-cap" : "red-cap"}>{coin.market_cap_change_percentage_24h.toFixed(2)}%</p>

                <p className={coin.market_cap_change_percentage_24h > 0 ? "green-rise" : "red-rise"}>
                    {
                        coin.market_cap_change_percentage_24h > 0 ? <TrendingUpOutlinedIcon /> : <TrendingDownOutlinedIcon />
                    }
                </p>
            </div>

            <div className='current-price'>
                <p className={coin.market_cap_change_percentage_24h > 0 ? "green-tag" : "red-tag"}>${coin.current_price.toLocaleString()}</p>
            </div>

            <div className="volumes">
                <p>Total Volume: ${coin.total_volume.toLocaleString()}</p>
                <p>Market Cap: ${coin.market_cap.toLocaleString()}</p>
            </div>
        </div>
    )
}

export default Grid