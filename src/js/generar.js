
const divTodo = document.querySelector('.todo-list');


export const creatHtml = (todo) =>{
    const htmlTodo = `
        <li class="${ (todo.completado) ? 'completed' : '' }" data-id="abc">
        <div class="view">
            <input class="toggle" type="checkbox" checked>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>
    `;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;
    divTodo.append(div);

    return div;

}