import axios from "axios";

// Define the type for the file input
export const uploadToIPFS = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append("file", file);

    try {
        // Make the API request to Pinata
        const response = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
            headers: {
                Authorization: `Bearer ${process.env.PINATA_API_KEY}`, // Ensure this is properly set in your environment variables
            },
        });

        // Return the IPFS hash from the response
        if (response.data?.IpfsHash) {
            return response.data.IpfsHash;
        } else {
            throw new Error("Pinata response did not contain an IPFS hash.");
        }
    } catch (error) {
        console.error("Error uploading to IPFS:", error);
        // Ensure to throw a custom error that provides better clarity
        throw new Error(`Failed to upload file to IPFS: ${error.message || error}`);
    }
};
