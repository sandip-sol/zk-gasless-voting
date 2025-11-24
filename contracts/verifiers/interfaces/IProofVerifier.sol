// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/// @notice Interface a ZK verifier adapter must implement.
/// It returns a poll-scoped nullifier if the proof is valid; MUST revert if invalid.
interface IProofVerifier {
    function verifyProof(
        uint256 pollId,
        bytes calldata proofData
    ) external view returns (bytes32 nullifier);
}
