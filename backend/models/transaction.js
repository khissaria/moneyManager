import mongoose from 'mongoose';

const transactionSchema=mongoose.Schema({
    title:String,
    description:String,
    amount:Number,
    transactionDate:Date,
    transactionType:Number,
    creator:String,
    createdAt:{
        type:Date,
        default:new Date()
    }

})

const transaction=mongoose.model('transaction',transactionSchema);
export default transaction;