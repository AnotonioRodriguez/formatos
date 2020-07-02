import React, { Component } from 'react';
//Imagenes
import imagen from './img/register.jpg';

//estilos

import './form.css';

// data
import { todos } from './todos.json';

// subcomponents
import TodoForm from './components/TodoForm';

class Formulario extends Component {
    constructor() {//almacenar los datos del back end, de lo que hace el ur
      super();
      this.state = {//los datos estan dentro del estado de la aplicacion
        todos
      }
      this.handleAddTodo = this.handleAddTodo.bind(this);
    }
  
    removeTodo(index) {
      this.setState({
        todos: this.state.todos.filter((e, i) => {
          return i !== index
        })
      });
    }
  
    handleAddTodo(todo) {
      this.setState({
        todos: [...this.state.todos, todo]
      })
    }
  
    render() {
      const todos = this.state.todos.map((todo, i) => {
        return (
          <div className="col-md-4" key={i}>
            <div className="card mt-4">
              <div className="card-title text-center">
                <h3>{todo.title}</h3>
                <span className="badge badge-pill badge-danger ml-2">
                  {todo.priority}
                </span>
              </div>
              <div className="card-body">
                {todo.description}
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-danger"
                  onClick={this.removeTodo.bind(this, i)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        )
      });
  
      // RETURN THE COMPONENT

      return (
    <div className="App">
         {/* Comienzo del contador */}
        <div>
        <div id="usuario" className="align-self-center" >
              <h4>
                  Registrate dentro de nuestra empresa como un cliente mas. <br/><br/> 
              </h4>
             
          </div>
        </div>
            <div className="container-fluid " id="inicio" >
                <div className="row " id="dentro">
                <div id="inf" className="col-lg-5 sticky-top">
                    <br/>
                    <p>Numero de Usuarios Registrados:</p>
                    <h4 id="spa" >
                    {this.state.todos.length}
                    </h4>  
                    <br/>     
                        Para poder continuar con tu proceso de registro debes de llenar el siguiente formulario para estar dado de alta.
                </div>
                <div className="col-lg-5 sticky-top" >
                    <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
                </div>
                </div>
            </div>
           
            <div className="container">
            <div className="row mt-4">
              <div className="col-md-8">
                <div className="row">
                  {todos}
                </div>
              </div>
            </div>
          </div>
    </div>
      );
    }
  }
  
  export default Formulario;