import Todo from '../models/todo';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

const Todos: React.FC<{
  items: Todo[];
  onRemoveTodo: (id: string) => void;
}> = ({ items, onRemoveTodo }) => (
  <ul className={classes.todos}>
    {items.map(({ id, text }) => (
      <TodoItem key={id} text={text} onRemoveTodo={onRemoveTodo} id={id} />
    ))}
  </ul>
);

export default Todos;
