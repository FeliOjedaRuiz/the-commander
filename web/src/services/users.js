import http from "./base-api";

const create = (user) => http.post('/users', user)
  .then((res) => res.data);

const login = (user) => http.post('/login', user)
  .then((res) => res.data);

const createStaff = (estblishmentId, user) => http.post(`/users/${estblishmentId}`, user)
  .then((res) => res.data);

  const list = (establishmentId) => http.get(`/users/${establishmentId}`)
  .then((res) => res.data);

export default {
  create,
  login,
  createStaff,
  list,
}