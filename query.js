const Eth = require('web3-eth')
const eth = new Eth(`https://ropsten.infura.io/${process.env.INFURA_API_KEY}`)
const { abi } = require('./generated_abi')
const abiDecoder = require('abi-decoder')
//the transaction that create contract
abiDecoder.addABI(abi)
const transactionHash = '0xd3c13a9ac0d950f54d92acd6b2bea02c875de42262d25e22b12331e154030f6a'



eth.getTransactionReceipt(transactionHash)
  .then(result => {
    console.log('=============================logs============================')
    console.log(result.logs)
    console.log('==============================converted to==========================')
    console.log(JSON.stringify(abiDecoder.decodeLogs(result.logs), null, 2))
  })

