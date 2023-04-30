import http from './base-api';

const list = (establishmentId) => http.get(`/services/${establishmentId}`)
  .then((res) => res.data);

const create = (service) => http.post('/services', service)
  .then((res) => res.data);


export default {
  list,
  create,
}