//import react into the bundle
import ReactDOM from "react-dom";
import React from 'react';



// include your styles into the webpack bundle
import "../js/component/indexCounter.css";

//import your own components

function SecondsCounter() {
    return(<>
    <div classMate="MainCounter" /><div>
      <div className="Four">0</div>
      <div className="Three">0</div>
      <div className="Two">0</div>
      <div className="One">0</div>

    </div>
    </>)
  }



  let seconds = 0;

  const Contador = setInterval(() => {
  seconds++;


  if (seconds === 20) {
    clearInterval(Contador); 
  
  }



  console.log(Contador);

  }, 1000);
    


//render your react applicatio
ReactDOM.render(<SecondsCounter 
    seconds="Contador"
    
    />, document.querySelector("#app"));
