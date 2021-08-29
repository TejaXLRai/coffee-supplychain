// 2_first_contracts.js
const CoffeeSupplyChain = artifacts.require("CoffeeSupplyChain");

module.exports = function (deployer) {
  deployer.deploy(CoffeeSupplyChain);
};
