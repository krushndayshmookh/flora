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
