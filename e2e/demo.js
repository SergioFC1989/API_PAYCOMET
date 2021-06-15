const { nanoid } = require('nanoid')
const { 
  addDocument, 
  checkCustomer, 
  checkDocument, 
  form, 
  productBalance, 
  sepaOperations, 
} = require('../src/index');
let { base } = require('./base')

const iban = 'GB33BUKB20201555555555'

const main = async () => {
  try {
    // const getAddDocument = await addDocument('ABCD1234', iban, 3, base)
    // const getcheckCustomer = await checkCustomer('ABCD1234', iban, 1)
    // const getCheckDocument = await checkDocument('ABCD1234', iban, 12)
    // const getForm = await form('prueba3', 500)
    const getSepaOperations = await sepaOperations('ABCD1234', 'Sergio Fernandez Cuellar', iban, '', 1, 'trato-001', 50, 'prueba')
    // const getProductBalance = await productBalance()
    
    // console.log(getAddDocument)
    // console.log(getcheckCustomer)
    // console.log(getForm)
    // console.log(getCheckDocument)
    console.log(getSepaOperations.data.operations)
    // console.log(getProductBalance)

  } 
  catch (error) {
    console.log(error)
  }
}

main()