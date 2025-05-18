import { PublicKey } from "@solana/web3.js";

export async function createMultisigProposal(
  proposer: PublicKey,
  recipient: string,
  amount: number,
  connection: any,
  signTransaction: any
) {
  console.log("Simulating multisig proposal:", { proposer, recipient, amount });
  return { txid: "fake-tx-id-for-ui-prototype" };
}