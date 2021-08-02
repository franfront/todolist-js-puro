
import './styles.css'
/*import './imagenes/imagen.png'*/
import { Todo, TodoList, crearHtml} from './js/index';



export const todoList = new TodoList();

todoList.todos.forEach(todo => crearHtml(todo));

