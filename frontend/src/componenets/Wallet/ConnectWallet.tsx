import React, { useState } from "react";
import { connectToWallet } from "../utils/wallet";

const ConnectWallet = () => {
    const [walletAddress, setWalletAddress] = useState("");

    const handleConnect = async () => {
        const address = await connectToWallet();
        setWalletAddress(address);
    };

    return (
        <div>
            <button onClick={handleConnect}>Connect Wallet</button>
            {walletAddress && <p>Connected: {walletAddress}</p>}
        </div>
    );
};

export default ConnectWallet;
