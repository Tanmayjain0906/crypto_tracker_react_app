export default function checkIsAvailable(wishlistCoinId) {
    const allWishListCoins = JSON.parse(localStorage.getItem('wishlist'));

    for (let i = 0; i < allWishListCoins.length; i++) {
        if (wishlistCoinId == allWishListCoins[i].id) {
            return true;
        }
    }
    return false;
}