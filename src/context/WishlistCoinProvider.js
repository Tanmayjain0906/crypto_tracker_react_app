import { useState } from "react";
import wishlistCoinContext from "./wishlistCoinContext";

const WishlistCoinProvider = (props) => {

    const [wishlistCoins, setWishlistCoins] = useState(JSON.parse(localStorage.getItem('wishlist')));

    return(
        <wishlistCoinContext.Provider value={{wishlistCoins, setWishlistCoins}}>
            {props.children}
        </wishlistCoinContext.Provider>
    )
}

export default WishlistCoinProvider;