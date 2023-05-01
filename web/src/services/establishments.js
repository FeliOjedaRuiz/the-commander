import http from './base-api';

const list = (query) => http.get('/establishments', { params: query })

const detail = (id) => http.get(`/establishments/${id}`)

const create = (establishment) => http.post('/establishments', establishment)


export default {
  list,
  detail,
  create,
}