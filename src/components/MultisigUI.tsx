import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { useState } from "react";
import { createMultisigProposal } from "../lib/transaction";

export default function MultisigUI() {
  const { publicKey, signTransaction } = useWallet();
  const { connection } = useConnection();
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async () => {
    if (!publicKey || !signTransaction) return;
    try {
      const tx = await createMultisigProposal(
        publicKey,
        recipient,
        parseFloat(amount),
        connection,
        signTransaction
      );
      console.log("Proposal submitted:", tx);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="bg-gray-800 p-4 rounded-xl space-y-4 max-w-md">
      <h2 className="text-xl font-semibold">Create Transfer Proposal</h2>
      <input
        className="w-full p-2 rounded text-black"
        placeholder="Recipient Address"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
      />
      <input
        className="w-full p-2 rounded text-black"
        placeholder="Amount in SOL"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
      >
        Propose Transfer
      </button>
    </div>
  );
}