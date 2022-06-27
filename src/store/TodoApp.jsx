import { useGetTodosQuery } from "./apis";

export const TodoApp = () => {
  const { data: todos = [], isLoading } = useGetTodosQuery();

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

      <pre>...</pre>

      <ul>
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
      </ul>

      <div className="mt-2">
        <button className="btn btn-blue">
          Next Todo
        </button>
      </div>
    </div>
  );
};
