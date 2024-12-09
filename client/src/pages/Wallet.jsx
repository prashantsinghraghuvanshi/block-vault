import toast from "react-hot-toast";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {useWeb3Context} from "../contexts/useWeb3Context";
import {connectWallet} from "../utils/connectWallet"

const Wallet = () => {
    const navigateTo=useNavigate();
    const {updateWeb3State, web3State}=useWeb3Context();
    const {selectedAccount}=web3State;

    useEffect(()=>{
        if(selectedAccount){
            navigateTo("/home");
        }
    },[selectedAccount, navigateTo]);

    const handleWalletConnection= async()=>{
        const {contractInstance, selectedAccount}=await connectWallet();
        toast.success("wallet connection successfull.");

        updateWeb3State({contractInstance, selectedAccount});
    }

    return (<>
        <h2>Hello from wallet.</h2>
        <button onClick={handleWalletConnection}>Connect Wallet</button>
    </>);
}
 
export default Wallet;