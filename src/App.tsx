import { useReducer, useState } from 'react';
import './App.css';
import ACTIONS from "./utils/actions";
import Todo from "./components/Todo";
import { ITodo } from "./types/todoTypes";

const reducer = (todos: any, action: any) => {
  switch(action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, createTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo: ITodo) => {
        if (todo.id === action.payload.id) {
          return {...todo, completed: !todo.completed}
        }
        return todo
      })
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo: ITodo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
};

const createTodo = (name: string) => {
  return {
    id: Date.now(),
    name,
    completed: false
  }
};

function App() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState("");
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name) {
      dispatch({
        type: ACTIONS.ADD_TODO,
        payload: {
          name,
        },
      });
    }
    setName("");
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={() => handleSubmit}>Add Todo</button>
      </form>
      {todos?.map((todo: ITodo) => (
        <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
      ))}
    </div>
  );
}

export default App;
