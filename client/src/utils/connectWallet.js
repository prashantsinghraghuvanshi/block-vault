import ethers from "ethers"

export const connectWallet=async()=>{
    if(!window.ethereum){
        throw new Error("Metamask not installed !");
    }

    const accounts=await window.ethereum.request({
        method:"eth_requestAccounts"
    })

    const selectedAccount=accounts[0];

    const provider=ethers.BrowserProvider(window.ethereum);     // to read data on network
    const signer=provider.getSigner();                          // to write data on network

    const contractAddress="";
    const contractAbi="";                                       // contractAbi to be implemented 
    const contractInstance=new ethers.Contract(contractAddress,contractAbi,signer);

    return {contractInstance, selectedAccount};
}

// export default connectWallet;