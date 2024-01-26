import { useState } from "react";
import all100CoinsContext from "./all100CoinsContext";

const All100CoinsProvider = (props) => {
    const [all100Coins , setAll100Coins] = useState([]);

    return(
        <all100CoinsContext.Provider value={{all100Coins, setAll100Coins}}>
            {props.children}
        </all100CoinsContext.Provider>
    )
}

export default All100CoinsProvider;