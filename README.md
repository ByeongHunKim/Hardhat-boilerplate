# typescript-hardhat-boilerplate

# 목차

[1.reference](#1.-reference)

[2.installation](#2.-installation)

[3.file directory](#3.-file-directory)

[4.testing contract](#4.-testing-contract)

[5.environment variables](#5.-environment-variables)

[6.deploying contract](#6.-deploying-contract)

## 1. reference

## [Hardhat docs](https://hardhat.org/hardhat-runner/docs/getting-started#overview)
## [Alchemy Ethereum](https://www.alchemy.com/ethereum)
## [Alchemy Polygon](https://www.alchemy.com/polygon)

## 2. installation
- node v16.17.1
- npm 8.15.0
```shell
npm install
```

### 2.1 initial setting
```bash
npx hardhat init
npm install --save @openzeppelin/contracts
npm install dovenv
```

## 3. file directory
### 3.1 contracts/
- 스마트 컨트랙트 소스코드 파일 보관
### 3.2 scripts/
- 스마트 컨트랙트를 배포할 때 실행하는 스크립트코드 파일 보관
### 3.3 test/
- 스마트 컨트랙트를 테스트하는 소스코드 파일 보관
### 3.4 hardhat.config.ts
- 이더리움 테스트넷 또는 메인넷 등 스마트 컨트랙트를 배포할 네트워크를 설정할 수 있는 config 파일
## 4. testing contract
- `test/` 폴더에 있는 파일 실행
```shell
npx hardhat test test/Lock.ts
```

## 5. environment variables
- `$ touch .env`
- 또는 rename `.env.example` to `.env`
```bash
ALCHEMY_MUMBAI_API_KEY=
ALCHEMY_SEPOLIA_API_KEY=
PRIVATE_KEY=
```

## 6. deploying contract
- `scripts/` 폴더에 있는 파일 실행
- 로컬에 배포 후 테스트 하는 방법
  - `$ npx hardhat node` 
  - `$ npx hardhat run scripts/deploy.ts`
```shell
# sepolia bscMainnet bscTestnet
npx hardhat run scripts/deploy.ts --network mumbai
```
