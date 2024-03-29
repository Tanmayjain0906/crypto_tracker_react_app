import React, { useEffect, useState, useContext } from 'react'
import "./style.css"
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import TrendingDownOutlinedIcon from '@mui/icons-material/TrendingDownOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { useNavigate } from 'react-router-dom';
import checkIsAvailable from '../../../functions/checkIsAvailable';
import wishlistCoinContext from '../../../context/wishlistCoinContext';
import { motion } from 'framer-motion';
import Tooltip from '@mui/material/Tooltip';
import { toast } from 'react-toastify';

function Grid({ coin, page }) {
    const { wishlistCoins, setWishlistCoins } = useContext(wishlistCoinContext);
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
     console.log("enetr in grid");
    }, [page, coin.id])

    const randomDelay = Math.random() * 1;

    function handleWishlist() {
        const allWishListCoins = JSON.parse(localStorage.getItem('wishlist'));

        if (allWishListCoins == null) {
            let newArr = [];
            newArr.push(coin);
            localStorage.setItem('wishlist', JSON.stringify(newArr));
            setWishlistCoins(newArr);
            setIsInWishlist(true);
            toast.success(`${coin.name} Added to wishlist`);
        }
        else {
            if (checkIsAvailable(coin.id)) {
                removeItemFromWishlist(coin.id);
                setIsInWishlist(false);
                toast.success(`${coin.name} Removed from wishlist`);
            }
            else {
                allWishListCoins.push(coin);
                localStorage.setItem('wishlist', JSON.stringify(allWishListCoins));
                setWishlistCoins(allWishListCoins);
                setIsInWishlist(true);
                toast.success(`${coin.name} Added to wishlist`);
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
        <motion.div className={`card ${coin.market_cap_change_percentage_24h > 0 ? "hover-green" : "hover-red"}`} initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: randomDelay }}>
            <div className='coin-info-container'>
                <div className='logo-div' onClick={() => navigate(`/coin/${coin.id}`)}>
                    <img src={coin.image} />
                    <div className='coin-info'>
                        <p className='symbol'>{coin.symbol}</p>
                        <p className='name'>{coin.name}</p>
                    </div>
                </div>
                <div className={coin.market_cap_change_percentage_24h > 0 ? "green-tag" : "red-tag"} onClick={handleWishlist}>
                    {
                        isInWishlist ? <Tooltip title="Remove From Wishlist" placement='bottom'><StarOutlinedIcon sx={{ transform: "scale(1.5)" }} /></Tooltip> : <Tooltip title="Add To Wishlist" placement='bottom'><StarBorderOutlinedIcon sx={{ transform: "scale(1.5)" }} /></Tooltip>
                    }
                </div>

            </div>

            <div className='market-cap' onClick={() => navigate(`/coin/${coin.id}`)}>
                <p className={coin.market_cap_change_percentage_24h > 0 ? "green-cap" : "red-cap"}>{coin.market_cap_change_percentage_24h.toFixed(2)}%</p>

                <p className={coin.market_cap_change_percentage_24h > 0 ? "green-rise" : "red-rise"}>
                    {
                        coin.market_cap_change_percentage_24h > 0 ? <TrendingUpOutlinedIcon /> : <TrendingDownOutlinedIcon />
                    }
                </p>
            </div>

            <div className='current-price' onClick={() => navigate(`/coin/${coin.id}`)}>
                <p className={coin.market_cap_change_percentage_24h > 0 ? "green-tag" : "red-tag"}>${coin.current_price.toLocaleString()}</p>
            </div>

            <div className="volumes" onClick={() => navigate(`/coin/${coin.id}`)}>
                <p>Total Volume: ${coin.total_volume.toLocaleString()}</p>
                <p>Market Cap: ${coin.market_cap.toLocaleString()}</p>
            </div>
        </motion.div>
    )
}

export default Grid