import React, { useContext } from 'react'
import Header from '../components/Common/Header';
import Tabs from "../components/Dashboard/Tabs";
import wishlistCoinContext from '../context/wishlistCoinContext';

function WishlistPage() {
  const { wishlistCoins } = useContext(wishlistCoinContext);

  return (
    <div>
      <Header />

      {
        (wishlistCoins == null || wishlistCoins.length == 0 || wishlistCoins == undefined) ? <div className='no-item-wishlist'>
        <h1>No Item</h1>
      </div> : <div className="tabs">
        <Tabs coins={wishlistCoins} />
      </div>
      }
      

    </div>
  )
}

export default WishlistPage;