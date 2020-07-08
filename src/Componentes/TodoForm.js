import React, { Component } from 'react';

import '../Estilos/formulario.css';


class TodoForm extends Component {
  constructor () {//almacenar los datos del back end, de lo que hace el ur creo que usuario
    super();
    this.state = {//los datos que estan dentro del estado de la aplicación
      title: '',
      responsible: '',
      description: '',
      priority: 'Nada'
    };
    this.handleInputChange = this.handleInputChange.bind(this);//buscar y vincular el incial de los valores
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();//evita efrescar la pagiina una vez y ptra
    this.props.onAddTodo(this.state);
    this.setState({
      title: '',
      responsible: '',
      description: '',
      priority: 'Nada'
    });
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({//asi cada input que use eso podra mdificar su valor
      [name]: value//el valor que le daras a cada name
    });
  }

  render() {
    
    return ( 
      <div className="card" id="card">
        <h4>Formulario</h4>
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="form-control"
              value={this.state.title}
              onChange={this.handleInputChange}
              placeholder="Nombre"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="responsible"
              className="form-control"
              value={this.state.responsible}
              onChange={this.handleInputChange}
              placeholder="Domicilio"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="description"
              className="form-control"
              value={this.state.description}
              onChange={this.handleInputChange}
              placeholder="Telefono"
              />
          </div>
          <div className="form-group">
            <select
                name="priority"
                className="form-control"
                value={this.state.priority}
                onChange={this.handleInputChange}
              >
              <option>Ocupacion</option>
              <option>Estudiante</option>
              <option>Otro</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
        </form>
       
      </div>
    )
   
  }

}

export default TodoForm;
