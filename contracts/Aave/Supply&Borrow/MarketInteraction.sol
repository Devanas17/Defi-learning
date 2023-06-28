// SPDX-License-Identifier: MIT

pragma solidity ^0.8.10;
import {IPool} from "@aave/core-v3/contracts/interfaces/IPool.sol";
import {IPoolAddressesProvider} from "@aave/core-v3/contracts/interfaces/IPoolAddressesProvider.sol";
import {IERC20} from "@aave/core-v3/contracts/dependencies/openzeppelin/contracts/IERC20.sol";

contract MarketInteraction {
    address public owner;

    IPoolAddressesProvider public immutable i_addressProvider;
    // IPool public immutable POOL;
    address private constant LINK_ADDRESS =
        0x07C725d58437504CA5f814AE406e70E21C5e8e9e;
    IERC20 private link;

     constructor(address _addressProvider) {
        i_addressProvider = IPoolAddressesProvider(_addressProvider);
        // POOL = IPool(i_addressProvider.getLendingPool());
        owner = payable(msg.sender);
        link = IERC20(LINK_ADDRESS);
    }
}