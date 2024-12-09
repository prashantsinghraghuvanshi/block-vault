import { useWeb3Context } from "../contexts/useWeb3Context";

const Home = () => {
    const {web3State}=useWeb3Context();
    const {selectedAccount} = web3State;

    console.log(selectedAccount);

    return (
        <h1>
            Home Page
        </h1>
    );
}
 
export default Home;