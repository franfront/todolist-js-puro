
import './styles.css'
/*import './imagenes/imagen.png'*/
import { Todo, TodoList, crearHtml} from './js/index';



export const todoList = new TodoList();
const tarea = new Todo('caminar');
const generar = crearHtml(tarea);


todoList.nuevoTodo(generar);
console.log(todoList);