import { useState } from 'react';
import './App.css';

export default function App(){
  const[peso, setPeso]= useState('');
  const[altura, setAltura]= useState('');
  const[mensagem, setMensagem]= useState('');

  function calcularIMC() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if(imc < 18.3) {
      setMensagem('Você esta abaixo do peso! seu IMC é: '+ imc.toFixed(2) )
    }else if(imc >= 18.6 && imc < 24.9){
      setMensagem('Você esta no peso ideal! seu IMC é: '+ imc.toFixed(2) )
    }else if(imc >=24.9 && imc < 34.9){
      setMensagem('Você esta levemente acima do peso! seu IMC é: '+ imc.toFixed(2) )   
    }else if(imc >=34.9){
      setMensagem('Cuidado OBESIDADE! seu IMC é: '+ imc.toFixed(2) )
    }
 
  }


  return(
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu IMC</span>

      <div className="area-input">
        <input 
          type="text"
          placeholder="peso em (kg) Ex:70"
          value={peso}
          onChange={(e)=> setPeso(e.target.value)}
        />

        <input 
          type="text"
          placeholder="Altura em (cm) Ex:180"
          value={altura}
          onChange={(e)=> setAltura(e.target.value)}
        />

        <button onClick={calcularIMC}>
          Calcular
        </button>
      </div>

      <h2>{mensagem}</h2>
    </div>
  )
}
