import http from "./base-api";

const create = (user) => http.post('/users', user)

const login = (user) => http.post('/login', user)

const createStaff = (estblishmentId, user) => http.post(`/users/${estblishmentId}`, user)

const list = (establishmentId) => http.get(`/users/${establishmentId}`)

export default {
  create,
  login,
  createStaff,
  list,
}