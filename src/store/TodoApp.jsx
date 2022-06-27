import { useState } from "react";
// import { useGetTodosQuery } from "./apis";
import { useGetTodoQuery } from "./apis";

export const TodoApp = () => {

  const [ id, setId ] = useState(1);

  // TODOS List
  // const { data: todos = [], isLoading } = useGetTodosQuery();

  // Single Todo
  const { data: todo, isLoading, isSuccess } = useGetTodoQuery(id);

  const nextTodo = () => {
    setId(id + 1);
  };

  const resetTodo = () => {
    setId(1);
  };

  const previousTodo = () => {
    if (id === 1) return;  
    setId(id - 1);
  };

  return (
    <div className="container">
      <h1>Todos RTK Query</h1>
      <hr />

      <p className="loading">Is Loading:&nbsp;
        {
          isLoading
            ? <span className="green">True</span>
            : <span className="red">False</span>
        }
      </p>      

      {
        isSuccess &&
        <>
          <h2>{ todo.title }</h2>
          <p>
            <b>Completed:&nbsp;
            {
              todo.completed
                ? <span className="green">Done</span>
                : <span className="orange">Pending</span>
            }
            </b>
          </p>
        </>
      }

      <hr />

      <pre>{ JSON.stringify(todo, null, 2) }</pre>

      <hr />

      <div className="mt-2">
        <button
          className="btn btn-blue"
          onClick={ previousTodo }
        >
          Previous
        </button>

        <button
          className="btn btn-blue mx-1"
          onClick={ resetTodo }
        >
          Reset
        </button>
        
        <button
          className="btn btn-blue"
          onClick={ nextTodo }
        >
          Next
        </button>
      </div>

      {/* TODOS List */}
      {/* <ul>
        {
          todos.map( todo => (
            <li key={ todo.id }>
              Status: (
              {
                todo.completed
                  ? <span className="green"><b>Done</b></span>
                  : <span className="orange"><b>Pending</b></span>
              })&nbsp;
              { todo.title }
            </li>
          ))
        }
      </ul> */}

    </div>
  );
};
