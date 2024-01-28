import React, {useEffect } from 'react'
import Header from '../components/Common/Header'
import MainComponent from '../components/landingPage/MainComponent'
import get100coins from '../functions/get100coins';

function HomePage() {
    
    useEffect(() => {
         fetchData();
    }, [])


    async function fetchData() {
        const coins = await get100coins();
        if (coins.length > 0) {
            sessionStorage.setItem("all100Coins", JSON.stringify(coins));
        }
    }
   
    return (
        <div>
            <Header />
            <MainComponent />      
        </div>
    )
}

export default HomePage