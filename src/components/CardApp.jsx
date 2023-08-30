import React from "react";

const CardApp = ({ movie }) => {
  const { title, image, description } = movie;

  const mostrarDescripcion = () => {
    alert(title + "\n" + description);
  };

  return (
    <div className="card">
      <h3>{title}</h3>
      <div onClick={mostrarDescripcion}>
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default CardApp;
