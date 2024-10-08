# How to make a swap from a token on ICON to another token on ICON Chain

This guide will show you how to make a swap from a token on ICON to another token on ICON Chain.

In order to execute the swap we need the following information:

- The amount of the token you want to swap
- The contract addresses of all the token involved in the swap (for this case is bnUSD -> BALN).
- The pool IDs of the pools involved in the swap.
- Private key of the wallet that holds the token.

The source code for the script can be found [here](../scripts/make-icon-icon-swap-2.js).

In this example we are making the swap on testnet and the contract addresses and pool IDs are as follow:

```js
amount = 1;
slippageTolerance = 0.01;
poolIdBalnBnUSD = '0x3';
balnAddress = 'cxc3c552054ba6823107b56086134c2afc26ab1dfa';
bnUSDAddress = 'cx87f7f8ceaa054d46ba7343a2ecd21208e12913c6';
```

The script will perform the following steps:
- Fetch the pool details for the bnUSD/BALN pool.
- From the pool details, calculate the amount of BALN token that will be received for the given amount of bnUSD token using the pool price.
- Calculate the minimum amount of BALN token by applying the slippage tolerance.
- Encode into the `_data` field of the payload the required information for the swap using RLP.
- Call the `transfer` method of the bnUSD token contract to transfer the token.

After sending the transaction the script will wait for the transaction to be confirmed and will print out the transaction result.

The script can be run using the following command at the root of the project:

```bash
node scripts/make-icon-icon-swap-2.js
```
