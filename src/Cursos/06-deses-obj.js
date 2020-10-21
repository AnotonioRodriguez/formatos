//Destructuracionn

const persona ={
  nombre: 'Antonio',
  edad: 45,
  clave: 'Poderoso'
}

//const { nombre, edad, clave } = persona;

const retornarPersona = ({nombre, edad, rango = 'soldado'}) => {

  //console.log(nombre, edad, rango);

  return {
    nombreClave: clave,
    años: edad,
    latlng: {
      lat: 1405,
      lng: -1204
    }
  }

}

const {nombreClave, años, latlng: {lat, lng}} = retornarPersona (persona);

console.log(avenger);
console.log(lat, lng);