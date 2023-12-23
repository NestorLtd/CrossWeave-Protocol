export interface BlockchainNetwork {
    name: string;
    apiEndpoint: string;
    // Other network-specific properties
}

export interface CrossChainTransaction {
    sourceChain: string;
    destinationChain: string;
    amount: number;
    // Other transaction-specific properties
}
