let Pay = artifacts.require('Pay');

module.exports = function(deployer) {
    deployer.deploy(Pay, "0xA57A8123ba5ca5f0C2b497513A58d25514392234");
}