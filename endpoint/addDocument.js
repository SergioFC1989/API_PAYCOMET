// Required: documentType,merchantCode,merchantCustomerIban,merchantCustomerId,sepaProviderId,terminal

require('dotenv').config()
const axios = require('axios')
const nano = require('nanoid')

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

const autoMerchantCustomerId = nano.nanoid()

export const addDocument = ( 
merchantCustomerIban, 
documentType, 
fileContent
) => axios({
    method: 'POST',
    url: `${PAYCOMET_URL}/sepa/add-document`,
    headers: headersPaycomet,
    data: {
      terminal: PAYCOMET_TERMINAL_ID,
      sepaProviderId: PAYCOMET_SEPA_PROVIDER_ID,
      merchantCode: PAYCOMET_MERCHANT_CODE,
      merchantCustomerId: autoMerchantCustomerId,
      merchantCustomerIban,
      documentType,
      fileContent,
    }
  })