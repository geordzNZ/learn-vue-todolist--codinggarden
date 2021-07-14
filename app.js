const app = new Vue({
  el: '#app',
  data: {
    title: 'The Todo List'
  },
  methods: {
    addTodo() {
      console.log('form submitted')
    }
  }

});