require('dotenv').config()
const axios = require('axios')
const { default: checkDocument } = require('./checkDocument')

const {
  PAYCOMET_API_KEY, 
  PAYCOMET_MERCHANT_CODE,
  PAYCOMET_SEPA_PROVIDER_ID,
  PAYCOMET_TERMINAL_ID,
  PAYCOMET_URL 
} = process.env

const headersPaycomet = {
  'PAYCOMET-API-TOKEN': PAYCOMET_API_KEY,
  'Content-Type': 'application/json',
}
// Required: merchantCode,merchantCustomerIban,merchantCustomerId,merchantCustomerType,sepaProviderId,terminal
const checkCustomer = ( 
merchantCustomerId,
merchantCustomerIban, 
merchantCustomerType
) => axios({
    method: 'POST',
    url: `${PAYCOMET_URL}/sepa/check-customer`,
    headers: headersPaycomet, 
    data: {
      terminal: PAYCOMET_TERMINAL_ID,
      sepaProviderId: PAYCOMET_SEPA_PROVIDER_ID,
      merchantCode: PAYCOMET_MERCHANT_CODE,
      merchantCustomerId,
      merchantCustomerIban,
      merchantCustomerType
    }
  })

module.exports = checkCustomer