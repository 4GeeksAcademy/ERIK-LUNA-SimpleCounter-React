//import react into the bundle
import ReactDOM from "react-dom";
import React from 'react';





// include your styles into the webpack bundle
import "../js/component/indexCounter.css";

//import your own components

function SecondsCounter(props) {

    const unidades = props.seconds % 10;
    const decenas= Math.floor(props.seconds / 10) % 10;
    const centenas = Math.floor(props.seconds / 100) % 10;
    const unimil = Math.floor(props.seconds / 1000) % 10;

  return (
    <>
      <div className="MainCounter">
        <div className="One">{unimil}</div>
        <div className="Two">{centenas}</div>
        <div className="Three">{decenas}</div>
        <div className="Four"> {unidades} </div>
      </div>
    </>
  );
}

let seconds = 0;

const Contador = setInterval(() => {
  seconds++;

  if (seconds === 1000) {
    clearInterval(Contador);
  }

  ReactDOM.render(<SecondsCounter seconds={seconds} />, document.querySelector("#app"));

  console.log(Contador);
}, 1000);

