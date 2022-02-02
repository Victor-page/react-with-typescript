import { useContext } from 'react';

import TodoItem from './TodoItem';
import classes from './Todos.module.css';
import { TodosContext } from '../store/todos-context';

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  const { items, removeTodo } = todosCtx;

  return (
    <ul className={classes.todos}>
      {items.map(({ id, text }) => (
        <TodoItem
          key={id}
          text={text}
          onRemoveTodo={removeTodo.bind(null, id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
