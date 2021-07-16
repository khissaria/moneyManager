import express from 'express';
import {getTransaction,createTransaction,deleteTransaction,editTransaction} from '../controllers/transaction.js'

import auth from '../middleware/auth.js';

const router=express.Router();

router.get('/',auth,getTransaction);
router.post('/',auth,createTransaction);
router.delete('/:id',auth,deleteTransaction);
router.patch('/:id',auth,editTransaction);

export default router;