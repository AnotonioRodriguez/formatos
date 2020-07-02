import React from 'react';
import '../Estilos/home.css';
import dul from '../img/gusano.jpg'; 
import dulc from '../img/oso.jpg'; 
import luneta from '../img/lunetas.jpg'; 
import rojos from '../img/rojos.jpg'; 
import chicle from '../img/chicle.jpg'; 

import esq from '../img/dulces.jpeg'; 
import pal from '../img/paleton.png'; 
import palD from '../img/DerPal.png'; 

import { Carousel } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { CardDeck } from "react-bootstrap";

export const Home = () => (
<div>

            <h1> <img id="pal" src={palD} alt="Paletota"/> Dulces "El Foraneo" <img id="pal" src={pal} alt="Paletota"/></h1> 
            
            <h2>Llego el azucar diabeticos</h2>
<div  className="container">
    <Carousel>
      <Carousel.Item>
        <img id="dul"
          className="d-block w-100"
          src={dul}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Los mejores Dulces</h3>
          <p id="car">Lo mejor en todo CUCSUR</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img id="dul"
          className="d-block w-100"
          src={dulc}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Lo mas placentero de tu dia</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img id="duls"
          className="d-block w-100"
          src={esq}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>El mejor ambiente </h3>
          <p id="car">Los mejores memes</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
<br/>
  <div id="fondod">
    <br/>
    <div id="card">
  <CardDeck>

  <Card>
    <Card.Body>
      <Card.Title className='font-weight-bold display-4 text-center'>Mision</Card.Title>
      <Card.Text className=' font-weight-bold'>
        Somos una micro Empresa que se dedica a endulzarles la vida a los alumnos de CUCSUR haciendoles
        llegar deliciosos dulces acompanados de las mejores frases y memes para alegrarlos y se motiven en su dia.
      </Card.Text>
    </Card.Body>
    <Card.Img variant="top" src={rojos} />
  </Card>

  <Card >
  
    <Card.Body>
      <Card.Title className='font-weight-bold display-4 text-center'>Que es Dulces El Fornaeo</Card.Title>
      <Card.Text className=' font-weight-bold text-center'>
        Micro Empresa que surge como un proyecto personal y al mismo tiempo como una necesidad economica.<br/><br/>
        Nos dedicamos a la venta de de diversos productos con alto contenido de azucar (dulces) por lo tanto su giro comercial dentro 
        de la comunidad estudiantil de CUCSUR.<br/><br/>
        Dando el mejor toque todas las semanas con los mejores memes referentes a las diferentes problematicas que surgen en la vida
        diaria de un estudiante.
        {''}
      </Card.Text>
    </Card.Body>
    
  </Card>

  <Card >
    <Card.Body>
      <Card.Title className='font-weight-bold display-4 text-center'>Valores</Card.Title>
      <Card.Text>
        Nos comprometemos a siempre brindar el mejor servicio bajo ciertos valores que nos identifican dentro del espacio Universitario:
       <p className='font-weight-bold'>Respeto</p> 
       <p className='font-weight-bold'>Identidad</p> 
       <p className='font-weight-bold'>Calidad</p> 
       <p className='font-weight-bold'>Alegria</p> 
      </Card.Text>
    </Card.Body>
    <Card.Img variant="top" src={luneta} />
  </Card>
</CardDeck>
</div>
<br/>
  </div>
  <br/>

</div>      
)
