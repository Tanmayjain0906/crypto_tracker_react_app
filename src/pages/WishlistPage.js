import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Common/Header';
import Tabs from "../components/Dashboard/Tabs";
import wishlistCoinContext from '../context/wishlistCoinContext';
import Search from '../components/Dashboard/Search';
import PaginationComponent from '../components/Dashboard/PaginationComponent';
import get100coins from '../functions/get100coins';


function WishlistPage() {
  const { wishlistCoins, setWishlistCoins } = useContext(wishlistCoinContext);
  const [search, setSearch] = useState("");
  const [enablePagination, setEnablePagination] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);


  //handle search globally passed as a prop to search component
  const searchChanged = (value) => {
    setSearch(value);
  }

  let filterSearch;

  if (wishlistCoins !== null) {
    filterSearch = wishlistCoins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase().trim()) || coin.symbol.toLowerCase().includes(search.toLowerCase().trim()));
  }

  // handle the page this fn transfer to the pagination component 
  const handlePageChange = (event, value) => {
    setPage(value);
    const startingIndex = (value - 1) * 10;
    let lastIndex = ((value - 1) * 10) + 10;
    if (lastIndex > wishlistCoins.length) {
      lastIndex = wishlistCoins.length;
    }
    setPaginatedCoins(wishlistCoins.slice(startingIndex, lastIndex));
  };


  useEffect(() => {
    updateWishliset();
  })

  useEffect(() => {
    if (wishlistCoins !== null) {
      if (wishlistCoins.length > 10) {
        setEnablePagination(true);
        const pages = Math.ceil(wishlistCoins.length / 10);
        setTotalPages(pages);
        if (paginatedCoins.length == 0) {
          setPaginatedCoins(wishlistCoins.slice(0, 10));
        }
        else {
          const startingIndex = (page - 1) * 10;
          let lastIndex = ((page - 1) * 10) + 10;
          if (lastIndex > wishlistCoins.length) {
            lastIndex = wishlistCoins.length;
          }
          setPaginatedCoins(wishlistCoins.slice(startingIndex, lastIndex));
        }
      }
      else {
        setEnablePagination(false);
      }
    }

  }, [wishlistCoins]);

  async function updateWishliset() {
    if (wishlistCoins !== null) {
      const wishlistArr = [];
      const coins = await get100coins();
      if (coins.length > 0) {
        for (let i = 0; i < wishlistCoins.length; i++) {
          for (let j = 0; j < coins.length; j++) {
            if (wishlistCoins[i].id == coins[j].id) {
              wishlistArr.push(coins[j]);
              break;
            }
          }
        }
        localStorage.setItem("wishlist", JSON.stringify(wishlistArr));
        setWishlistCoins(wishlistArr);
      }
    }
  }

  return (
    <div>
      <Header />

      {
        (wishlistCoins !== null && wishlistCoins.length > 0 && wishlistCoins !== undefined) && <Search search={search} searchChanged={searchChanged} />
      }

      {
        (wishlistCoins == null || wishlistCoins.length == 0 || wishlistCoins == undefined) ? <div className='no-item-wishlist'>
          <h1>No Item</h1>
        </div> : <div className="tabs">
          {
            !enablePagination && <Tabs coins={filterSearch} page={1} />
          }
          {
            enablePagination && <Tabs coins={search ? filterSearch : paginatedCoins} page={page} />
          }
        </div>
      }

      {
        (!search && enablePagination) && <PaginationComponent page={page} handlePageChange={handlePageChange} totalPages={totalPages} />
      }

      {
        (search && filterSearch.length == 0) && <h1 className="no-item">No Item Found.</h1>
      }


    </div>
  )
}

export default WishlistPage;