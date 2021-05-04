import { nanoid } from 'nanoid'
require('dotenv').config()

const db = require('db')
  db.connect({
    _API_TOKEN: process.env.API_TOKEN,
    _SEPA_PROVIDER_ID: process.env.SEPA_PROVIDER_ID,
    _MERCHANT_CODE: process.env.MERCHANT_CODE
  })

export const addDocument = (
  MERCHANT_CUSTOMER_ID, 
  MERCHANT_CUSTOMER_IBAN,
  DOCUMENT_TYPE,
  FILE_CONTENT
  ) => {
    const api = new PaycometRestApi.SepaApi()
    const TERMINAL = nanoid()
    const body = {
      body: {
        terminal: TERMINAL,
        sepaProviderId: _SEPA_PROVIDER_ID,
        merchantCode: _MERCHANT_CODE,
        merchantCustomerId: MERCHANT_CUSTOMER_ID,
        merchantCustomerIban: MERCHANT_CUSTOMER_IBAN,
        documentType: DOCUMENT_TYPE,
        fileContent: FILE_CONTENT,
      }
    }
    const call = (error, data) => {
      error 
        ? console.log(`Ups! Hemos encontrado un error: ${error}`)
        : console.log(`Todo correcto: ${data}`)
    }
    api.addDocument(_API_TOKEN, body, call)
}