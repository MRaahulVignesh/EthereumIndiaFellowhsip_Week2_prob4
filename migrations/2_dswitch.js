const Dswitch = artifacts.require("Dswitch");

module.exports = function(deployer) {
  deployer.deploy(Dswitch, "0xa95E65b4c64f14f36A222D4EA4DBF60837164fE2");
};
