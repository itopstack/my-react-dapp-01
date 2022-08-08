const ethers = require("ethers");
const Lock = require("./artifacts/contracts/Lock.sol/Lock.json");

const lockAddress = "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512";

async function withdraw() {
  const provider = new ethers.providers.JsonRpcProvider(
    "http://127.0.0.1:8545/"
  );
  const signer = new ethers.Wallet("PRIVATE_KEY_HERE", provider);
  const contract = new ethers.Contract(lockAddress, Lock.abi, signer);
  try {
    const transaction = await contract.withdraw();
    const receipt = await transaction.wait();
    console.log(receipt);
  } catch (err) {
    console.log("Error: ", err);
  }
}

withdraw();
