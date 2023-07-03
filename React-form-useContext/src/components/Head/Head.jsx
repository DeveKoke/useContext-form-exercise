import React, { useContext } from "react";
import { EmailContext } from '../../context/EmailContext';

const Head = () => {
  const { user } = useContext(EmailContext);
  return (

  <h2>WELCOME {user.email}</h2>

 ) ;
};

export default Head;
