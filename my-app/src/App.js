import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {

  const [x, setX] = useState("");
  const [n, setN] = useState("");
  const [fin, setFin] = useState("");

  const expo = (x, n) =>{ // 1st of all we are going to calculate x^n
    let result = 1; // The value is settled down on 1 avoiding multiplications for 0
    for (let i = 0; i < n; i++ ){ 
      result = result * x; // We are going to iterate n times multiplying for x until we reach the x^n
    }
    return result
  }

  const fact = (n) =>{ // 2nd part to calculate the n! 
    let result = 1; // As we know, 0! is 1 so we are going to calculate from 1 to n 
    for (let i = 1; i <= n; i++ ){ //i=1 for the same reason thant result is 1, we are going to calculate from 1 to n 
      result = result * i; // so here we are going to iterate n times multiplying for i until we reach the n!
    }
    return result
  }

  const final = (x,n) =>{
    let solution = 1;
    for (let i = 1; i <= n; i++ ){
      if (i === 0){
        solution = 1 // We set the 0! here to 1. Also, we could settle down solution to 1 as we did in expo() and fact() but as an example, we are going to do different this time just for fun :D.
      }else{
        
        solution = solution + ((expo(x,i)/fact(i))) // Here is the magic, we are going to call expo() and fact() every time to calculate ((x^n)/n!) using the variable i as n in every loop.
      }

    }
    return (solution)
  }

  return (
    <div className="App">
        <>
        <p>
        Challenge: Exponential function approximation
        </p>
        <p>
          Set x
        </p>
        <input placeholder='Set x'
        onChange={(e) => setX(e.target.value)}> 
        </input>
        <p>
          Set y
        </p>
        <input placeholder='Set y'
        onChange={(e) => setN(e.target.value)}>
        </input>
        <p>
        <button
        onClick={()=>setFin(final(x,n))}>
          <span>Calculate</span>
        </button>
        </p>
        {fin === "" ?<p></p>: <p> Result: {fin}</p> }
        </>
    </div>
  );
}

export default App;
