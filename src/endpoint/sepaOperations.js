require('dotenv').config()
const axios = require('axios')
const date = require('date-and-time');

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

// Always one day more in the current date
const fecha = () => {
  const now = new Date()
  let addDay = date.addDays(now, 1)
  let updateDay = date.format(addDay, 'DD') 
  return date.format(now, `YYYYMM${updateDay}`)
}

// Required: operations,sepaProviderId,terminal
const sepaOperations = (
uniqueIdCreditor,
companyNameCreditor,
ibanNumberCreditor,
swiftCodeCreditor,
companyTypeCreditor,
operationOrder,
operationAmount,
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
          operationType: 2,
          merchantCode: PAYCOMET_MERCHANT_CODE,
          terminalIDDebtor: PAYCOMET_TERMINAL_ID,
          uniqueIdCreditor,
          companyNameCreditor,
          ibanNumberCreditor,
          swiftCodeCreditor,
          companyTypeCreditor,
          operationOrder,
          operationAmount,
          operationCurrency: "EUR",
          operationDatetime: fecha(),
          operationConcept,
        }
      ]
    }
  })
  
module.exports = sepaOperations