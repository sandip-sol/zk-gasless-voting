(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/antigravity/contracts/ui/src/lib/config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CONFIG",
    ()=>CONFIG
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/antigravity/contracts/ui/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const CONFIG = {
    chainId: 560048,
    rpcUrl: ("TURBOPACK compile-time value", "https://hoodi.infura.io/v3/fa0159b5f0b940e4adb806069b1fb3de") || "http://127.0.0.1:8545",
    relayerUrl: ("TURBOPACK compile-time value", "http://localhost:4000") || "http://localhost:4000",
    contracts: {
        PollFactory: ("TURBOPACK compile-time value", "0x3fB497e37F7dFd8c39A10365aE9E66342655A902") || "",
        EligibilityAggregator: ("TURBOPACK compile-time value", "0x2745939Dca2144BFB28E01E16D8C760ab67AaE9E") || "",
        MockSemaphoreVerifier: ("TURBOPACK compile-time value", "0xF5600c94C6f609FAE48a7BDaf213acA61caABc49") || "",
        Forwarder: ("TURBOPACK compile-time value", "0x1312eb994565196bfBc3352fA86De33a58C54E9C") || ""
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/antigravity/contracts/ui/src/lib/abis.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnonPollABI",
    ()=>AnonPollABI,
    "EligibilityAggregatorABI",
    ()=>EligibilityAggregatorABI,
    "MockSemaphoreVerifierABI",
    ()=>MockSemaphoreVerifierABI,
    "PollFactoryABI",
    ()=>PollFactoryABI
]);
const AnonPollABI = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_pollId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_questionCID",
                "type": "string"
            },
            {
                "internalType": "uint64",
                "name": "_start",
                "type": "uint64"
            },
            {
                "internalType": "uint64",
                "name": "_end",
                "type": "uint64"
            },
            {
                "internalType": "uint256",
                "name": "optionsCount",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_aggregator",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "nullifier",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "option",
                "type": "uint256"
            }
        ],
        "name": "Voted",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "aggregator",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "end",
        "outputs": [
            {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "pollId",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "questionCID",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "results",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "start",
        "outputs": [
            {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "tallies",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "name": "usedNullifier",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "option",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "verifier",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "proofData",
                "type": "bytes"
            }
        ],
        "name": "vote",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
const PollFactoryABI = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "pollId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "poll",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "questionCID",
                "type": "string"
            }
        ],
        "name": "PollCreated",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "questionCID",
                "type": "string"
            },
            {
                "internalType": "uint64",
                "name": "start",
                "type": "uint64"
            },
            {
                "internalType": "uint64",
                "name": "end",
                "type": "uint64"
            },
            {
                "internalType": "uint256",
                "name": "optionsCount",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "aggregator",
                "type": "address"
            }
        ],
        "name": "createAnonPoll",
        "outputs": [
            {
                "internalType": "address",
                "name": "poll",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "nextId",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];
const EligibilityAggregatorABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_dao",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "verifier",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "allowed",
                "type": "bool"
            }
        ],
        "name": "VerifierUpdated",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "pollId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "verifier",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "proofData",
                "type": "bytes"
            }
        ],
        "name": "check",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "dao",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "isVerifier",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "verifier",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "allowed",
                "type": "bool"
            }
        ],
        "name": "setVerifier",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
const MockSemaphoreVerifierABI = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "pollId",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "proofData",
                "type": "bytes"
            }
        ],
        "name": "verifyProof",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "nullifier",
                "type": "bytes32"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/antigravity/contracts/ui/src/components/PollList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PollList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/antigravity/contracts/ui/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/antigravity/contracts/ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/antigravity/contracts/ui/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/antigravity/contracts/ui/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/antigravity/contracts/ui/src/lib/config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$src$2f$lib$2f$abis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/antigravity/contracts/ui/src/lib/abis.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$src$2f$components$2f$Providers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/antigravity/contracts/ui/src/components/Providers.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function PollList() {
    _s();
    const { provider } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$src$2f$components$2f$Providers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"])();
    const [polls, setPolls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PollList.useEffect": ()=>{
            const fetchPolls = {
                "PollList.useEffect.fetchPolls": async ()=>{
                    try {
                        // Use a read-only provider if wallet not connected
                        const readProvider = provider || new __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].JsonRpcProvider(__TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONFIG"].rpcUrl);
                        const factory = new __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(__TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONFIG"].contracts.PollFactory, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$src$2f$lib$2f$abis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PollFactoryABI"], readProvider);
                        // Fetch PollCreated events
                        // In a real app, we'd cache this or use a subgraph
                        const filter = factory.filters.PollCreated();
                        const events = await factory.queryFilter(filter);
                        const loadedPolls = await Promise.all(events.map({
                            "PollList.useEffect.fetchPolls": async (event)=>{
                                const { pollId, poll: pollAddress, questionCID } = event.args;
                                // Fetch details from the poll contract
                                const pollContract = new __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(pollAddress, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$src$2f$lib$2f$abis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnonPollABI"], readProvider);
                                const start = await pollContract.start();
                                const end = await pollContract.end();
                                // In a real app, we'd fetch the question from IPFS using questionCID
                                // Here we assume questionCID is the question text for simplicity or we mock it
                                const question = questionCID;
                                return {
                                    id: Number(pollId),
                                    address: pollAddress,
                                    question,
                                    start: Number(start),
                                    end: Number(end)
                                };
                            }
                        }["PollList.useEffect.fetchPolls"]));
                        setPolls(loadedPolls.reverse()); // Show newest first
                    } catch (err) {
                        console.error("Error fetching polls:", err);
                    } finally{
                        setLoading(false);
                    }
                }
            }["PollList.useEffect.fetchPolls"];
            fetchPolls();
        }
    }["PollList.useEffect"], [
        provider
    ]);
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Loading polls..."
    }, void 0, false, {
        fileName: "[project]/antigravity/contracts/ui/src/components/PollList.tsx",
        lineNumber: 65,
        columnNumber: 23
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
        children: [
            polls.map((poll)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: `/polls/${poll.id}`,
                    className: "block group",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold mb-2 group-hover:text-primary transition-colors",
                                children: poll.question
                            }, void 0, false, {
                                fileName: "[project]/antigravity/contracts/ui/src/components/PollList.tsx",
                                lineNumber: 69,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-muted-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Poll ID: ",
                                            poll.id
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/antigravity/contracts/ui/src/components/PollList.tsx",
                                        lineNumber: 71,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Ends: ",
                                            new Date(poll.end * 1000).toLocaleDateString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/antigravity/contracts/ui/src/components/PollList.tsx",
                                        lineNumber: 72,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/antigravity/contracts/ui/src/components/PollList.tsx",
                                lineNumber: 70,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/antigravity/contracts/ui/src/components/PollList.tsx",
                        lineNumber: 68,
                        columnNumber: 21
                    }, this)
                }, poll.id, false, {
                    fileName: "[project]/antigravity/contracts/ui/src/components/PollList.tsx",
                    lineNumber: 67,
                    columnNumber: 32
                }, this)),
            polls.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "col-span-full text-center text-muted-foreground",
                children: "No polls found. Create one!"
            }, void 0, false, {
                fileName: "[project]/antigravity/contracts/ui/src/components/PollList.tsx",
                lineNumber: 76,
                columnNumber: 36
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/antigravity/contracts/ui/src/components/PollList.tsx",
        lineNumber: 66,
        columnNumber: 10
    }, this);
}
_s(PollList, "QCMzCq1zdpqELTKoREJ2sLzpp14=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$src$2f$components$2f$Providers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"]
    ];
});
_c = PollList;
var _c;
__turbopack_context__.k.register(_c, "PollList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/antigravity/contracts/ui/src/components/CreatePoll.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreatePoll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/antigravity/contracts/ui/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/antigravity/contracts/ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/antigravity/contracts/ui/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$src$2f$components$2f$Providers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/antigravity/contracts/ui/src/components/Providers.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/antigravity/contracts/ui/src/lib/config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$src$2f$lib$2f$abis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/antigravity/contracts/ui/src/lib/abis.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function CreatePoll() {
    _s();
    const { provider, account, connect } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$src$2f$components$2f$Providers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"])();
    const [question, setQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [optionsCount, setOptionsCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(2);
    const [duration, setDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(3600); // 1 hour
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const createPoll = async (e)=>{
        e.preventDefault();
        if (!provider || !account) {
            connect();
            return;
        }
        setLoading(true);
        try {
            const signer = await provider.getSigner();
            const factory = new __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(__TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONFIG"].contracts.PollFactory, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$src$2f$lib$2f$abis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PollFactoryABI"], signer);
            const start = Math.floor(Date.now() / 1000);
            const end = start + duration;
            // In a real app, we'd upload question to IPFS and get CID
            // Here we just use the text as the CID
            const tx = await factory.createAnonPoll(question, start, end, optionsCount, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONFIG"].contracts.EligibilityAggregator);
            await tx.wait();
            alert('Poll created successfully!');
            setQuestion('');
            // Ideally refresh list or redirect
            window.location.reload();
        } catch (err) {
            console.error("Failed to create poll:", err);
            alert('Failed to create poll');
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-lg border bg-card text-card-foreground shadow-sm p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold mb-4",
                children: "Create Poll"
            }, void 0, false, {
                fileName: "[project]/antigravity/contracts/ui/src/components/CreatePoll.tsx",
                lineNumber: 47,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: createPoll,
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium mb-1",
                                children: "Question"
                            }, void 0, false, {
                                fileName: "[project]/antigravity/contracts/ui/src/components/CreatePoll.tsx",
                                lineNumber: 50,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: question,
                                onChange: (e_0)=>setQuestion(e_0.target.value),
                                className: "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/antigravity/contracts/ui/src/components/CreatePoll.tsx",
                                lineNumber: 51,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/antigravity/contracts/ui/src/components/CreatePoll.tsx",
                        lineNumber: 49,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium mb-1",
                                children: "Options Count"
                            }, void 0, false, {
                                fileName: "[project]/antigravity/contracts/ui/src/components/CreatePoll.tsx",
                                lineNumber: 54,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                min: "2",
                                value: optionsCount,
                                onChange: (e_1)=>setOptionsCount(parseInt(e_1.target.value)),
                                className: "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/antigravity/contracts/ui/src/components/CreatePoll.tsx",
                                lineNumber: 55,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/antigravity/contracts/ui/src/components/CreatePoll.tsx",
                        lineNumber: 53,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium mb-1",
                                children: "Duration (seconds)"
                            }, void 0, false, {
                                fileName: "[project]/antigravity/contracts/ui/src/components/CreatePoll.tsx",
                                lineNumber: 58,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                min: "60",
                                value: duration,
                                onChange: (e_2)=>setDuration(parseInt(e_2.target.value)),
                                className: "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/antigravity/contracts/ui/src/components/CreatePoll.tsx",
                                lineNumber: 59,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/antigravity/contracts/ui/src/components/CreatePoll.tsx",
                        lineNumber: 57,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: loading,
                        className: "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full",
                        children: loading ? 'Creating...' : 'Create Poll'
                    }, void 0, false, {
                        fileName: "[project]/antigravity/contracts/ui/src/components/CreatePoll.tsx",
                        lineNumber: 61,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/antigravity/contracts/ui/src/components/CreatePoll.tsx",
                lineNumber: 48,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/antigravity/contracts/ui/src/components/CreatePoll.tsx",
        lineNumber: 46,
        columnNumber: 10
    }, this);
}
_s(CreatePoll, "Ozb+WDR8n5GP0g6Qu37ZRqu6TwI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$src$2f$components$2f$Providers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"]
    ];
});
_c = CreatePoll;
var _c;
__turbopack_context__.k.register(_c, "CreatePoll");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/antigravity/contracts/ui/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/antigravity/contracts/ui/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/antigravity/contracts/ui/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$src$2f$components$2f$PollList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/antigravity/contracts/ui/src/components/PollList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$src$2f$components$2f$CreatePoll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/antigravity/contracts/ui/src/components/CreatePoll.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
function Home() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "f127a7d9c75d921eec12361f4523bafc1e4b12770e82e31a11b5d76298600191") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f127a7d9c75d921eec12361f4523bafc1e4b12770e82e31a11b5d76298600191";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold tracking-tight",
                        children: "Active Polls"
                    }, void 0, false, {
                        fileName: "[project]/antigravity/contracts/ui/src/app/page.tsx",
                        lineNumber: 16,
                        columnNumber: 75
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/antigravity/contracts/ui/src/app/page.tsx",
                    lineNumber: 16,
                    columnNumber: 19
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$src$2f$components$2f$PollList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/antigravity/contracts/ui/src/app/page.tsx",
                    lineNumber: 16,
                    columnNumber: 148
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/antigravity/contracts/ui/src/app/page.tsx",
            lineNumber: 16,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-8",
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "border-t pt-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$src$2f$components$2f$CreatePoll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/antigravity/contracts/ui/src/app/page.tsx",
                        lineNumber: 23,
                        columnNumber: 76
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/antigravity/contracts/ui/src/app/page.tsx",
                    lineNumber: 23,
                    columnNumber: 41
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/antigravity/contracts/ui/src/app/page.tsx",
            lineNumber: 23,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=antigravity_contracts_ui_src_25266155._.js.map