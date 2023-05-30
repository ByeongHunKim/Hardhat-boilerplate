import { ethers } from 'hardhat';
import { getDatetimeString } from '../utils/timeUtils';
async function main() {
  const currentTimestampInSeconds = Math.round(Date.now());
  const contractCreatedTime = getDatetimeString(currentTimestampInSeconds)
  const unlockTime = currentTimestampInSeconds + 60;
  const Lock = await ethers.getContractFactory("Lock");
  const lock = await Lock.deploy(unlockTime);

  await lock.deployed();

  console.log(
    `${lock.address} contract is deployed at ${contractCreatedTime}`
  );
  console.log(`
 click this link if you deploy contract on Ethereum Sepolia Testnet
 https://sepolia.etherscan.io/address/${lock.address} \n
 click this link if you deploy contract on Bianace Smart Chain Testnet
 https://testnet.bscscan.com/address/${lock.address} \n
 click this link if you deploy contract on Polygon Mumbai Testnet
 https://mumbai.polygonscan.com/address/${lock.address} \n
  `)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
