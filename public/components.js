Vue.component('message', {
  props: ['msg', 'user'],
  template: '<span>{{ msg }}</span><span>{{ user }}</span>'
})