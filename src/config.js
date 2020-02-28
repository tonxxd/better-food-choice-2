


export const API = {
    username: 'eatfit_student_dominic',
    password: 'yJFbbHtCPTFyy8GB',

    baseEndPoint: `https://us-central1-ecommercewidget-265813.cloudfunctions.net/bfc`,
    trackingEndPoint: `https://us-central1-ecommercewidget-265813.cloudfunctions.net/bfc/track`,
    // trackingEndPoint: `http://localhost:5001/better-food-choices/us-central1/bfc/track`,

    endpoint: gtin => `https://eatfit-service.foodcoa.ch/products/${gtin}/?resultType=array`,

}

export const settings = {
    overviewBatchSize: 3,

    showDifferentNutriAlert: false,

    disableApi: false,

    defaultGroup: 'C',
    maxBudget: {de: 55, ch: 100},
    showDiscount: false
}