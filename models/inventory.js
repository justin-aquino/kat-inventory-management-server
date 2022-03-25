const mongoose = require('mongoose')

const transactionsSchema = new mongoose.Schema({
    transType : String,
    transCount : int,    
    transNotes : String,
    transOwner : String,
    transUpdatedBy : String
}, {timestamps: true})


const inventorySchema = new mongoose.Schema({
    genericName :{
        type: String,
        required: true
    },
    brandName : {
        type: String
    },
    manufacturerName : String,
    productType: String,
    route: String,
    usedFor: String,
    substanceName: String,
    unitCount : int,
    transactions: [transactionsSchema]
},{timestamps:true})

module.exports = mongoose.model('Transactions', transactionsSchema)