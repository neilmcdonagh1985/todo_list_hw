import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el:"#app",
        data: {
            todos: [
                {task: "buy shopping", done: false},
                {task: "clean bathroom", done: true},
                {task: "car's MOT", done: false}
            ],
            newTodo: ""
        },

        methods: {
            addNewItem: function() {
                this.todos.push({
                    task: this.newTodo,
                    done: false
                });
                this.newTodo = "";  
            },
            doTask: function(index) {
                this.todos[index].done = false;
            }

        }
    }) 
})