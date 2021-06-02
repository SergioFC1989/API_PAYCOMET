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

// Required: operations,sepaProviderId,terminal
const sepaOperations = (
operationType,
uniqueIdCreditor,
companyNameCreditor,
ibanNumberCreditor,
swiftCodeCreditor,
companyTypeCreditor,
operationOrder,
operationAmount,
operationCurrency,
operationDatetime,
operationConcept
) => axios({
    method: 'POST',
    url: `${PAYCOMET_URL}/sepa/operations`,
    headers: headersPaycomet,
    data: {
      terminal: PAYCOMET_TERMINAL_ID,
      sepaProviderId: PAYCOMET_SEPA_PROVIDER_ID,
      operations: [
        {
          merchantCode: PAYCOMET_MERCHANT_CODE,
          terminalIDDebtor: PAYCOMET_TERMINAL_ID,
          operationType,
          uniqueIdCreditor,
          companyNameCreditor,
          ibanNumberCreditor,
          swiftCodeCreditor,
          companyTypeCreditor,
          operationOrder,
          operationAmount,
          operationCurrency,
          operationDatetime,
          operationConcept,
        }
      ]
    }
  })
  
module.exports = sepaOperations