import React from 'react';
import { Card } from "react-bootstrap";

import { Layout } from '../Componentes/Layout';
import '../Estilos/informacion.css';

import dul1 from '../img/cu.jpeg'; 
import dul2 from '../img/delce2.jpeg'; 

export const Informacion = () => ( 
    
        <div >
            
            <div id="fond">
                <br/>
            <h1 >Informacion</h1>
            <h2 id="title">  Un poco de nosotros  </h2>
            <br/><br/>
            <Layout>
                <div className="Container-fluid animate__animated animate__bounce">
                <div className="row">
                <div className="col-lg-6">
                    <Card>
                        <Card.Body>
                        <Card.Title id="title">Micro Empresario</Card.Title>
                        <Card.Text id="description">
                           Empresa totalmente mexicaa que nace del apoyo de los estudiantes dentro del Centro Universitario de la Costa Sur <br/>
                            Comprometida totalmente dentro del ambiente estudiantil para el desarrollo de nuevas ideas y tecnicas de venta dentro del centro universitario
                        </Card.Text>
                        </Card.Body>
                        <Card.Img id="cardI" variant="top" src={dul1} /> 
                    </Card>
                </div>
                <div className="col-lg-6">
                     <Card>
                        <Card.Body>
                        <Card.Title  id="title">Personal</Card.Title>
                        <Card.Text  id="description">
                           Dentro de esta gran empresa laborando se encuentran, el titular de la empresa:
                           <br/> C. Brayan Antonio Rodriguez Flores, estudiande del mismo centro donde se lleva a cabo todo lmovimiento de esta empresa
                           <br/> En junto de su hermano el C. Edson Alejandro, mismo socio de la empresa, al igual estudiante del centro universitario.
                           <br/>
                        </Card.Text>
                        </Card.Body>
                         <Card.Img id="cardI" variant="top" src={dul2} /> 
                    </Card>
                </div>
                
                <div className="col-lg-8">
                <br/><br/><br/>
                <Card>
                        <Card.Body>
                        <Card.Title  id="title">Por que Dulces?</Card.Title>
                        <Card.Text  id="description">
                            Dentro del centro Universitario, siempre para los estudiantes surge como una necesidad de saciar el hambre y poder controlar
                            esa misma ansiedad, al mismo tiempo puede lograr controlar exitosamente el nivel de azucar y estar al 100% de sus capacidades estudiantiles.
                            <br/> Ademas de que es un producto que presenta una muy buena rentabilidad, y ademas de contar con el mejor y extenso surtido, que no 
                            se puede encontrar dentro de las cafeterias del mismo centro.
                            
                        </Card.Text>
                        </Card.Body>
                </Card>
                <br/><br/><br/>
                </div>
                </div>
                </div>
                </Layout>
            
            </div>  
              
        </div>
    
)
