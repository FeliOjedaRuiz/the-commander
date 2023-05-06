import http from './base-api';

const list = (establishmentId) => http.get(`/services/${establishmentId}`)

const list2 = (userId) => http.get(`/services/${userId}/user`)

const create = (service) => http.post('/services', service)

const detail = (serviceId) => http.get(`/services/detail/${serviceId}`)


export default {
  list,
  create,
  detail,
  list2
}