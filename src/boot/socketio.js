import Vue from 'vue'
import store from '../store'
import VueSocketIO from 'vue-socket.io'

const socketio = new VueSocketIO({
  debug: true,
  connection: process.env.API.split('/api')[0],
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  }
})

Vue.use(socketio)
