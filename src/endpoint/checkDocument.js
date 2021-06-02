require('dotenv').config()
const axios = require('axios')

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

const checkDocument = (
merchantCustomerId,
merchantCustomerIban, 
documentType
) => axios({
    method: 'POST',
    url: `${PAYCOMET_URL}/sepa/check-document`,
    headers: headersPaycomet,
    data: {
      terminal: PAYCOMET_TERMINAL_ID,
      sepaProviderId: PAYCOMET_SEPA_PROVIDER_ID,
      merchantCode: PAYCOMET_MERCHANT_CODE,
      merchantCustomerId,
      merchantCustomerIban,
      documentType,
    }
  })
  module.exports = checkDocument