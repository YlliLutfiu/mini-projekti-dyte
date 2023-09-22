import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Users = (props) => {
  const [users, setUsers] = useState();
  const id = props.id;

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="users-wrapper">
      {users &&
        users.map((el) =>
          el.id === id ? (
            <div key={el.id} className="user-container">
              <p className="name">{el.username}</p>
              <p className="postsby">Todos for {el.username}:</p>
              <Link to={`/${el.id}`}>
                <button className="singleuser-infos">
                  Click here to show {el.username}'s Informations
                </button>
              </Link>
            </div>
          ) : (
            ""
          )
        )}
    </div>
  );
};

export default Users;
