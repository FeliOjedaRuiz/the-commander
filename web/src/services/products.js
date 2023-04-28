import http from './base-api';

const list = (establishmentId) => http.get(`/products/${establishmentId}`)
  .then((res) => res.data);

const create = (product) => http.post('/products', product)
  .then((res) => res.data);


export default {
  list,
  create,
}