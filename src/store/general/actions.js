export function toggleLeftSideDrawer(context) {
  context.commit('toggleLeftSideDrawer')
}

export function toggleRightSideDrawer(context) {
  context.commit('toggleRightSideDrawer')
}

export function setLeftSideDrawer(context, payload) {
  context.commit('setLeftSideDrawer', payload)
}

export function setRightSideDrawer(context, payload) {
  context.commit('setRightSideDrawer', payload)
}

export function setLeftSideDrawerOptions(context, payload) {
  context.commit('setLeftSideDrawerOptions', payload)
}

export function setCurrentUserType(context, payload) {
  context.commit('setCurrentUserType', payload)
}

export function clearNotifications(context) {
  context.commit('clearNotifications')
}

export function addNotification(context, payload) {
  context.commit('addNotification', payload)
}
