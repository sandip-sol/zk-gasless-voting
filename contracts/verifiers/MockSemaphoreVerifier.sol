// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {IProofVerifier} from "./interfaces/IProofVerifier.sol";

/// @notice Test-only mock of a Semaphore-like verifier.
/// proofData is encoded as: abi.encode(address identity, bool valid)
/// - If valid == false -> revert to simulate invalid proof.
/// - If valid == true  -> return keccak256(abi.encode(pollId, identity)) as the nullifier.
/// In real life, this contract would validate a zkSNARK and derive a poll-scoped nullifier.
contract MockSemaphoreVerifier is IProofVerifier {
    function verifyProof(
        uint256 pollId,
        bytes calldata proofData
    ) external pure returns (bytes32 nullifier) {
        (address identity, bool valid) = abi.decode(proofData, (address, bool));
        require(valid, "invalid proof");
        return keccak256(abi.encode(pollId, identity));
    }
}
