import { BlockDetails } from './Block';

export declare interface Blockchain {
  //constructor(restURL:string);
  getBestBlockHash(): Promise<string>;
  getBlock(blockhash: string, verbose?: boolean):Promise<BlockDetails>;
  getBlockchainInfo(): Promise<BlockchainInfo>;
  getBlockCount(): Promise<number>;
  getBlockHash(height: number): Promise<string>;
  getBlockHeader(hash: string, verbose?: boolean): Promise<BlockHeader>;
  getChainTips(): Promise<ChainTip[]>;
  getDifficulty(): Promise<number>;
  getMempoolAncestors(txid: string, verbose?: boolean): Promise<any>;
  getMempoolDescendants(txid: string, verbose?: boolean): Promise<any>;
  getMempoolEntry(txid:string): Promise<any>;
  getMempoolInfo(): Promise<MempoolInfo>;
  getRawMempool(verbose?:boolean): Promise<any>;
  getTxOut(txid:string, n:number, include_mempool?: boolean): Promise<any>;
  getTxOutProof(txids:string, blockhash:string): Promise<string>;
  preciousBlock(blockhash:string): Promise<any>;
  pruneBlockchain(height:number): Promise<number>;
  verifyChain(checklevel?:number, nblocks?:number): Promise<boolean>;
  verifyTxOutProof(proof:string): Promise<string[]>;
}

export declare interface MempoolInfo {
  size: number;
  bytes: number;
  usage: number;
  maxmempool: number;
  mempoolminfee: number;
}

export declare interface BlockchainInfo {
  chain: string;
  blocks: number;
  headers: number;
  bestblockhash: string;
  difficulty: number;
  mediantime: number;
  verificationprogress: number;
  chainwork: string;
  pruned: boolean;
  softforks: object[]
  bip9_softforks: object;
}

export declare interface BlockHeader {
  hash: string;
  confirmations: number;
  height: number;
  version: number;
	versionHex: string;
	merkleroot: string;
	time: number;
	mediantime: number;
	nonce: number;
	bits: string;
	difficulty: number;
	chainwork: string;
	previousblockhash: string;
	nextblockhash: string;
}

export declare interface ChainTip {
  height:number;
  hash: string;
  branchlen: number;
  status: string;
}
