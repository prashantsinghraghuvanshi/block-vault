import toast from "react-hot-toast";
import "./Wallet.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useWeb3Context } from "../contexts/useWeb3Context";
import { connectWallet } from "../utils/connectWallet";

const Wallet = () => {
  const navigateTo = useNavigate();
  const { updateWeb3State, web3State } = useWeb3Context();
  const { selectedAccount } = web3State;

  useEffect(() => {
    if (selectedAccount) {
      navigateTo("/home");
    }
  }, [selectedAccount, navigateTo]);

  const handleWalletConnection = async () => {
    const { contractInstance, selectedAccount } = await connectWallet();
    toast.success("wallet connection successfull.");

    updateWeb3State({ contractInstance, selectedAccount });
  };

  return (
    <>
      <h1>Welcome to Block Vault</h1>
      <h5>
        a secure digital platform that enables users to register and upload
        data, including ID proofs, onto a blockchain for tamper-proof storage.
        The system ensures data integrity and confidentiality, leveraging
        decentralized nature of blockchain to provide secure, transparent, and
        immutable records for personal or institutional use
      </h5>
      <h2>Authenticate through your wallet</h2>
      <button onClick={handleWalletConnection}>Connect Wallet</button>
    </>
  );
};

export default Wallet;
