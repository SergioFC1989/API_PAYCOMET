require('dotenv').config()
const axios = require('axios')

const {
  PAYCOMET_API_KEY, 
  PAYCOMET_TERMINAL_ID,
  PAYCOMET_URL 
} = process.env

const headersPaycomet = {
  'PAYCOMET-API-TOKEN': PAYCOMET_API_KEY,
  'Content-Type': 'application/json',
}

export const form = (order, amount,) => axios({
  method: 'POST',
  url: `${PAYCOMET_URL}/form`,
  headers: headersPaycomet,
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