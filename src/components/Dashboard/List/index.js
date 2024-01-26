import React, { useContext, useEffect, useState } from 'react'
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import TrendingDownOutlinedIcon from '@mui/icons-material/TrendingDownOutlined';
import "./style.css"
import Tooltip from '@mui/material/Tooltip';
import { convertNumber } from '../../../functions/convertNumber';
import { useNavigate } from 'react-router-dom';
import checkIsAvailable from '../../../functions/checkIsAvailable';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import wishlistCoinContext from '../../../context/wishlistCoinContext';

function List({ coin, page }) {
    const {wishlistCoins, setWishlistCoins} = useContext(wishlistCoinContext);
    const [isInWishlist, setIsInWishlist] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (wishlistCoins === null) {
            setIsInWishlist(false);
        }
        else if (checkIsAvailable(coin.id)) {
            setIsInWishlist(true);
        }
        else {
            setIsInWishlist(false);
        }
    }, [page])


    function handleWishlist() {
        const allWishListCoins = JSON.parse(localStorage.getItem('wishlist'));

        if (allWishListCoins == null) {
            let newArr = [];
            newArr.push(coin);
            localStorage.setItem('wishlist', JSON.stringify(newArr));
            setWishlistCoins(newArr);
            setIsInWishlist(true);
        }
        else {
            if (checkIsAvailable(coin.id)) {
                removeItemFromWishlist(coin.id);
                setIsInWishlist(false);
            }
            else {
                allWishListCoins.push(coin);
                localStorage.setItem('wishlist', JSON.stringify(allWishListCoins));
                setWishlistCoins(allWishListCoins);
                setIsInWishlist(true);
            }
        }
    }

    function removeItemFromWishlist(wishlistCoinId) {
        const allWishListCoins = JSON.parse(localStorage.getItem('wishlist'));
    
        for (let i = 0; i < allWishListCoins.length; i++) {
            if (wishlistCoinId == allWishListCoins[i].id) {
                allWishListCoins.splice(i, 1);
                localStorage.setItem('wishlist', JSON.stringify(allWishListCoins));
                setWishlistCoins(allWishListCoins);
            }
        }
    }

    return (
        <tr>
            <Tooltip title="Logo" placement='bottom-start'>
                <td className='list-coin-logo'>
                    <img src={coin.image} />
                </td>
            </Tooltip>

            <td className='list-coin-info' onClick={() => navigate(`/coin/${coin.id}`)}>
                <Tooltip title="Symbol" placement='bottom-start'>
                    <p className='list-coin-symbol'>{coin.symbol}</p>
                </Tooltip>

                <Tooltip title="Name" placement='bottom-start'>
                    <p className='list-coin-name'>{coin.name}</p>
                </Tooltip>
            </td>

            <td className='list-market-cap' onClick={() => navigate(`/coin/${coin.id}`)}>
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

            <td className='list-current-price' onClick={() => navigate(`/coin/${coin.id}`)}>
                <Tooltip title="Current Price" placement='bottom-start'>
                    <p className={coin.market_cap_change_percentage_24h > 0 ? "list-green-tag" : "list-red-tag"}>${coin.current_price.toLocaleString()}</p>
                </Tooltip>
            </td>

            <td className='list-total-volume' onClick={() => navigate(`/coin/${coin.id}`)}>
                <Tooltip title="Total Volume" placement='bottom'>
                    <p className='desktop-total-volume'>${coin.total_volume.toLocaleString()}</p>
                </Tooltip>

                <Tooltip title="Total Volume" placement='bottom'>
                    <p className='mobile-total-volume'>${convertNumber(coin.total_volume.toLocaleString())}</p>
                </Tooltip>
            </td>

            <td className='list-market-cap-value' onClick={() => navigate(`/coin/${coin.id}`)}>
                <Tooltip title="Market Cap" placement='bottom'>
                    <p className='dekstop-market-cap'>${coin.market_cap.toLocaleString()}</p>
                </Tooltip>

                <Tooltip title="Market Cap" placement='bottom'>
                    <p className='mobile-market-cap'>${convertNumber(coin.market_cap.toLocaleString())}</p>
                </Tooltip>
            </td>

            <td className='wishlist-td'>
                <div className={coin.market_cap_change_percentage_24h > 0 ? "green-tag" : "red-tag"} onClick={handleWishlist}>
                    {
                        isInWishlist ? <Tooltip title="Remove From Wishlist" placement='bottom'><StarOutlinedIcon sx={{ transform: "scale(1.5)" }} /></Tooltip> : <Tooltip title="Add To Wishlist" placement='bottom'><StarBorderOutlinedIcon sx={{ transform: "scale(1.5)" }} /></Tooltip>
                    }
                </div>
            </td>
        </tr>
    )
}

export default List