import React, { Component } from 'react';

import ImageGallery from 'react-image-gallery';
import 'antd/dist/antd.css';

import 'react-image-gallery/styles/scss/image-gallery.scss';
import 'react-image-gallery/styles/css/image-gallery.css';

import { InputNumber } from 'antd';
import { Button, Radio } from 'antd';



function onChange(value) {
  // console.log('changed', value);
}


const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];
   

  export class Galeria extends React.Component {

    render() {

      return(       

      <div className="container">
        <h1>Producto xXx</h1>
        <div className="row">
          <div className="col-lg-9">
          <ImageGallery items={images} />
          </div>
          <div className="col-lg-3">
          <p>Producto mexicano 100% confiable</p>
          <p style={{color:'green'}}>$1,500</p>
          <p>Cantidad</p>
          <InputNumber size="large" min={1} max={10} defaultValue={0} onChange={onChange} />
          <p style={{color:'green'}}>Devoluciones Gratiss</p>
          
          <Button type="primary" size="large">Comprar ahora</Button>
          <br/><br/>
          <Button size="large">Agregar al carrito</Button>
          </div>
          
        </div>
      </div>
     )
    }
  }

