//import react into the bundle
import ReactDOM from "react-dom";
import React from 'react';



// include your styles into the webpack bundle
import "../js/component/indexCounter.css";

//import your own components

function SecondsCounter(props) {
  return (
    <>
      <div className="MainCounter">
        <div className="One">0</div>
        <div className="Two">0</div>
        <div className="Three">0</div>
        <div className="Four">{props.seconds}</div>
      </div>
    </>
  );
}

let seconds = 0;

const Contador = setInterval(() => {
  seconds++;

  if (seconds === 100) {
    clearInterval(Contador);
  }

  ReactDOM.render(<SecondsCounter seconds={seconds} />, document.querySelector("#app"));

  console.log(Contador);
}, 1000);

//render your react applicatio

