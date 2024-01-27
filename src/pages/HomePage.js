import React, { useContext, useEffect } from 'react'
import Header from '../components/Common/Header'
import MainComponent from '../components/landingPage/MainComponent'
import all100CoinsContext from '../context/all100CoinsContext'
import get100coins from '../functions/get100coins';
import Footer from '../components/Common/Footer';

function HomePage() {

    const {setAll100Coins} = useContext(all100CoinsContext);

    useEffect(() => {
        fetchCoin();
    }, [])

    async function fetchCoin(){
        const coins = await get100coins();
        setAll100Coins(coins);
    }

    return (
        <div>
            <Header />
            <MainComponent />
            
            
        </div>
    )
}

export default HomePage