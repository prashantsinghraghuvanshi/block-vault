// import {useWeb3Context} from "../contexts/useWeb3Context";
import {connectWallet} from "../utils/connectWallet"

const Wallet = () => {
    // const web3State=useWeb3Context()

    return (<>
        <h2>Hello from wallet.</h2>
        <button onClick={connectWallet}>Connect Wallet</button>
    </>);
}
 
export default Wallet;