import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

const ALCHEMY_MUMBAI_API_KEY = process.env.ALCHEMY_MUMBAI_API_KEY ? process.env.ALCHEMY_MUMBAI_API_KEY : '';
const ALCHEMY_SEPOLIA_API_KEY = process.env.ALCHEMY_SEPOLIA_API_KEY ?  process.env.ALCHEMY_SEPOLIA_API_KEY : "";
const PRIVATE_KEY = process.env.PRIVATE_KEY ? process.env.PRIVATE_KEY : "";

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  defaultNetwork: "local",
  networks: {
    mumbai:{
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_MUMBAI_API_KEY}`,
      chainId: 80001,
      accounts: [PRIVATE_KEY],
    },
    local: {
      url: "http://127.0.0.1:8545",
    },
    sepolia:{
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_SEPOLIA_API_KEY}`,
      chainId: 11155111,
      accounts: [PRIVATE_KEY],
    },
    bscMainnet:{
      url: `https://bsc-dataseed.binance.org/`,
      chainId: 56,
      accounts: [PRIVATE_KEY],
    },
    bscTestnet:{
      url: `https://data-seed-prebsc-1-s1.binance.org:8545/`,
      chainId: 97,
      accounts: [PRIVATE_KEY],
    },
  }
};
export default config;
