import classes from './TodoItem.module.css';

const TodoItem: React.FC<{
  text: string;
  onRemoveTodo: (id: string) => void;
  id: string;
}> = ({ text, onRemoveTodo, id }) => (
  <li className={classes.item} onClick={onRemoveTodo.bind(null, id)}>
    <p>{text}</p>
  </li>
);

export default TodoItem;
