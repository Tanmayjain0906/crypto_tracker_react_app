import React, { useContext, useState } from 'react'
import Header from '../components/Common/Header';
import Tabs from "../components/Dashboard/Tabs";
import wishlistCoinContext from '../context/wishlistCoinContext';
import Search from '../components/Dashboard/Search';

function WishlistPage() {
  const { wishlistCoins } = useContext(wishlistCoinContext);
  const [search, setSearch] = useState("");

  //handle search globally passed as a prop to search component
  const searchChanged = (value) => {
    setSearch(value);
  }
  const filterSearch = wishlistCoins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase().trim()) || coin.symbol.toLowerCase().includes(search.toLowerCase().trim()));

  return (
    <div>
      <Header />
      <Search search={search} searchChanged={searchChanged} />
      {
        (wishlistCoins == null || wishlistCoins.length == 0 || wishlistCoins == undefined) ? <div className='no-item-wishlist'>
          <h1>No Item</h1>
        </div> : <div className="tabs">
          <Tabs coins={filterSearch} />
        </div>
      }

      {
        (search && filterSearch.length == 0) && <h1 className="no-item">No Item Found.</h1>
      }
    </div>
  )
}

export default WishlistPage;