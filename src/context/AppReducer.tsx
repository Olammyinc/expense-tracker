

interface State {
    transactions: Transaction[];
}

interface DeleteAction {
    type: 'DELETE_TRANSACTION';
    payload: number;
}

interface AddAction {
  type: 'ADD_TRANSACTION';
  payload: Transaction;
}

type Action = DeleteAction | AddAction;

const AppReducer = (state: State, action: Action): State => {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return{
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    }
}

export default AppReducer;