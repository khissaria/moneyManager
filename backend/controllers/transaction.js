import mongoose from 'mongoose';
import transaction from '../models/transaction.js';

export const getTransaction = async (req, resp) => {

    try {
        const transactions = await transaction.find({ creator: req.userId });
        resp.status(200).json(transactions);
    }
    catch (err) {
        resp.status(404).json({ message: err.message });
    }
}
export const createTransaction = (req, resp) => {
    const transactionBody = req.body;
    const newTransaction = new transaction({ ...transactionBody, creator: req.userId, createdAt: new Date().toISOString() });
    try {
        newTransaction.save();
        resp.status(200).json(newTransaction);
    }
    catch (err) {
        resp.status(404).json({ message: err.message });
    }
}

export const deleteTransaction = async (req, resp) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
        return resp.status(404).send('No transaction with such ID');

    await transaction.findByIdAndDelete(id);

    resp.json({ message: 'Transaction Deleted Successfully' });
}

export const editTransaction = async (req, resp) => {
    const { id } = req.params;
    const transactions = req.body;
    try {
        if (!mongoose.Types.ObjectId.isValid(id))
            return resp.status(404).send('Invalid Transaction ID');

        const updatedTransaction = await transaction.findByIdAndUpdate(id, transactions, { new: true });
        resp.json(updatedTransaction);
    }
    catch (err) {
        console.log(err);   
    }
}