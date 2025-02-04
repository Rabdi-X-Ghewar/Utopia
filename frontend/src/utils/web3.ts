import { ethers } from "ethers";
import EventTicketingABI from "../contracts/compiled/EventTicketing.json";

const CONTRACT_ADDRESS = "your_contract_address";
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const contract = new ethers.Contract(CONTRACT_ADDRESS, EventTicketingABI.abi, signer);

export const mintTickets = async (eventId, amount, imageHash, metadataUri, value) => {
    return await contract.mintTickets(eventId, amount, imageHash, metadataUri, { value });
};
