


export const API = {
    username: 'eatfit_student_dominic',
    password: 'yJFbbHtCPTFyy8GB',

    trackingEndPoint: `http://localhost:5001/better-food-choices/us-central1/bfc/track`,

    endpoint: gtin => `https://eatfit-service.foodcoa.ch/products/${gtin}/?resultType=array`,

}

export const settings = {
    overviewBatchSize: 3,

    disableApi: false
}