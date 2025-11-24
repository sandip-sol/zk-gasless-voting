// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {IProofVerifier} from "./verifiers/interfaces/IProofVerifier.sol";

/// @notice DAO-managed allowlist of verifier adapters. Stateless aggregator.
contract EligibilityAggregator {
    mapping(address => bool) public isVerifier;
    address public immutable dao;

    event VerifierUpdated(address indexed verifier, bool allowed);

    constructor(address _dao) {
        dao = _dao;
    }

    function setVerifier(address verifier, bool allowed) external {
        require(msg.sender == dao, "only dao");
        isVerifier[verifier] = allowed;
        emit VerifierUpdated(verifier, allowed);
    }

    /// @notice Calls the provided verifier adapter and returns the poll-scoped nullifier.
    function check(
        uint256 pollId,
        address verifier,
        bytes calldata proofData
    ) external view returns (bytes32) {
        require(isVerifier[verifier], "verifier not allowed");
        return IProofVerifier(verifier).verifyProof(pollId, proofData);
    }
}
