export function setDarkMode(/* context */ context, enabled) {
  context.commit('setDarkMode', enabled)
}

export function setLanguage(context, language) {
  context.commit('setLanguage', language)
}
