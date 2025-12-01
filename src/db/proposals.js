import db from "./index.js";

export async function saveProposal(chatId, proposal) {
  db.proposals.push({
    chatId,
    proposal,
    createdAt: new Date()
  });
}

export async function getProposals(chatId) {
  return db.proposals.filter(p => p.chatId === chatId);
}
