const app = new Vue({
  el: '#app',
  data: {
    title: 'The Todo List',
    newTodoText: '',
    todos:[]
  },
  methods: {
    addTodo() {
      // console.log('form submitted')
      // console.log(this.newTodoText)
      this.todos.push({
        title: this.newTodoText,
        done: false
      });
      this.newTodoText = ''
      // console.log(this.todos)
    }
  }
});