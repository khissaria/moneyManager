import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { editTransaction } from '../actions/transaction';
import { useHistory, useLocation } from "react-router-dom";
import LoginNavbar from './LoginNavbar';
import '../style/transaction.css'


const EditTransactions = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const [transactionData, setTransactionData] = useState({
        title: '',
        description: '',
        amount: '',
        transactionDate: '',
        transactionType: ''
    });
    let transactionType,transactionID;
    
    const { state } = useLocation();
    debugger;
    if(state){
        transactionID=state.id;
    }
    useEffect(() => {
        if (state.transactionData) {
           
            setTransactionData({ ...transactionData, title: state.transactionData.title, description: state.transactionData.description, amount: state.transactionData.amount, transactionDate: state.transactionData.transactionDate, transactionType: state.transactionData.transactionType });
        }
    }, [])

    if (state) {
        debugger;
        if (state.transactionData.transactionType === 1) {
            transactionType = 'Income'
        }
        else if (state.transactionData.transactionType === 2) {
            transactionType = 'Expense'
        }
        else {
            transactionType = 'Investment'
        }
    }
    function handleSubmit(e) {
        debugger;
        if (transactionData.transactionType === null || transactionData.transactionType === "") {
            alert('Select Transaction Type')
            e.preventDefault();
        }
        else {
            dispatch(editTransaction(transactionID,transactionData, history));
        }
    }
    return (<>
        <LoginNavbar />
        <h1 style={{ color: 'rgb(13, 110, 253)', textAlign: 'center' }}>Update {state.transactionData ? transactionType : ''} Transaction</h1>
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className='form-column'>

                        <input required type="text" id="txtTitle" value={transactionData.title} className="form-control" onChange={(e) => setTransactionData({ ...transactionData, title: e.target.value })} />
                    </div>
                    <div className='form-column'>

                        <input placeholder="Description" required type="text" value={transactionData.description} id="txtDesc" className="form-control" onChange={(e) => setTransactionData({ ...transactionData, description: e.target.value })} />
                    </div>
                </div>
                <div className="form-row">
                    <div className='form-column'>

                        <input required type="number" min='1' value={transactionData.amount} id="txtAmount" className="form-control" onChange={(e) => setTransactionData({ ...transactionData, amount: e.target.value })} />
                    </div>
                    <div className='form-column'>

                        <input required type="date" id="txtDate" className="form-control" value={state.transactionData ? state.transactionData.transactionDate.split('T')[0] : ''} onChange={(e) => setTransactionData({ ...transactionData, transactionDate: e.target.value })} />
                    </div>
                </div>
                <hr className="my-4"></hr>
                <button disabled="" type="submit" className="btn btn-primary btn-add">Update</button>
            </form>
        </div></>
    )
}

export default EditTransactions;