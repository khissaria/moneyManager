import * as api from '../api'

export const getTransactions = () => async (dispatch) => {
    try {
        const { data } = await api.fetchTransaction();
        dispatch({ type: 'FETCH_ALL', payload: data });
    }
    catch (err) {
        console.log(err);
    }
}

export const createTransaction = (transaction, history) => async (dispatch) => {
    debugger;
    try {
        const { data } = await api.AddTransaction(transaction);
        debugger;
        alert('Transaction recorded successfully');
        dispatch({ type: 'CREATE', payload: data });
        history.push('/home');
    }
    catch (err) {
        debugger;
        console.log(err);
    }
}

export const deleteTransaction = (id, history) => async (dispatch) => {
    try {

        await api.deleteTransaction(id);
        history.go(0);
        dispatch({ type: 'DELETE', payload: id })
    }
    catch (err) {
        console.log(err);
    }
}

export const editTransaction = (id, transaction, history) => async (dispatch) => {
    debugger;
    try {
        const { data } = api.editTransaction(id, transaction);
        alert('Data updated successfully');
        // dispatch({ type: 'EDIT', payload: data })
        history.push('/home');
    }
    catch (err) {

    }
}