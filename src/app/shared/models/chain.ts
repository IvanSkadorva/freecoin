export interface  Chain {
  prevHash: string,
  transaction: {
    amount: number,
    payer: string,
    payee: string
  },
  ts: number,
  nonce: number
}
