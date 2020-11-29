import { TodoProps } from "../types/todoTypes";
import ACTIONS from "../utils/actions";

const Todo = ({ todo, dispatch }: TodoProps) => {
  console.log(todo);

  return (
    <div>
      <h1 style={{color: todo.completed ? "green" : "red", display: "inline"}}>{todo.name}</h1>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
        }
      >
        Toggle
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
        }
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
