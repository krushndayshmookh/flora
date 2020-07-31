import axios from 'axios'

export function login(context, payload) {
  context.commit('login', payload)
  setAxiosHeaders(payload.token)
}

export function logout(context) {
  context.commit('logout')
  setAxiosHeaders('')
}

function setAxiosHeaders(token) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
}
