import React, { useContext, useState } from 'react'
import './App.css';
import Head from './components/Head';
import Form from './components/Form';
import Card from './components/Card';
import { EmailContext } from './context/EmailContext'

function App() {

  const [user, setUser ] = useState({});
  const [showCard, setShowCard] = useState(false);

  const userData = {
    user,
    setUser
  }

  const saveUser = newUser => {
      setUser(newUser),     
      setShowCard(true);
  };
  

  return (
    <>
    <EmailContext.Provider value={userData}>
    {showCard && <Head />}
      </EmailContext.Provider>
      <Form saveUser={saveUser}/>      {/* HIJO 1: Establece lo que va a cambiar la variable email, es decir el texto de los inputs*/}
      {showCard && <Card user={user} />}
        {/* HIJO 2: variables nombre edad e img cambian desde hijo 1 y los exportamos a Card para pindarlo */}
    </> 
  )
}

export default App

