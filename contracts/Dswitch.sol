// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

contract Dswitch {

    address payable presetAddress;
    address public ownerAddress;
    bool public active;
    uint256 lastActive;
    uint intervalTime;

    fallback() external payable{}

      modifier onlyOwner {
        require(msg.sender == ownerAddress, "Only owner can call this function.");
        _;
    }

    event StillActive(
        string status,
        uint256 lastActive
    );

    event Transfer(
        address _from,
        address _to,
        uint amount
    );

     constructor(address payable _presetAddress, uint _intervalTime) public {
        ownerAddress = msg.sender;
        presetAddress = _presetAddress;
        intervalTime = _intervalTime;
        active = true;
    }

    function still_active() public onlyOwner returns(bool) {
        active = true;
        lastActive = block.timestamp;
        emit StillActive("User Still Alive", block.timestamp);
        return active;
    }

    function transfer() public payable {
        require(block.timestamp >= (lastActive + 200 seconds), "cannot transfer the funds, user still alive");
        require(msg.sender == presetAddress, "Not an authorized heir");
        presetAddress.transfer(address(this).balance);
        emit Transfer(address(this), presetAddress, address(this).balance);
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

}
