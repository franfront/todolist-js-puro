import {Todo} from './todo.class';
import {todoList} from '../index'

const divTodo = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnDelete = document.querySelector('.clear-completed');
const ulFilters = document.querySelector('.filters');
const aFilters = document.querySelectorAll('.filtro')

export const crearHtml = (todo) =>{
    const htmlTodo = `
        <li class="${ (todo.completado) ? 'completed' : '' }" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${(todo.completado) ? 'checked' : ''}>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>
    `;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;
    
    divTodo.append(div.firstElementChild);

    return div;

};

// eventos
txtInput.addEventListener("keyup", (e) =>{
    if(e.keyCode === 13 && txtInput.value.length > 0){
        console.log(txtInput.value);
        const nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo(nuevoTodo);
        crearHtml(nuevoTodo);
        txtInput.value = ''; 
    }
});

divTodo.addEventListener('click', (e)=>{
    const nameElement = e.target.localName; // input
    const todoElement = e.target.parentElement.parentElement;
    const todoId = todoElement.getAttribute('data-id');

    if (nameElement.includes('input')){ // click en el check
        todoList.marcarCompletado(todoId);
        todoElement.classList.toggle('completed');
    } else if (nameElement.includes('button')){ // borra el todo
        todoList.eliminarTodo(todoId);
        divTodo.removeChild(todoElement);


    }

});

btnDelete.addEventListener('click', ()=>{
    
    todoList.eliminarCompletado();

    for (let i = divTodo.children.length-1; i >= 0; i--) { // bucle inverso
        const element = divTodo.children[i];

        if(element.classList.contains('completed')){
            divTodo.removeChild(element);
        }
        
    }

});

ulFilters.addEventListener('click', (e) =>{
    const filter = e.target.text;
    if (!filter) {return};

    aFilters.forEach( elem => elem.classList.remove('selected'));
    e.target.classList.add('selected');
    for (const element of divTodo.children){

        element.classList.remove('hidden');
        const completed = element.classList.contains('completed');

        switch (filter) {
            case 'Pendientes':
                if (completed){
                    element.classList.add('hidden')
                }
                break;
            case 'Completados':
                if (!completed){
                    element.classList.add('hidden')
                }
                break;
        };


    };
})