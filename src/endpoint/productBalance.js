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

const productBalance = () => axios({
  method: 'POST',
  url: `${PAYCOMET_URL}/balance`,
  headers: headersPaycomet,
  data: {
    terminal: PAYCOMET_TERMINAL_ID
  }
});

module.exports = productBalance
