const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const contractName = "myContract"; // YOUR  CONTRACT NAME TO DEPLOY
  await hre.run("compile");
  const smartContract = await hre.ethers.getContractFactory(contractName);
  const contract = await smartContract.deploy();
  await contract.deployed();
  console.log(`${contractName} deployed to: ${contract.address}`);

  const contractArtifacts = await artifacts.readArtifactSync(contractName);
  fs.writeFileSync(
    "./artifacts/contractArtifacts.json",
    JSON.stringify(contractArtifacts, null, 2)
  );

  await hre.run("verify:verify", {
    address: contract.address,
    //constructorArguments: [],
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
