export function login(state, payload) {
  state.token = payload.token
  state.user = payload.user
}

export function logout(state) {
  state.token = ''
  state.user = {}
}
