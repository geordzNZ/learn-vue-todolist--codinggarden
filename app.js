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
    },
  removeTodo(todo) {
    const todoIndex = this.todos.indexOf(todo);
    this.todos.splice(todoIndex,1)
  },
  allDone(){
    this.todos.forEach(todo=> todo.done = true)
  }

  }
});