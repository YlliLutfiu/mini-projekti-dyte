import React from "react";
import Users from "../Components/Users";
import Todos from "../Components/Todos";

const Homepage = () => {
  const numberOfUsers = 10;
  const userPostElements = [];

  for (let userId = 1; userId <= numberOfUsers; userId++) {
    userPostElements.push(
      <React.Fragment key={userId}>
        <Users id={userId} />
        <Todos userId={userId} />
      </React.Fragment>
    );
  }

  return <div className="App">{userPostElements}</div>;
};

export default Homepage;
