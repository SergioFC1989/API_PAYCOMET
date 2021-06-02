const {addDocument} = require('./endpoint/addDocument')
const {checkCustomer} = require('./endpoint/checkCustomer')
const {checkDocument} = require('./endpoint/checkDocument')
const {form} = require('./endpoint/form')
const {sepaOperations} = require('./endpoint/sepaOperations')

export default {
  addDocument, 
  checkCustomer, 
  checkDocument, 
  form, 
  sepaOperations
}
