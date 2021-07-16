import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getTransactions } from '../actions/transaction';
import TransactionRow from './transactionRow';
import LoginNavbar from './LoginNavbar';
import '../style/home.css'

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => { dispatch(getTransactions()); }, [dispatch]);
    const userTransactions = useSelector((state) => state.transactions);
    return (
        <>
            <LoginNavbar />
            <div className="limiter">
                <div className="container-table100">
                    <div className="wrap-table100">
                        <div className="table100">
                            <table>
                                <thead>
                                    <tr className="table100-head">
                                        <th className="column1">Date</th>
                                        <th className="column2">Title</th>
                                        <th className="column3">Description</th>
                                        <th className="column4">Amount</th>
                                        <th className="column5">Transaction Type</th>
                                        <th className="column6">Action</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {userTransactions.length !== 0 ?
                                        userTransactions.map((current) => (
                                            <TransactionRow transaction={current} key={current._id} />
                                        )) :
                                        <tr>
                                            <td className='column1' colSpan='6'>No Data to Display</td>
                                        </tr>}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div></>
    )

}

export default Home;