import {Todo} from './todo.class';
import {todoList} from '../index'

const divTodo = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');

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