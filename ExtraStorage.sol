// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import "./SimpleStorage.sol";

contract ExtraStorage is SimpleStorage {
    function store(uint256 _age) public override {
        age = _age + 5;
    }
}