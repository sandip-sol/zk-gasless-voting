export const CONFIG = {
    chainId: 560048, // Sepolia (Hoodi)
    rpcUrl: process.env.NEXT_PUBLIC_RPC_URL || "https://hoodi.infura.io/v3/fa0159b5f0b940e4adb806069b1fb3de",
    relayerUrl: process.env.NEXT_PUBLIC_RELAYER_URL || "http://localhost:4000",
    contracts: {
        PollFactory: process.env.NEXT_PUBLIC_POLL_FACTORY_ADDRESS || "",
        EligibilityAggregator: process.env.NEXT_PUBLIC_ELIGIBILITY_AGGREGATOR_ADDRESS || "",
        MockSemaphoreVerifier: process.env.NEXT_PUBLIC_MOCK_SEMAPHORE_VERIFIER_ADDRESS || "",
        Forwarder: process.env.NEXT_PUBLIC_FORWARDER_ADDRESS || ""
    }
};
