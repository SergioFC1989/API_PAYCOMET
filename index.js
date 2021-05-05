require('dotenv').config()

const {
  PAYCOMET_API_KEY, 
  PAYCOMET_MERCHANT_CODE,
  PAYCOMET_PROVIDER_ID,
  PAYCOMET_SEPA_PROVIDER_ID, 
} = process.env

const BASE_URL = 'https://rest.paycomet.com/v1'
const HEADERS = {'PAYCOMET-API-TOKEN': PAYCOMET_API_KEY,}

// Required: documentType,merchantCode,merchantCustomerIban,merchantCustomerId,sepaProviderId,terminal
export const addDocument = (
merchantCustomerId, 
merchantCustomerIban, 
documentType, 
fileContent
) => axios.post(
  `${BASE_URL}/sepa/add-document`,
  { 
    headers: HEADERS,
    body: {
      terminal: PAYCOMET_PROVIDER_ID,
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
export const checkCustomer = (
merchantCustomerId, 
merchantCustomerIban, 
merchantCustomerType
) => axios.post(
  `${BASE_URL}/sepa/check-customer`,
  { 
    headers: HEADERS,
    body: {
      terminal: PAYCOMET_PROVIDER_ID,
      sepaProviderId: PAYCOMET_SEPA_PROVIDER_ID,
      merchantCode: PAYCOMET_MERCHANT_CODE,
      merchantCustomerId,
      merchantCustomerIban,
      merchantCustomerType,
    }
  }
);

// Required: documentType,merchantCode,merchantCustomerIban,merchantCustomerId,sepaProviderId,terminal
export const checkDocument = (
merchantCustomerId, 
merchantCustomerIban, 
documentType
) => axios.post(
  `${BASE_URL}/sepa/check-document`,
  { 
    headers: HEADERS,
    body: {
      terminal: PAYCOMET_PROVIDER_ID,
      sepaProviderId: PAYCOMET_SEPA_PROVIDER_ID,
      merchantCode: PAYCOMET_MERCHANT_CODE,
      merchantCustomerId,
      merchantCustomerIban,
      documentType,
    }
  }
);

// Required: operations,sepaProviderId,terminal
export const sepaOperations = (
operationType,
terminalIDDebtor,
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
    headers: HEADERS,
    body: {
      terminal: PAYCOMET_PROVIDER_ID,
      sepaProviderId: PAYCOMET_SEPA_PROVIDER_ID,
      operations: [
        {
          merchantCode: PAYCOMET_MERCHANT_CODE,
          operationType,
          terminalIDDebtor,
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
export const form = (order, amount,) => axios.post(
  `${BASE_URL}/form`,
  { 
    headers: HEADERS,
    body: {
      operationType: 1, 
      language: "es",
      payment: {
        terminal: PAYCOMET_PROVIDER_ID,
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