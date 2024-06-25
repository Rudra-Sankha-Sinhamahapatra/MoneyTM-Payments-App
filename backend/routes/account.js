const express = require('express');
const { authMiddleware } = require('../middleware');
const { Account } = require('../db');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/balance', authMiddleware, async (req, res) => {
    try {
        const account = await Account.findOne({
            userId: req.userId
        });

        if (!account) {
            return res.status(404).json({
                message: "Account not found"
            });
        }

        res.json({
            balance: account.balance
        });
    } catch (error) {
        console.error("Error fetching balance:", error);
        res.status(500).json({
            message: "Internal server error"
        });
    }
});

router.post("/transfer", authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const { amount, to } = req.body;
      
        if(amount<0){
            await session.abortTransaction();
            return res.status(422).json({
                message:"Cannot transfer negative amount"
            })
        }
     
        const account = await Account.findOne({ userId: req.userId }).session(session);

        if (!account || account.balance < amount) {
            await session.abortTransaction();
            return res.status(400).json({
                message: "Insufficient balance"
            });
        }

        const toAccount = await Account.findOne({ userId: to }).session(session);

        if (!toAccount) {
            await session.abortTransaction();
            return res.status(400).json({
                message: "Invalid account"
            });
        }

     
        await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
        await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

       
        await session.commitTransaction();
        res.json({
            message: "Transfer successful"
        });
    } catch (error) {
        await session.abortTransaction();
        console.error("Error during transfer:", error);
        res.status(500).json({
            message: `Internal server error or Cannot transfer an alphaneumeric value ,please type a number`
        });
    } finally {
        session.endSession();
    }
});

module.exports = router;
