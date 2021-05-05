require('dotenv').config()

const {
  PAYCOMET_API_KEY, 
  PAYCOMET_MERCHANT_CODE,
  PAYCOMET_PROVIDER_ID,
  PAYCOMET_SEPA_PROVIDER_ID, 
} = process.env

const BASE_URL = 'https://rest.paycomet.com'
const HEADERS = {'PAYCOMET-API-TOKEN': PAYCOMET_API_KEY,}

export const addDocument = (merchantCustomerId, merchantCustomerIban, documentType, fileContent) => axios.post(
  `${BASE_URL}/v1/sepa/add-document`,
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

export const checkCustomer = (merchantCustomerId, merchantCustomerIban, merchantCustomerType) => axios.post(
  `${BASE_URL}/v1/sepa/check-customer`,
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

export const checkDocument = (merchantCustomerId, merchantCustomerIban, documentType) => axios.post(
  `${BASE_URL}/v1/sepa/check-document`,
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