import classes from './TodoItem.module.css';

const TodoItem: React.FC<{ text: string }> = ({ text }) => (
  <li className={classes.item}>
    <p>{text}</p>
  </li>
);

export default TodoItem;
