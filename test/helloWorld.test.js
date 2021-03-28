const { expect } = require("chai");

describe("Hello World", function () {
  const setupTests = async () => {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const helloWorld = await HelloWorld.deploy();
    await helloWorld.deployed();

    return helloWorld;
  };

  it("Should return the new greeting once it's changed", async function () {
    const contract = await setupTests();
    expect(await contract.greeting()).to.equal("Hello World");
  });
});
