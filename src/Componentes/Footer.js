import React from 'react';
import logo from '../img/df.png'; 
import face from '../img/face.jpg'; 
import insta from '../img/insta.png'; 
import '../Estilos/footer.css';



export const Footer = () => (

<div id="cont" className="" >
    <div className="row">
        <div id="conts" className="d-none d-lg-block col-lg-4">
        <img src={logo} className="App-logo" alt="logo" /> 
        </div>
        <div className="col-lg-4 col-md-6 text-center">
            <p>
            Dulces el Foraneo S.A. De C.V <br/>
            Casimiro Castillo Jal. Mex. <br/>
            +52 317 387 34 62
            </p>
        </div>
        <div className="col-lg-4 col-md-6 text-center">
            <p>Redes Sociales:</p>
            <a href="https://www.facebook.com/dulcesforaneo/" ><img src={face} className="App-logo" alt="logo" /> </a>
            <a href="https://www.facebook.com/dulcesforaneo/" ><img src={insta} className="App-logo" alt="logo" /> </a>
        </div>
    </div>
</div>

)

