import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import WishlistCoinProvider from './context/WishlistCoinProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <WishlistCoinProvider>
        <App />
    </WishlistCoinProvider>

);


