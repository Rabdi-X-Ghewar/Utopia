import { CoinbaseWalletSDK } from "@coinbase/wallet-sdk";

const coinbaseWallet = new CoinbaseWalletSDK({
    appName: "EventTicketing",
    appLogoUrl: "logo.png",
});

const provider = coinbaseWallet.makeWeb3Provider("https://mainnet.infura.io/v3/YOUR_INFURA_KEY", 1);

export const connectToWallet = async () => {
    const accounts = await provider.request({ method: "eth_requestAccounts" });
    return accounts[0]; // Return the connected wallet address
};
