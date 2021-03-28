// SPDX-License-Identifier: MIT
pragma solidity ^0.7.6;

contract Counter {
  uint public count;

  function get() public view returns (uint) {
    return count;
  }

  function inc() public {
    require(count <= type(uint).max, "Cannot increment past max integer.");
    count += 1;
  }

  function dec() public {
    require(count > 0, "Cannot decrement count below 0.");
    count -= 1;
  }
}