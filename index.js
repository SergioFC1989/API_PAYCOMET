const base = require('./base.js')
const endpoint = require('./endpoint')
const nano = require('nanoid')

const MERCHANT_CUSTOMER_ID = nano.nanoid()
console.log(base)
endpoint.addDocument(MERCHANT_CUSTOMER_ID, 'ES6421008594222100047775', 1)
  .then(() => console.log(`TODO OK!!`))
  .catch(e => console.log(e))