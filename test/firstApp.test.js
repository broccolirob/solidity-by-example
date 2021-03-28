const { expect } = require("chai");

describe("First App", () => {
  const setup = async () => {
    const Contract = await ethers.getContractFactory("Counter");
    const contract = await Contract.deploy();
    await contract.deployed();
    return contract;
  };

  describe("get()", () => {
    it("has a public getter function", async () => {
      const contract = await setup();
      expect(await contract.count()).to.equal(0);
    });

    it("has a get method", async () => {
      const contract = await setup();
      expect(await contract.get()).to.equal(await contract.count());
    });
  });

  describe("inc()", () => {
    it("increments the count variable", async () => {
      const contract = await setup();
      expect(await contract.get()).to.equal(0);
      await contract.inc();
      expect(await contract.get()).to.equal(1);
    });
  });

  describe("dec()", () => {
    it("decrements the count variable", async () => {
      const contract = await setup();
      await contract.inc();
      expect(await contract.get()).to.equal(1);
      await contract.dec();
      expect(await contract.get()).to.equal(0);
    });

    it("throws and error when you decrement past 0", async () => {
      const contract = await setup();
      await expect(contract.dec()).to.be.revertedWith(
        "Cannot decrement count below 0."
      );
    });
  });
});
