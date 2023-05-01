import http from './base-api';

const list = (establishmentId) => http.get(`/services/${establishmentId}`)

const create = (service) => http.post('/services', service)


export default {
  list,
  create,
}