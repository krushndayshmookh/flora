export function toggleLeftSideDrawer(state) {
  state.leftSideDrawer = !state.leftSideDrawer
}

export function toggleRightSideDrawer(state) {
  state.rightSideDrawer = !state.rightSideDrawer
}

export function setLeftSideDrawer(state, payload) {
  state.leftSideDrawer = payload
}

export function setRightSideDrawer(state, payload) {
  state.rightSideDrawer = payload
}

export function setLeftSideDrawerOptions(state, payload) {
  state.leftSideDrawerOptions = payload
}

export function setCurrentUserType(state, payload) {
  state.currentUserType = payload
}

export function clearNotifications(state) {
  state.notifications = []
}

export function addNotification(state, payload) {
  state.notifications.push(payload)
}
