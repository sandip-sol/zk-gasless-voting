// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/// @dev Minimal interface to the aggregator; avoids import cycles.
interface IAggregator {
    function check(uint256 pollId, address verifier, bytes calldata proofData)
        external
        view
        returns (bytes32);
}

/// @notice Anonymous, duplication-proof poll using poll-scoped nullifiers.
/// Stores only tallies and a CID to off-chain question/options JSON.
contract AnonPoll {
    uint256 public immutable pollId;
    string  public questionCID;      // IPFS/Arweave CID
    uint64  public immutable start;  // epoch seconds
    uint64  public immutable end;    // epoch seconds
    address public immutable aggregator;

    mapping(bytes32 => bool) public usedNullifier;
    uint256[] public tallies;

    event Voted(bytes32 indexed nullifier, uint256 option);

    constructor(
        uint256 _pollId,
        string memory _questionCID,
        uint64 _start,
        uint64 _end,
        uint256 optionsCount,
        address _aggregator
    ) {
        require(_start < _end, "time");
        require(optionsCount >= 2, "min 2");
        pollId      = _pollId;
        questionCID = _questionCID;
        start       = _start;
        end         = _end;
        aggregator  = _aggregator;
        tallies     = new uint256[](optionsCount);
    }

    function vote(
        uint256 option,
        address verifier,
        bytes calldata proofData
    ) external {
        require(block.timestamp >= start && block.timestamp <= end, "window");
        require(option < tallies.length, "bad opt");

        bytes32 n = IAggregator(aggregator).check(pollId, verifier, proofData);
        require(!usedNullifier[n], "duplicate");
        usedNullifier[n] = true;

        tallies[option] += 1;
        emit Voted(n, option);
    }

    function results() external view returns (uint256[] memory) {
        return tallies;
    }
}
