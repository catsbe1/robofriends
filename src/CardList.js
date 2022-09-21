import React from "react";
import Card from "./Card";
import "./CardList.css";

const CardList = ({ robots }) => {
  return (
    <div className="container">
      {robots.map((user, i) => {
        return (
          <Card
            key={robots[i].id}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
            username={robots[i].username}
          />
        );
      })}
    </div>
  );
};

export default CardList;
