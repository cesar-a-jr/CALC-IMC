import { useState } from 'react';
import './App.css';

export default function App(){
  const[peso, setPeso]= useState('');
  const[altura, setAltura]= useState('');
  const[telefone, setTelefone]= useState('');
  const[mensagem, setMensagem]= useState('');


  return(
    <div className="app">
      <h1>Mudando de Vida!</h1>
      <span>Se inscreva em nosso curso</span>

      <div className="area-input">
        <input 
          type="text"
          placeholder="Nome"
          value={peso}
          onChange={(e)=> setPeso(e.target.value)}
        />

        <input 
          type="text"
          placeholder="Email"
          value={altura}
          onChange={(e)=> setAltura(e.target.value)}
        />

        <input 
          type="text"
          placeholder="Telefone"
          value={telefone}
          onChange={(e)=> setAltura(e.target.value)}
        />

        <button>
          Inscrever
        </button>
      </div>

      <h2>{mensagem}</h2>
    </div>
  )
}
