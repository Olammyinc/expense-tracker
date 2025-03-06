export interface Transaction {
    id: number;
    text: string;
    amount: number;
}

export interface InitialStateType {
    transactions: Transaction[];
    deleteTransaction: (id: number) => void;
    addTransaction: (transaction: Transaction) => void;

}

