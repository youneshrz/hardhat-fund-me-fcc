const { network } = require("hardhat");
const {
  developmentChains,
  INITIAL_ANSWER,
  DECIMALS,
} = require("../halper-hardhat-config");
module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  //const chainId = network.config.chainId;

  if (developmentChains.includes(network.name)) {
    //if (chainId == 31337) {
    log("Local network detected! Deploying mocks ...");
    await deploy("MockV3Aggregator", {
      contract: "MockV3Aggregator",
      from: deployer,
      log: true,
      args: [DECIMALS, INITIAL_ANSWER],
    });
    log("Mocks deployed! ");
    log("_____________________________________________________");
  }
};

module.exports.tags = ["all", "mocks"];
