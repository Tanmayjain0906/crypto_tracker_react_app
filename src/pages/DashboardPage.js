import React, { useEffect, useState } from "react";
import Tabs from "../components/Dashboard/Tabs";
import Header from "../components/Common/Header";
import axios from "axios";
import Search from "../components/Dashboard/Search";
import PaginationComponent from "../components/Dashboard/PaginationComponent";
import Loader from "../components/Common/Loader";

function DashboardPage() {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [paginatedCoins, setPaginatedCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    //handle search globally passed as a prop to search component
    const searchChanged = (value) => {
        console.log(value);
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
        try {
            const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en");

            setCoins(response.data);
            setPaginatedCoins(response.data.slice(0, 10));
            setIsLoading(false);
        }
        catch (err) {
            alert(err.message);
            setIsLoading(false);
        }
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
                <Tabs coins={search ? filterSearch : paginatedCoins} />
            </div>

            {/* //passing the props to access pages */}
            {
                !search && <PaginationComponent page={page} handlePageChange={handlePageChange} />
            }

            {
                (search && filterSearch.length == 0) && <h1 className="no-item">No Item Found.</h1>
            }
        </div>
    )
}

export default DashboardPage;