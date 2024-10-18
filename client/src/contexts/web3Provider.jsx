import { Children, useState } from "react";
import { Web3Context } from "./createWeb3Context";

const Web3Provider = ({children}) => {
    const [web3State, setWeb3State]=useState({
        contractInstance:null,
        selectedAccount:null,
    })
    return ( 
        <Web3Context.Provider>
            {Children}
        </Web3Context.Provider>
     );
}
 


export default Web3Provider;