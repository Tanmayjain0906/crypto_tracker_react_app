import { useEffect, useState, useContext } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import "./style.css"
import get100Coins from "../../../functions/get100coins";
import all100CoinsContext from "../../../context/all100CoinsContext";

export default function SelectCoins({ crypto1, crypto2, handleCrypto}) {
    const theame = localStorage.getItem('theme');
    console.log(theame);
    const [allCoins, setAllCoins] = useState([]);
    const {all100Coins} = useContext(all100CoinsContext);
    console.log(all100Coins);
    useEffect(() => {
        console.log("selecting");
        fetchCoins();
    }, [])

    async function fetchCoins() {
        console.log(all100Coins);
        if (all100Coins.length > 0) {
            setAllCoins(all100Coins);
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
                    onChange={(e) => handleCrypto(e.target.value , true)}
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
                            <MenuItem value={coin.id} sx={{ color: "#111", fontFamily: "Inter", fontWeight: "600" }} key={i}>{coin.name}</MenuItem>
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
                    onChange={(e) => handleCrypto(e.target.value , false)}
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
                            <MenuItem value={coin.id}sx={{ color: "#111", fontFamily: "Inter", fontWeight: "600" }} key={i}>{coin.name}</MenuItem>
                        ))
                    }

                </Select>
            </div>
        </div>
    );
}