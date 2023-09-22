import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const SingleUser = () => {
  const { userId } = useParams();
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }, [userId]);
  return (
    <div className="user-wrapper">
      <button className="back" onClick={() => navigate(-1)}>
        &#8592; Go back
      </button>
      {user && (
        <div key={user.id} className="single-user-container">
          <p className="singleuser-name">Name: {user.name}</p>
          <p className="singleuser-username">Username: {user.username}</p>
          <p className="singleuser-email">Email: {user.email}</p>
          <p className="singleuser-address">Address: {user.address.street}</p>
          <p className="singleuser-company">Company: {user.company.name}</p>
          <p className="singleuser-website">Website: {user.website}</p>
        </div>
      )}
    </div>
  );
};

export default SingleUser;
