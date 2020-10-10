//import React from 'react';
//mport ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';


// ReactDOM.render(
//   <React.StrictMode>
//     {/* <App /> */}
//   </React.StrictMode>,
//   document.getElementById('root')

// );

const persona ={
  nombre: 'Antonio',
  edad: '23',
  direccion: {
    ciudad:'Casimiro', 
    lat: 52542,
    lng: 125251
  }
};

console.log(persona);

const persona2 = {...persona};
persona2.nombre = 'peter';

console.log(persona2);
console.log(persona);





