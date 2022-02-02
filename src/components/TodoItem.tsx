import classes from './TodoItem.module.css';

const TodoItem: React.FC<{
  text: string;
  onRemoveTodo: () => void;
}> = ({ text, onRemoveTodo }) => (
  <li className={classes.item} onClick={onRemoveTodo}>
    <p>{text}</p>
  </li>
);

export default TodoItem;
