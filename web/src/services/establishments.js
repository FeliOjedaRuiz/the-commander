import http from './base-api';

const list = (query) => http.get('/establishments', { params: query })
  .then((res) => res.data);

const detail = (id) => http.get(`/establishments/${id}`)
  .then((res) => res.data);

const create = (establishment) => http.post('/establishments', establishment)
  .then((res) => res.data);


export default {
  list,
  detail,
  create,
}