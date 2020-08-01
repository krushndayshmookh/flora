import { leftSideDrawer } from './getters'

export default function() {
  return {
    leftSideDrawer: false,
    rightSideDrawer: false,
    leftSideDrawerOptions: [],
    currentUserType: null,
    notifications: []
  }
}
