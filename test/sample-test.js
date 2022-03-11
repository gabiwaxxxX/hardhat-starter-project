const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    await greeter.deployed();

    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});

describe("myContract", () => {
  let myContract;

  beforeEach(async function () {
    const contractName = "myContract";
    await hre.run("compile");
    const smartContract = await hre.ethers.getContractFactory(contractName);
    myContract = await smartContract.deploy();
    await myContract.deployed();
    console.log(`${contractName} deployed to: ${myContract.address}`);
  });

  xit("Should return the correct version", async () => {});
});
