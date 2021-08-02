export class TodoList{
    constructor(){
        //this.todos = [];
        this.loadSessionStorage();
    }

    nuevoTodo(todo){
        this.todos.push(todo);
        this.saveSessionStorage();
    }
    eliminarTodo(id){

        this.todos = this.todos.filter(todo => todo.id != id);
        this.saveSessionStorage();


    }
    marcarCompletado(id){

        for(const todo of this.todos){
            if(todo.id == id){
                todo.completado = !todo.completado;
                this.saveSessionStorage();
                break;
            };
        };

    };

    eliminarCompletado(){
        

        this.todos = this.todos.filter(todo => !todo.completado);
        this.saveSessionStorage();

    };

    saveSessionStorage(){
        sessionStorage.setItem('todo', JSON.stringify(this.todos));
    };

    loadSessionStorage(){
        
        this.todos = (sessionStorage.getItem('todo'))
                ? JSON.parse(sessionStorage.getItem('todo'))
                : [];
    };


}