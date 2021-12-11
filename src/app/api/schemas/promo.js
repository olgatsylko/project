const promoSchema = {
    title: "Schema for categorypromo",
    type: "object",
    additionalProperties: false,
    properties: {
        promoCode: {
            type: "null"
        },
        timeLeft: {
            type: "integer"
        },
        url: {
            type: "string"
        },
        categoryName: {
            type: "string"
        },
        categoryId: {
            type: "integer"
        },
        showOnSpecialsPage: {
            type: "boolean"
        },
        disableAboutUs: {
            type: "boolean"
        },
        disableListPage: {
            type: "boolean"
        },
        disableHeader: {
            type: "boolean"
        },
        displayOn: {
            type: "null"
        },
        pageTypeVariantId: {
            type: "null"
        }
    },
    required: [
      "promoCode",
      "timeLeft",
      "url",
      "categoryName",
      "categoryId",
      "showOnSpecialsPage",
      "disableAboutUs",
      "disableListPage",
      "disableHeader",
      "displayOn",
      "pageTypeVariantId"
    ]
};

module.exports = promoSchema;