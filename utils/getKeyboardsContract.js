import { ethers } from "ethers";

import abi from "../utils/Keyboards.json";

const contractAddress = "0x3383BdA0c67Ae123115C282750dD474BCfBAF8CA";
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if (ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}
