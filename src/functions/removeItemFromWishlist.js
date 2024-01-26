import wishlistCoinContext from "../context/wishlistCoinContext";

export default function removeItemFromWishlist(wishlistCoinId) {
    
    const allWishListCoins = JSON.parse(localStorage.getItem('wishlist'));

    for (let i = 0; i < allWishListCoins.length; i++) {
        if (wishlistCoinId == allWishListCoins[i].id) {
            allWishListCoins.splice(i, 1);
            localStorage.setItem('wishlist', JSON.stringify(allWishListCoins));
           
        }
    }
}
