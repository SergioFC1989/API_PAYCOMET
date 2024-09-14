const axios = require("axios");
const date = require("./utils.cjs");

class Paycomet {
  constructor(
    apiKey,
    url,
    terminalId,
    merchantCode,
    sepaProviderId,
    language,
    currency
  ) {
    this.apiKey = apiKey;
    this.url = url;
    this.terminalId = terminalId;
    this.merchantCode = merchantCode;
    this.sepaProviderId = sepaProviderId;
    this.language = language;
    this.currency = currency;

    this.apiClient = axios.create({
      baseURL: this.url,
      headers: {
        "Content-Type": "application/json",
        "PAYCOMET-API-TOKEN": this.apiKey,
      },
    });
  }

  async addDocument(
    merchantCustomerId,
    merchantCustomerIban,
    documentType,
    fileContent
  ) {
    try {
      const response = await this.apiClient.post("/sepa/add-document", {
        sepaProviderId: this.sepaProviderId,
        merchantCode: this.merchantCode,
        merchantCustomerId,
        merchantCustomerIban,
        documentType,
        fileContent,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async checkCustomer(
    merchantCustomerId,
    merchantCustomerIban,
    merchantCustomerType
  ) {
    try {
      const response = await this.apiClient.post("/sepa/check-customer", {
        terminal: this.terminalId,
        sepaProviderId: this.sepaProviderId,
        merchantCode: this.merchantCode,
        merchantCustomerId,
        merchantCustomerIban,
        merchantCustomerType,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async checkDocument(merchantCustomerId, merchantCustomerIban, documentType) {
    try {
      const response = await this.apiClient.post("/sepa/check-document", {
        terminal: this.terminalId,
        sepaProviderId: this.sepaProviderId,
        merchantCode: this.merchantCode,
        merchantCustomerId,
        merchantCustomerIban,
        documentType,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async form(order, amount, language, currency) {
    try {
      const response = await this.apiClient.post("/form", {
        operationType: 1,
        language: this.language,
        payment: {
          terminal: this.terminalId,
          order,
          amount,
          methods: [1],
          currency: this.currency,
          userInteraction: 1,
          secure: 1,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async productBalance() {
    try {
      const response = await this.apiClient.post("/balance", {
        terminal: this.terminalId,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async sepaOperations(
    uniqueIdCreditor,
    companyNameCreditor,
    ibanNumberCreditor,
    swiftCodeCreditor,
    companyTypeCreditor,
    operationOrder,
    operationAmount,
    operationConcept
  ) {
    try {
      const response = await this.apiClient.post("/sepa/operations", {
        terminal: this.terminalId,
        sepaProviderId: this.sepaProviderId,
        operations: [
          {
            operationType: 2,
            merchantCode: this.merchantCode,
            terminalIDDebtor: this.terminalId,
            uniqueIdCreditor,
            companyNameCreditor,
            ibanNumberCreditor,
            swiftCodeCreditor,
            companyTypeCreditor,
            operationOrder,
            operationAmount,
            operationCurrency: this.currency,
            operationDatetime: date(),
            operationConcept,
          },
        ],
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Paycomet;
