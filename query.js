const Eth = require('web3-eth')
const eth = new Eth(`https://ropsten.infura.io/${process.env.INFURA_API_KEY}`)
const { abi } = require('./generated_abi')

//the transaction that created
const transactionHash = '0xd3c13a9ac0d950f54d92acd6b2bea02c875de42262d25e22b12331e154030f6a'

const transaction = eth.getTransaction(transactionHash)
const transactionReceipt = eth.getTransactionReceipt(transactionHash)


