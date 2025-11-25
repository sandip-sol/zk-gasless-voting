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
    rpcUrl: ("TURBOPACK compile-time value", "https://hoodi.infura.io/v3/fa0159b5f0b940e4adb806069b1fb3de") || "https://hoodi.infura.io/v3/fa0159b5f0b940e4adb806069b1fb3de",
    relayerUrl: ("TURBOPACK compile-time value", "http://localhost:4000") || "http://localhost:4000",
    contracts: {
        PollFactory: ("TURBOPACK compile-time value", "0x4326AFDCA12d64c0CfBc5CC2d93b6d820C97c807") || "",
        EligibilityAggregator: ("TURBOPACK compile-time value", "0xDc49a288F821DE2158a34eE4AbF178435E214692") || "",
        MockSemaphoreVerifier: ("TURBOPACK compile-time value", "0x8c98ED5397814d229a2b548a79D1eE0Dacc58DCb") || "",
        Forwarder: ("TURBOPACK compile-time value", "0x78D7E71993B7d845856D5A3813BEEA956e7a67FD") || ""
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/antigravity/contracts/ui/src/components/Providers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WalletProvider",
    ()=>WalletProvider,
    "useWallet",
    ()=>useWallet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/antigravity/contracts/ui/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/antigravity/contracts/ui/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/antigravity/contracts/ui/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/antigravity/contracts/ui/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/antigravity/contracts/ui/src/lib/config.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const WalletContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    account: null,
    provider: null,
    connect: async ()=>{},
    isConnecting: false
});
const useWallet = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "49860d6964b40022caee23da88cb6da49bf290c18b9d59b082b8ea33761b2ff0") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "49860d6964b40022caee23da88cb6da49bf290c18b9d59b082b8ea33761b2ff0";
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(WalletContext);
};
_s(useWallet, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
function WalletProvider({ children }) {
    _s1();
    const [account, setAccount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [provider, setProvider] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isConnecting, setIsConnecting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WalletProvider.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") !== 'undefined' && window.ethereum) {
                const p = new __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].BrowserProvider(window.ethereum);
                setProvider(p);
                p.listAccounts().then({
                    "WalletProvider.useEffect": (accounts)=>{
                        if (accounts.length > 0) {
                            setAccount(accounts[0].address);
                        }
                    }
                }["WalletProvider.useEffect"]);
                window.ethereum.on('chainChanged', {
                    "WalletProvider.useEffect": (_chainId)=>{
                        window.location.reload();
                    }
                }["WalletProvider.useEffect"]);
                window.ethereum.on('accountsChanged', {
                    "WalletProvider.useEffect": (accounts_0)=>{
                        if (accounts_0.length > 0) {
                            setAccount(accounts_0[0]);
                        } else {
                            setAccount(null);
                        }
                    }
                }["WalletProvider.useEffect"]);
            }
        }
    }["WalletProvider.useEffect"], []);
    const connect = async ()=>{
        if (!provider) return;
        setIsConnecting(true);
        try {
            const accounts_1 = await provider.send("eth_requestAccounts", []);
            if (accounts_1.length > 0) {
                setAccount(accounts_1[0]);
            }
            // Check network
            const network = await provider.getNetwork();
            const targetChainId = BigInt(__TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONFIG"].chainId);
            if (network.chainId !== targetChainId) {
                try {
                    await window.ethereum.request({
                        method: 'wallet_switchEthereumChain',
                        params: [
                            {
                                chainId: '0x' + targetChainId.toString(16)
                            }
                        ]
                    });
                } catch (switchError) {
                    // This error code indicates that the chain has not been added to MetaMask.
                    if (switchError.code === 4902) {
                        try {
                            await window.ethereum.request({
                                method: 'wallet_addEthereumChain',
                                params: [
                                    {
                                        chainId: '0x' + targetChainId.toString(16),
                                        chainName: 'Hoodi Testnet',
                                        rpcUrls: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONFIG"].rpcUrl
                                        ],
                                        nativeCurrency: {
                                            name: 'ETH',
                                            symbol: 'ETH',
                                            decimals: 18
                                        },
                                        blockExplorerUrls: [
                                            'https://sepolia.etherscan.io'
                                        ]
                                    }
                                ]
                            });
                        } catch (addError) {
                            console.error("Failed to add network", addError);
                        }
                    } else {
                        console.error("Failed to switch network", switchError);
                    }
                }
            }
        } catch (error) {
            console.error("Failed to connect", error);
        } finally{
            setIsConnecting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WalletContext.Provider, {
        value: {
            account,
            provider,
            connect,
            isConnecting
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/antigravity/contracts/ui/src/components/Providers.tsx",
        lineNumber: 115,
        columnNumber: 10
    }, this);
}
_s1(WalletProvider, "P7ydOBYG3FN5WKDwtyOAw7QTMBQ=");
_c = WalletProvider;
var _c;
__turbopack_context__.k.register(_c, "WalletProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/antigravity/contracts/ui/src/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/antigravity/contracts/ui/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/antigravity/contracts/ui/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/antigravity/contracts/ui/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$src$2f$components$2f$Providers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/antigravity/contracts/ui/src/components/Providers.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Navbar() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "a7f9ea4688e9b5a23403e3ad5357412c05734f95159c37b77e734c59e8a0cb7c") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a7f9ea4688e9b5a23403e3ad5357412c05734f95159c37b77e734c59e8a0cb7c";
    }
    const { account, connect, isConnecting } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$src$2f$components$2f$Providers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            className: "mr-6 flex items-center space-x-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "hidden font-bold sm:inline-block",
                children: "AnonPoll"
            }, void 0, false, {
                fileName: "[project]/antigravity/contracts/ui/src/components/Navbar.tsx",
                lineNumber: 21,
                columnNumber: 70
            }, this)
        }, void 0, false, {
            fileName: "[project]/antigravity/contracts/ui/src/components/Navbar.tsx",
            lineNumber: 21,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mr-4 hidden md:flex",
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "flex items-center space-x-6 text-sm font-medium",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "transition-colors hover:text-foreground/80 text-foreground/60",
                        children: "Polls"
                    }, void 0, false, {
                        fileName: "[project]/antigravity/contracts/ui/src/components/Navbar.tsx",
                        lineNumber: 28,
                        columnNumber: 116
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/antigravity/contracts/ui/src/components/Navbar.tsx",
                    lineNumber: 28,
                    columnNumber: 51
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/antigravity/contracts/ui/src/components/Navbar.tsx",
            lineNumber: 28,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full flex-1 md:w-auto md:flex-none"
        }, void 0, false, {
            fileName: "[project]/antigravity/contracts/ui/src/components/Navbar.tsx",
            lineNumber: 35,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const t3 = !!account || isConnecting;
    let t4;
    if ($[4] !== account || $[5] !== isConnecting) {
        t4 = account ? `${account.slice(0, 6)}...${account.slice(-4)}` : isConnecting ? "Connecting..." : "Connect Wallet";
        $[4] = account;
        $[5] = isConnecting;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== connect || $[8] !== t3 || $[9] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container flex h-14 items-center max-w-screen-xl mx-auto px-4",
                children: [
                    t1,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-1 items-center justify-between space-x-2 md:justify-end",
                        children: [
                            t2,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: connect,
                                disabled: t3,
                                className: "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2",
                                children: t4
                            }, void 0, false, {
                                fileName: "[project]/antigravity/contracts/ui/src/components/Navbar.tsx",
                                lineNumber: 52,
                                columnNumber: 281
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/antigravity/contracts/ui/src/components/Navbar.tsx",
                        lineNumber: 52,
                        columnNumber: 194
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/antigravity/contracts/ui/src/components/Navbar.tsx",
                lineNumber: 52,
                columnNumber: 111
            }, this)
        }, void 0, false, {
            fileName: "[project]/antigravity/contracts/ui/src/components/Navbar.tsx",
            lineNumber: 52,
            columnNumber: 10
        }, this);
        $[7] = connect;
        $[8] = t3;
        $[9] = t4;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    return t5;
}
_s(Navbar, "xtkZYo/rfcADKZuJ+Hzg5yqdTrs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2f$contracts$2f$ui$2f$src$2f$components$2f$Providers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=antigravity_contracts_ui_src_6d57a202._.js.map