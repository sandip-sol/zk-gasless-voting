// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {AnonPoll} from "./AnonPoll.sol";

/// @notice Permissionless factory to create anonymous polls.
contract PollFactory {
    uint256 public nextId;
    event PollCreated(uint256 indexed pollId, address poll, string questionCID);

    function createAnonPoll(
        string memory questionCID,
        uint64 start,
        uint64 end,
        uint256 optionsCount,
        address aggregator
    ) external returns (address poll) {
        poll = address(
            new AnonPoll(++nextId, questionCID, start, end, optionsCount, aggregator)
        );
        emit PollCreated(nextId, poll, questionCID);
    }
}
