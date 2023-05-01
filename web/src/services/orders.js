import http from './base-api';

const listAll = (establishmentId) => http.get(`/orders/${establishmentId}`)

const list = (serviceId) => http.get(`/orders/${serviceId}`)

const create = (order) => http.post('/orders', order)


export default {
  listAll,
  list,
  create,
}