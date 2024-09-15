const axios = require("axios");
const { date, handleRequest } = require("./utils.cjs");

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
    if (Paycomet.instance) {
      return Paycomet.instance;
    }

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

    Paycomet.instance = this;
  }

  async addDocument(
    merchantCustomerId,
    merchantCustomerIban,
    documentType,
    fileContent
  ) {
    return handleRequest(() =>
      this.apiClient.post("/sepa/add-document", {
        sepaProviderId: this.sepaProviderId,
        merchantCode: this.merchantCode,
        merchantCustomerId,
        merchantCustomerIban,
        documentType,
        fileContent,
      })
    );
  }

  async checkCustomer(
    merchantCustomerId,
    merchantCustomerIban,
    merchantCustomerType
  ) {
    return handleRequest(() =>
      this.apiClient.post("/sepa/check-customer", {
        terminal: this.terminalId,
        sepaProviderId: this.sepaProviderId,
        merchantCode: this.merchantCode,
        merchantCustomerId,
        merchantCustomerIban,
        merchantCustomerType,
      })
    );
  }

  async checkDocument(merchantCustomerId, merchantCustomerIban, documentType) {
    return handleRequest(() =>
      this.apiClient.post("/sepa/check-document", {
        sepaProviderId: this.sepaProviderId,
        merchantCode: this.merchantCode,
        merchantCustomerId,
        merchantCustomerIban,
        documentType,
      })
    );
  }

  async form(order, amount) {
    return handleRequest(() =>
      this.apiClient.post("/form", {
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
      })
    );
  }

  async productBalance() {
    return handleRequest(() =>
      this.apiClient.post("/balance", {
        terminal: this.terminalId,
      })
    );
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
    return handleRequest(() =>
      this.apiClient.post("/sepa/operations", {
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
      })
    );
  }

  static getInstance(
    apiKey,
    url,
    terminalId,
    merchantCode,
    sepaProviderId,
    language,
    currency
  ) {
    if (!Paycomet.instance) {
      Paycomet.instance = new Paycomet(
        apiKey,
        url,
        terminalId,
        merchantCode,
        sepaProviderId,
        language,
        currency
      );
    }

    return Paycomet.instance;
  }
}

module.exports = Paycomet;
