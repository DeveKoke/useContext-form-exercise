import React from "react";
import './Card.css'

const Card = ({user}) => {
  return (
    <article>
      <h3> USER: {user.nombre} </h3>
      <h3> AGE: {user.edad} </h3>
      <img src={user.imagen} />
    </article>

    );
};

export default Card;
