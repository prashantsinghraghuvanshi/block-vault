import ethers from "ethers"

export const connectWallet=async()=>{
    if(!window.ethereum){
        throw new Error("Metamask not installed !");
    }

    const accounts=await window.ethereum.request({
        method:"eth_requestAccounts"
    })

    const selectedAccount=accounts[0];

    const provider=ethers.BrowserProvider(window.ethereum);
    const signer=provider.getSigner();

    const contractAddress="";
    // contractAbi to be implemented 
    const contractAbi="";
    const contractInstance=new ethers.Contract(contractAddress,contractAbi,signer);

    return {contractInstance, selectedAccount};
}

export default connectWallet;