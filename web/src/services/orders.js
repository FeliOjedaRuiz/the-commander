import http from './base-api';

const listAll = (establishmentId) => http.get(`/orders/${establishmentId}/all`)

const list = (serviceId) => http.get(`/orders/${serviceId}`)

const create = (serviceId, order) => http.post(`/orders/${serviceId}`, order)


export default {
  listAll,
  list,
  create,
}