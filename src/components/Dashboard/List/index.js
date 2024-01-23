import React from 'react'
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import TrendingDownOutlinedIcon from '@mui/icons-material/TrendingDownOutlined';
import "./style.css"
import Tooltip from '@mui/material/Tooltip';
import { convertNumber } from '../../../functions/convertNumber';
import { useNavigate } from 'react-router-dom';

function List({ coin }) {
    const navigate = useNavigate();
    return (
        <tr onClick={() => navigate(`/coin/${coin.id}`)}>
            <Tooltip title="Logo" placement='bottom-start'>
                <td className='list-coin-logo'>
                    <img src={coin.image} />
                </td>
            </Tooltip>

            <td className='list-coin-info'>
                <Tooltip title="Symbol" placement='bottom-start'>
                    <p className='list-coin-symbol'>{coin.symbol}</p>
                </Tooltip>

                <Tooltip title="Name" placement='bottom-start'>
                    <p className='list-coin-name'>{coin.name}</p>
                </Tooltip>
            </td>

            <td className='list-market-cap'>
                <Tooltip title="Price Change" placement='bottom-start'>
                    <p className={coin.market_cap_change_percentage_24h > 0 ? "list-green-cap" : "list-red-cap"}>{coin.market_cap_change_percentage_24h.toFixed(2)}%</p>
                </Tooltip>

                <Tooltip title="Price Change" placement='bottom-start'>
                    <p className={coin.market_cap_change_percentage_24h > 0 ? "list-green-rise list-icon" : "list-red-rise list-icon"}>
                        {
                            coin.market_cap_change_percentage_24h > 0 ? <TrendingUpOutlinedIcon /> : <TrendingDownOutlinedIcon />
                        }
                    </p>
                </Tooltip>
            </td>

            <td className='list-current-price'>
                <Tooltip title="Current Price" placement='bottom-start'>
                    <p className={coin.market_cap_change_percentage_24h > 0 ? "list-green-tag" : "list-red-tag"}>${coin.current_price.toLocaleString()}</p>
                </Tooltip>
            </td>

            <td className='list-total-volume'>
                <Tooltip title="Total Volume" placement='bottom'>
                    <p className='desktop-total-volume'>${coin.total_volume.toLocaleString()}</p>
                </Tooltip>

                <Tooltip title="Total Volume" placement='bottom'>
                    <p className='mobile-total-volume'>${convertNumber(coin.total_volume.toLocaleString())}</p>
                </Tooltip>
            </td>

            <td className='list-market-cap-value'>
                <Tooltip title="Market Cap" placement='bottom'>
                    <p className='dekstop-market-cap'>${coin.market_cap.toLocaleString()}</p>
                </Tooltip>

                <Tooltip title="Market Cap" placement='bottom'>
                    <p className='mobile-market-cap'>${convertNumber(coin.market_cap.toLocaleString())}</p>
                </Tooltip>
            </td>
        </tr>
    )
}

export default List