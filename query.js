const Eth = require('web3-eth')
const eth = new Eth(`https://ropsten.infura.io/${process.env.INFURA_API_KEY}`)
const { abi } = require('./generated_abi')
const abiDecoder = require('abi-decoder')
//the transaction that create contract
abiDecoder.addABI(abi)

const loggerTransactionReceipt = (result) => {
  console.log('=============================logs============================')
  console.log(result.logs)
  console.log('==============================converted to==========================')
  console.log(JSON.stringify(abiDecoder.decodeLogs(result.logs), null, 2))
}

// //when init contract token. This transaction is generated through myEtherWallet
const transactionContractCreation = '0xd3c13a9ac0d950f54d92acd6b2bea02c875de42262d25e22b12331e154030f6a'
eth.getTransactionReceipt(transactionContractCreation).then(loggerTransactionReceipt)

const transactionTransferErcToSelfToken = '0x715ea9b0034bfe1d0d3b8fc83de54242d9304581194c6c59bd12a140de1f8e02'
// //when transfering token, we call method to contract address with method transfer(_to, _value)
// eth.getTransactionReceipt(transactionTransferErcToSelfToken).then(loggerTransactionReceipt)

//when transfering token, we call method to contract address with method transfer(_to, _value)
const transactionTransferErcToken = '0xc503bd72b01be918fa769f0ef660592303074e23c0aa6694fdd3238653136224'
// eth.getTransactionReceipt(transactionTransferErcToken).then(loggerTransactionReceipt)

//init contractAddress with abi so we can interact with it easier
tanapTokenContract = new eth.Contract(abi, '0xd677b4e8ca86b60f125a462919d704aef5a386b5')

//the address that receives token
// tanapTokenContract.methods.balanceOf('0x40fd225142586cb0c26320d2270e0b122350f719').call().then(result => console.log(result))



