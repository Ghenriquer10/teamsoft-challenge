import axios from "axios";

const baseUrl = "https://6077803e1ed0ae0017d6aea4.mockapi.io/test-frontend/products"

const apiData = axios.create({
    baseURL: baseUrl
})

export default apiData;