require('dotenv').config()
const axios = require('axios')

const {
  PAYCOMET_API_KEY, 
  PAYCOMET_MERCHANT_CODE,
  PAYCOMET_SEPA_PROVIDER_ID,
  PAYCOMET_TERMINAL_ID, 
} = process.env

const BASE_URL = 'https://rest.paycomet.com/v1'

// Required: documentType,merchantCode,merchantCustomerIban,merchantCustomerId,sepaProviderId,terminal
// --> Checked!
module.exports.addDocument = (
merchantCustomerId, 
merchantCustomerIban, 
documentType, 
fileContent
) => axios({
    method: 'POST',
    url: `${BASE_URL}/sepa/add-document`,
    headers: {
      'PAYCOMET-API-TOKEN': PAYCOMET_API_KEY,
      'Content-Type': 'application/json',
    },
    data: {
      terminal: PAYCOMET_TERMINAL_ID,
      sepaProviderId: PAYCOMET_SEPA_PROVIDER_ID,
      merchantCode: PAYCOMET_MERCHANT_CODE,
      merchantCustomerId,
      merchantCustomerIban,
      documentType,
      fileContent,
    }
  })
    .then(response => console.log(response))
    .catch(error => console.log(error))

// Required: merchantCode,merchantCustomerIban,merchantCustomerId,merchantCustomerType,sepaProviderId,terminal
// --> Checked!
module.exports.checkCustomer = (
merchantCustomerId, 
merchantCustomerIban, 
merchantCustomerType
) => axios({
    method: 'POST',
    url: `${BASE_URL}/sepa/check-customer`,
    headers: {
      'PAYCOMET-API-TOKEN': PAYCOMET_API_KEY,
      'Content-Type': 'application/json',
    },
    data: {
      terminal: PAYCOMET_TERMINAL_ID,
      sepaProviderId: PAYCOMET_SEPA_PROVIDER_ID,
      merchantCode: PAYCOMET_MERCHANT_CODE,
      merchantCustomerId,
      merchantCustomerIban,
      merchantCustomerType
    }
  })
    .then(response => console.log(response))
    .catch(error => console.log(error))

// Required: documentType,merchantCode,merchantCustomerIban,merchantCustomerId,sepaProviderId,terminal
// --> Checked!
module.exports.checkDocument = (
merchantCustomerId, 
merchantCustomerIban, 
documentType
) => axios({
    method: 'POST',
    url: `${BASE_URL}/sepa/check-document`,
    headers: {
      'PAYCOMET-API-TOKEN': PAYCOMET_API_KEY,
      'Content-Type': 'application/json',
    }, 
    data: {
      terminal: PAYCOMET_TERMINAL_ID,
      sepaProviderId: PAYCOMET_SEPA_PROVIDER_ID,
      merchantCode: PAYCOMET_MERCHANT_CODE,
      merchantCustomerId,
      merchantCustomerIban,
      documentType,
    }
  })
    .then(response => console.log(response))
    .catch(error => console.log(error))

// Required: operations,sepaProviderId,terminal
module.exports.sepaOperations = (
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
    url: `${BASE_URL}/sepa/operations`,
    headers: {
      'PAYCOMET-API-TOKEN': PAYCOMET_API_KEY,
      'Content-Type': 'application/json',
    },
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
    .then(response => console.log(response))
    .catch(error => console.log(error))

// Required: operationType
module.exports.form = (order, amount,) => axios({
    method: 'POST',
    url: `${BASE_URL}/form`,
    headers: {
      'PAYCOMET-API-TOKEN': PAYCOMET_API_KEY,
      'Content-Type': 'application/json',
    },
    data: {
      operationType: 1, 
      language: "es",
      payment: {
        terminal: PAYCOMET_TERMINAL_ID,
        order,
        amount,
        methods: [1],
        currency: "EUR",
        userInteraction: 1,
        secure: 1
      }
    }
  })
    .then(response => console.log(response))
    .catch(error => console.log(error))