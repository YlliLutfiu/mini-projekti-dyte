import React, { useState, useEffect } from "react";
import axios from "axios";

const Todos = (props) => {
  const userId = props.userId;
  const PostsApi = "https://jsonplaceholder.typicode.com/todos";

  const [todos, setTodos] = useState();

  useEffect(() => {
    axios
      .get(PostsApi)
      .then((res) => {
        setTodos(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="todos-wrapper">
      {todos &&
        todos.map((el) =>
          el.userId === userId ? (
            <div key={el.id} className="todos-container">
              <p className="todo-title">{el.title}</p>
              <p className="todo-completed">
                Completed: {String(el.completed)}
              </p>
            </div>
          ) : (
            ""
          )
        )}
    </div>
  );
};

export default Todos;
