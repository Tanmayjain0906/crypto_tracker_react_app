import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import All100CoinsProvider from './context/All100CoinsProvider';
import WishlistCoinProvider from './context/WishlistCoinProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <All100CoinsProvider>
        <WishlistCoinProvider>
            <App />
        </WishlistCoinProvider>
    </All100CoinsProvider>
);


