import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import TodosContextProvider from './store/todos-context';

const App = () => (
  <TodosContextProvider>
    <NewTodo />
    <Todos />
  </TodosContextProvider>
);

export default App;
