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
module.exports.addDocument = (
merchantCustomerId, 
merchantCustomerIban, 
documentType, 
fileContent
) => axios.post(
  `${BASE_URL}/sepa/add-document`,
  { 
    'PAYCOMET-API-TOKEN': PAYCOMET_API_KEY,
    body: {
      terminal: PAYCOMET_TERMINAL_ID,
      sepaProviderId: PAYCOMET_SEPA_PROVIDER_ID,
      merchantCode: PAYCOMET_MERCHANT_CODE,
      merchantCustomerId,
      merchantCustomerIban,
      documentType,
      fileContent,
    }
  }
);

// Required: merchantCode,merchantCustomerIban,merchantCustomerId,merchantCustomerType,sepaProviderId,terminal
const checkCustomer = (
merchantCustomerId, 
merchantCustomerIban, 
merchantCustomerType
) => axios.post(
  `${BASE_URL}/sepa/check-customer`,
  { 
    'PAYCOMET-API-TOKEN': PAYCOMET_API_KEY,
    body: {
      terminal: PAYCOMET_TERMINAL_ID,
      sepaProviderId: PAYCOMET_SEPA_PROVIDER_ID,
      merchantCode: PAYCOMET_MERCHANT_CODE,
      merchantCustomerId,
      merchantCustomerIban,
      merchantCustomerType,
    }
  }
);

// Required: documentType,merchantCode,merchantCustomerIban,merchantCustomerId,sepaProviderId,terminal
const checkDocument = (
merchantCustomerId, 
merchantCustomerIban, 
documentType
) => axios.post(
  `${BASE_URL}/sepa/check-document`,
  { 
    'PAYCOMET-API-TOKEN': PAYCOMET_API_KEY,
    body: {
      terminal: PAYCOMET_TERMINAL_ID,
      sepaProviderId: PAYCOMET_SEPA_PROVIDER_ID,
      merchantCode: PAYCOMET_MERCHANT_CODE,
      merchantCustomerId,
      merchantCustomerIban,
      documentType,
    }
  }
);

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
) => axios.post(
  `${BASE_URL}/sepa/operations`,
  { 
    'PAYCOMET-API-TOKEN': PAYCOMET_API_KEY,
    body: {
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
  }
);

// Required: operationType
const form = (order, amount,) => axios.post(
  `${BASE_URL}/form`,
  { 
    'PAYCOMET-API-TOKEN': PAYCOMET_API_KEY,
    body: {
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
  }
);