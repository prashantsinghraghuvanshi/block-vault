import {ethers} from "ethers";
import toast from "react-hot-toast";
import contractAbi from "../constants/contractAbi.json";

export const connectWallet=async()=>{
    try {
        if(!window.ethereum){
            toast.error("Metamask is not installed");
            throw new Error("Metamask not installed !");
        }
    
        const accounts=await window.ethereum.request({
            method:"eth_requestAccounts"
        })
    
        const selectedAccount=accounts[0];
    
        // console.log(selectedAccount);
    
        const provider=new ethers.BrowserProvider(window.ethereum);     // to read data on network
        const signer=await provider.getSigner();                          // to write data on network
    
        const contractAddress="0xf354B21ead718418554A1e9b563B3280Aa3F4721";            
        const contractInstance=new ethers.Contract(contractAddress,contractAbi,signer);
    
        return {contractInstance, selectedAccount};

    } catch (error) {
        toast.error("Wallet connection failed");
        console.log(error);
    }
}

export default connectWallet;