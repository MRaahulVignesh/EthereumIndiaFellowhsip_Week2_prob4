// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

//import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";

contract Dswitch {

    address payable presetAddress;
    bool active;

    event StillActive(
        string status
    );

     constructor(address payable pAddress) public {
        presetAddress = pAddress;
        active = true;
    }

    function still_active() public  returns(bool) {
        active = true;
        emit StillActive("User Still Alive");
        return active;
    }

    function transfer() public payable {
        active = false;
        presetAddress.transfer(msg.value);
    }

}