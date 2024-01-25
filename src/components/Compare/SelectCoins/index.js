import { useEffect, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import "./style.css"
import get100Coins from "../../../functions/get100coins";

export default function SelectCoins({ crypto1, crypto2, handleCrypto1, handleCrypto2 }) {
    const [allCoins, setAllCoins] = useState([]);
    useEffect(() => {
        fetchCoins();
    }, [])

    async function fetchCoins() {
        const coins = await get100Coins();

        if (coins.length > 0) {
            setAllCoins(coins);
        }
    }

    return (
        <div className='crypto-coin'>
            <div className='crypto-1-container'>
                <p>Crypto1</p>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={crypto1}
                    label="Days"
                    onChange={handleCrypto1}
                    sx={{
                        height: "2.5rem",
                        color: "var(--white)",
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "var(--white)",
                        },
                        "& .MuiSvgIcon-root": {
                            color: "var(--white)",
                        },
                        "&:hover": {
                            "&& fieldset": {
                                borderColor: "#3a80e9",
                            }
                        }
                    }}
                >
                    {
                        allCoins.map((coin, i) => (
                            <MenuItem value={coin.id} sx={{ color: "var(--black)", fontFamily: "Inter", fontWeight: "600" }} key={i}>{coin.name}</MenuItem>
                        ))
                    }

                </Select>
            </div>

            <div className='crypto-2-container'>
                <p>Crypto2</p>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={crypto2}
                    label="Days"
                    onChange={handleCrypto2}
                    sx={{
                        height: "2.5rem",
                        color: "var(--white)",
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "var(--white)",
                        },
                        "& .MuiSvgIcon-root": {
                            color: "var(--white)",
                        },
                        "&:hover": {
                            "&& fieldset": {
                                borderColor: "#3a80e9",
                            }
                        }
                    }}
                >
                    {
                        allCoins.map((coin, i) => (
                            <MenuItem value={coin.id} sx={{ color: "var(--black)", fontFamily: "Inter", fontWeight: "600" }} key={i}>{coin.name}</MenuItem>
                        ))
                    }

                </Select>
            </div>
        </div>
    );
}