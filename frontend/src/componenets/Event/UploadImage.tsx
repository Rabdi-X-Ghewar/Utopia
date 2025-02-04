import React, { useState } from "react";
import { uploadToIPFS } from "../../utils/ipfs";

const UploadImage = () => {
    const [file, setFile] = useState(null);
    const [ipfsHash, setIpfsHash] = useState("");

    const handleUpload = async () => {
        const hash = await uploadToIPFS(file);
        setIpfsHash(hash);
    };

    return (
        <div>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={handleUpload}>Upload to IPFS</button>
            {ipfsHash && <p>IPFS Hash: {ipfsHash}</p>}
        </div>
    );
};

export default UploadImage;
