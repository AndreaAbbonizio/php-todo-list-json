const { createApp } = Vue;

createApp({

    data() {
        return {
            todos: [],

            newTodo: '',
        }
    },

    methods: {
        getTodos() {

            axios.get('./server.php').then((res) => {

                this.todos = res.data;

            });
        },
        addTodo() {

            let data = {
                newTodo: '',
            }

            data.newTodo = this.newTodo;


            axios.post('./server.php', data, { headers: { 'Content-Type': 'multipart/form-data' } }).then((res) => {
                console.log(data);
                this.getTodos();
            });
            this.newTodo = "";
        },
    },

    mounted() {
        this.getTodos();
    },

}).mount('#app');