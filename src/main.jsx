import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; //componente

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
// import CounterApp from "./components/CounterApp.jsx";
// import MoviesPaginationApp from "./components/MoviesPaginationApp.jsx";
// import "./index.css";

//ReactDOM.createRoot(donde, que)
ReactDOM.createRoot(document.getElementById("root")).render(<App />);

//SPA
//SINGLE PAGE APP

// let tarjeta = document.createElement('div')
// tarjeta.className='card'

// const contenido=`<h3>Título</h3>
// <p>soy un parrafo</p>`
// tarjeta.innerHTML=contenido

// <div class="card">
// <h3>Título</h3>
// <p>soy un parrafo</p>
// </div>
