import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createTransaction } from '../actions/transaction';
import { useHistory } from "react-router-dom";
import LoginNavbar from './LoginNavbar';
import '../style/transaction.css'


const Transaction = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const [sourceTitle, setSourceTitle] = useState('Title');
    const [sourceAmount, setSourceAmount] = useState('Amount');
    const [transactionData, setTransactionData] = useState({
        title: '',
        description: '',
        amount: '',
        transactionDate: '',
        transactionType: ''
    });
    function handleSubmit(e) {
        e.preventDefault();
        if (transactionData.transactionType === null || transactionData.transactionType === "") {
            alert('Select Transaction Type')
           
        }
        else {
            dispatch(createTransaction(transactionData, history));
        }
    }
    function handleSourceChange(e) {
        const transactionSource = e.currentTarget.id;

        if (transactionSource === 'btnIncome') {
            setTransactionData({ ...transactionData, transactionType: 1 });
            setSourceTitle('Income Source');
            setSourceAmount('Income Amount ₹');

        }
        if (transactionSource === 'btnExpense') {
            setTransactionData({ ...transactionData, transactionType: 2 });
            setSourceTitle('Expenditure On');
            setSourceAmount('Expense Amount ₹');
        }
        if (transactionSource === 'btnInvestment') {
            setTransactionData({ ...transactionData, transactionType: 3 });
            setSourceTitle('Invested In');
            setSourceAmount('Invested Amount ₹');
        }

    }
    return (<>
        <LoginNavbar />
        <div className='text-container'>
            <h1>Transaction</h1>
            <p>Select the type of transaction you want to perform</p>
        </div>
        <div className='button-container'>
            <button className='btn' style={{ width: '31%', margin: '0.5rem' }} id='btnIncome' onClick={handleSourceChange}>Income</button>
            <button className='btn' style={{ width: '31%', margin: '0.5rem' }} id='btnExpense' onClick={handleSourceChange}>Expense</button>
            <button className='btn' style={{ width: '31%', margin: '0.5rem' }} id='btnInvestment' onClick={handleSourceChange}>Investment</button>
        </div>
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className='form-column'>

                        <input placeholder={sourceTitle} required type="text" id="txtTitle" value={transactionData.title} className="form-control" onChange={(e) => setTransactionData({ ...transactionData, title: e.target.value })} />
                    </div>
                    <div className='form-column'>

                        <input placeholder="Description" required type="text" value={transactionData.description} id="txtDesc" className="form-control" onChange={(e) => setTransactionData({ ...transactionData, description: e.target.value })} />
                    </div>
                </div>
                <div className="form-row">
                    <div className='form-column'>

                        <input placeholder={sourceAmount} required type="number" min='1' value={transactionData.amount} id="txtAmount" className="form-control" onChange={(e) => setTransactionData({ ...transactionData, amount: e.target.value })} />
                    </div>
                    <div className='form-column'>

                        <input required type="date" id="txtDate" className="form-control" value={transactionData.date} onChange={(e) => setTransactionData({ ...transactionData, transactionDate: e.target.value })} />
                    </div>
                </div>
                <hr className="my-4"></hr>
                <button disabled="" type="submit" className="btn btn-primary btn-add">Add</button>
            </form>
        </div></>
    )
}

export default Transaction;