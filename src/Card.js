import React from "react";
import "./Card.css";

const Card = ({ name, email, id, username }) => {
  return (
    <div className="dib br3 pa3 ma2 grow bw2 sahdow-5 card">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="robot" />
      <div className="tc">
        <h2>{name}</h2>
        <h3>{username}</h3>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
