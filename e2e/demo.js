const nano = require('nanoid')
const { productBalance } = require('../src/index');

let autoMerchantCustomerId = nano.nanoid()

console.log(productBalance())
