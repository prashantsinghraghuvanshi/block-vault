import toast from "react-hot-toast";
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
    <div className="text-lime-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-extrabold mb-24 text-center">
        Welcome to Block Vault
      </h1>
      <h5 className="text-lg max-w-2xl text-center mb-20 leading-relaxed">
        A secure digital platform that enables users to register and upload
        data, including ID proofs, onto a blockchain for tamper-proof storage.
        The system ensures data integrity and confidentiality, leveraging the
        decentralized nature of blockchain to provide secure, transparent, and
        immutable records for personal or institutional use.
      </h5>
      <h2 className="text-2xl font-semibold mb-20 text-center">
        Authenticate through your wallet
      </h2>
      <button
        className="bg-white text-indigo-600 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-indigo-100 transition duration-300"
        onClick={handleWalletConnection}
      >
        Connect Wallet
      </button>
    </div>
  );
};

export default Wallet;
