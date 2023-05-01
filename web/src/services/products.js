import http from './base-api';

const list = (establishmentId) => http.get(`/products/${establishmentId}`)

const create = (product) => http.post('/products', product)


export default {
  list,
  create,
}