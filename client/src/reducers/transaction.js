
import { FETCH_ALL, CREATE, DELETE ,EDIT} from "../constants/actionType";

const reducer = (transactions = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...transactions, action.payload];
        case DELETE:
            return transactions.filter((trans) => trans._id !== action.payload)
        case EDIT:
            return transactions.map((trans) => (trans._id === action.payload._id ? action.payload : trans));
        default: return transactions;
    }
}

export default reducer;