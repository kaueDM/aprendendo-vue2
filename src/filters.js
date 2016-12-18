import Vue from 'vue'

Vue.filter('reverse', value => {
  if (!value) return 'waiting input'
    return value.split('').reverse().join('')
})

Vue.filter('uppercase', value => {
  if (!value) return 'waiting input'
  return value.toUpperCase()
})

Vue.filter('lowercase', value => {
  if (!value) return 'waiting input'
  return value.toLowerCase()
})
