const xcallAbi = [
  {
    type: "function",
    name: "admin",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "executeCall",
    inputs: [
      { name: "_reqId", type: "uint256", internalType: "uint256" },
      { name: "_data", type: "bytes", internalType: "bytes" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "executeMessage",
    inputs: [
      { name: "to", type: "address", internalType: "address" },
      { name: "from", type: "string", internalType: "string" },
      { name: "data", type: "bytes", internalType: "bytes" },
      { name: "protocols", type: "string[]", internalType: "string[]" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "executeRollback",
    inputs: [{ name: "_sn", type: "uint256", internalType: "uint256" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getDefaultConnection",
    inputs: [{ name: "_nid", type: "string", internalType: "string" }],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getFee",
    inputs: [
      { name: "_net", type: "string", internalType: "string" },
      { name: "_rollback", type: "bool", internalType: "bool" },
      { name: "_sources", type: "string[]", internalType: "string[]" },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getFee",
    inputs: [
      { name: "_net", type: "string", internalType: "string" },
      { name: "_rollback", type: "bool", internalType: "bool" },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getNetworkAddress",
    inputs: [],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getNetworkId",
    inputs: [],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getProtocolFee",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getProtocolFeeHandler",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "handleBTPError",
    inputs: [
      { name: "_src", type: "string", internalType: "string" },
      { name: "_svc", type: "string", internalType: "string" },
      { name: "_sn", type: "uint256", internalType: "uint256" },
      { name: "_code", type: "uint256", internalType: "uint256" },
      { name: "_msg", type: "string", internalType: "string" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "handleBTPMessage",
    inputs: [
      { name: "_from", type: "string", internalType: "string" },
      { name: "_svc", type: "string", internalType: "string" },
      { name: "_sn", type: "uint256", internalType: "uint256" },
      { name: "_msg", type: "bytes", internalType: "bytes" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "handleError",
    inputs: [{ name: "_sn", type: "uint256", internalType: "uint256" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "handleMessage",
    inputs: [
      { name: "_from", type: "string", internalType: "string" },
      { name: "_msg", type: "bytes", internalType: "bytes" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "initialize",
    inputs: [{ name: "_nid", type: "string", internalType: "string" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "sendCall",
    inputs: [
      { name: "_to", type: "string", internalType: "string" },
      { name: "_data", type: "bytes", internalType: "bytes" },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "sendCallMessage",
    inputs: [
      { name: "_to", type: "string", internalType: "string" },
      { name: "_data", type: "bytes", internalType: "bytes" },
      { name: "_rollback", type: "bytes", internalType: "bytes" },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "sendCallMessage",
    inputs: [
      { name: "_to", type: "string", internalType: "string" },
      { name: "_data", type: "bytes", internalType: "bytes" },
      { name: "_rollback", type: "bytes", internalType: "bytes" },
      { name: "sources", type: "string[]", internalType: "string[]" },
      { name: "destinations", type: "string[]", internalType: "string[]" },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "setAdmin",
    inputs: [{ name: "_address", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setDefaultConnection",
    inputs: [
      { name: "_nid", type: "string", internalType: "string" },
      { name: "connection", type: "address", internalType: "address" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setProtocolFee",
    inputs: [{ name: "_value", type: "uint256", internalType: "uint256" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setProtocolFeeHandler",
    inputs: [{ name: "_addr", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "verifySuccess",
    inputs: [{ name: "_sn", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "event",
    name: "CallExecuted",
    inputs: [
      {
        name: "_reqId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      { name: "_code", type: "int256", indexed: false, internalType: "int256" },
      { name: "_msg", type: "string", indexed: false, internalType: "string" },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "CallMessage",
    inputs: [
      { name: "_from", type: "string", indexed: true, internalType: "string" },
      { name: "_to", type: "string", indexed: true, internalType: "string" },
      { name: "_sn", type: "uint256", indexed: true, internalType: "uint256" },
      {
        name: "_reqId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      { name: "_data", type: "bytes", indexed: false, internalType: "bytes" },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "CallMessageSent",
    inputs: [
      {
        name: "_from",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      { name: "_to", type: "string", indexed: true, internalType: "string" },
      { name: "_sn", type: "uint256", indexed: true, internalType: "uint256" },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Initialized",
    inputs: [
      {
        name: "version",
        type: "uint64",
        indexed: false,
        internalType: "uint64",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ResponseMessage",
    inputs: [
      { name: "_sn", type: "uint256", indexed: true, internalType: "uint256" },
      { name: "_code", type: "int256", indexed: false, internalType: "int256" },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "RollbackExecuted",
    inputs: [
      { name: "_sn", type: "uint256", indexed: true, internalType: "uint256" },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "RollbackMessage",
    inputs: [
      { name: "_sn", type: "uint256", indexed: true, internalType: "uint256" },
    ],
    anonymous: false,
  },
  { type: "error", name: "InvalidInitialization", inputs: [] },
  { type: "error", name: "NotInitializing", inputs: [] },
];

module.exports = { xcallAbi };
