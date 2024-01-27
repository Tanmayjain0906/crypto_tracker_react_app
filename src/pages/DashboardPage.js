import React, { useEffect, useState, useContext } from "react";
import Tabs from "../components/Dashboard/Tabs";
import Header from "../components/Common/Header";
import Search from "../components/Dashboard/Search";
import PaginationComponent from "../components/Dashboard/PaginationComponent";
import Loader from "../components/Common/Loader";
import get100coins from "../functions/get100coins";
import all100CoinsContext from "../context/all100CoinsContext";
import Footer from '../components/Common/Footer';

function DashboardPage() {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [paginatedCoins, setPaginatedCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const { setAll100Coins } = useContext(all100CoinsContext); // it is used to hold 100 coins because api creates problems

    //handle search globally passed as a prop to search component
    const searchChanged = (value) => {
        setSearch(value);
    }

    // handle the page this fn transfer to the pagination component 
    const handlePageChange = (event, value) => {
        setPage(value);
        const startingIndex = (value - 1) * 10;
        const lastIndex = ((value - 1) * 10) + 10;
        setPaginatedCoins(coins.slice(startingIndex, lastIndex));
    };

    const filterSearch = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase().trim()) || coin.symbol.toLowerCase().includes(search.toLowerCase().trim()))

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        setIsLoading(true);

        const coins = await get100coins();
        setAll100Coins(coins);

        if (coins.length > 0) {
            setCoins(coins);
            setPaginatedCoins(coins.slice(0, 10));
        }


        setIsLoading(false);

    }

    if (isLoading) {
        return (
            <div>
                <Header />
                <Loader />
            </div>
        )
    }

    return (
        <div>
            <Header />
            <Search search={search} searchChanged={searchChanged} />
            <div className="tabs">
                {/* //if you want to search there is no need of pagination */}
                <Tabs coins={search ? filterSearch : paginatedCoins} page={page} />
            </div>

            {/* //passing the props to access pages */}
            {
                !search && <PaginationComponent page={page} handlePageChange={handlePageChange} totalPages={10} />
            }

            {
                (search && filterSearch.length == 0) && <h1 className="no-item">No Item Found.</h1>
            }

            <Footer />
        </div>
    )
}

export default DashboardPage;