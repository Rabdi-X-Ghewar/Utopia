import React, { useState } from "react";
import { uploadToIPFS } from "../../utils/ipfs";
import { ethers } from "ethers";

const MintTickets: React.FC = () => {
    // State variables with proper types
    const [eventId, setEventId] = useState<string>("");
    const [amount, setAmount] = useState<number>(1);
    const [imageHash, setImageHash] = useState<string>("");
    const [metadataUri, setMetadataUri] = useState<string>("");

    const handleMint = async () => {
        try {
            if (!file) {
                alert("Please upload an image.");
                return;
            }

            const ipfsHash = await uploadToIPFS(file);  // Upload file to IPFS
            setImageHash(ipfsHash);  // Store the returned IPFS hash

            const value = ethers.utils.parseEther("0.1"); // Example ticket price
            await uploadToIPFS(eventId, amount, ipfsHash, metadataUri, value);
            alert("Tickets minted successfully!");
        } catch (error) {
            console.error("Error minting tickets:", error);
            alert("Failed to mint tickets.");
        }
    };

    return (
        <div>
            <input
                placeholder="Event ID"
                onChange={(e) => setEventId(e.target.value)}
                value={eventId}
            />
            <input
                placeholder="Amount"
                type="number"
                onChange={(e) => setAmount(Number(e.target.value))}
                value={amount}
            />
            <input
                placeholder="Image Hash"
                onChange={(e) => setImageHash(e.target.value)}
                value={imageHash}
            />
            <input
                placeholder="Metadata URI"
                onChange={(e) => setMetadataUri(e.target.value)}
                value={metadataUri}
            />
            <button onClick={handleMint}>Mint Tickets</button>
        </div>
    );
};

export default MintTickets;
