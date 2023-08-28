import React from "react";

const ListaApp = ({ data }) => {
  //   console.log(props);
  //  props:{
  //     data:[{}]
  //  }
  const persona = {
    nombre: "José",
    edad: 45,
  };

  const { nombre, edad } = persona;
  console.log(nombre);
  //desestructuración de objetos
  //   const { data } = props;
  console.log(data);

  return (
    <ul>
      {data.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
};

export default ListaApp;
