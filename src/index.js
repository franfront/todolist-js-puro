
import './styles.css'
/*import './imagenes/imagen.png'*/
import { Todo, TodoList} from './js/index';



const todoList = new TodoList();
const tarea = new Todo('caminar');


todoList.nuevoTodo(tarea);
console.log(todoList);