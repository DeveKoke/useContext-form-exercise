import React from "react";
import './Form.css';

const Form = ({saveUser}) => {

  const handleSubmit = (e) =>{
    e.preventDefault()
    const nombre = e.target.nombre.value;
    const edad = e.target.edad.value;
    const email = e.target.email.value;
    const img = e.target.img.value;
  saveUser({
    nombre: nombre,
    edad: edad,
    email: email,
    imagen: img
  })
}


  return <form onSubmit={handleSubmit}>

  <input type="text" name="nombre" placeholder="Nombre"/>
  <input type="text" name="edad" placeholder="Edad"/>
  <input type="email" name="email" placeholder="Email"/>
  <input type="text"name="img" placeholder="URL foto"/>
  <input type="submit" value="MOSTRAR PERFIL"/>
  </form>;
};

export default Form;
