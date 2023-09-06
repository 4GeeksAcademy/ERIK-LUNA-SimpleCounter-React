//import react into the bundle
import ReactDOM from "react-dom";
import React, { useState, useEffect } from 'react';

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components

function SecondsCounter() {
    
  }

  let seconds = 0;

  const Contador = setInterval(() => {
  seconds++;

  if (seconds === 20) {
    clearInterval(Contador); 
  }


  console.log(`Segundos transcurridos: ${seconds}`);

  }, 1000);
    


//render your react applicatio
ReactDOM.render(<SecondsCounter 
    seconds="Contador"
    
    />, document.querySelector("#app"));
