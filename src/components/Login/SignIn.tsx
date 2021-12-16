import React, { Component } from 'react';
import '../css/signIn.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';
import { Icon } from '@iconify/react';

const baseUrl="http://localhost:3001/usuarios";
const cookies = new Cookies();

export class SignIn extends Component {
    state={
        form:{
            username: '',
            password: ''
        }
    }

    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    iniciarSesion=async()=>{
        await axios.get(baseUrl, {params: {username: this.state.form.username, password: md5(this.state.form.password)}})
        .then(response=>{
            return response.data;
        })
        .then(response=>{
            if(response.length>0){
                var respuesta=response[0];
                cookies.set('id', respuesta.id, {path: "/"});
                cookies.set('apellido_paterno', respuesta.apellido_paterno, {path: "/"});
                cookies.set('apellido_materno', respuesta.apellido_materno, {path: "/"});
                cookies.set('nombre', respuesta.nombre, {path: "/"});
                cookies.set('username', respuesta.username, {path: "/"});
                alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido_paterno}`);
                window.location.href="./menu";
            }else{
                alert('El usuario o la contraseña no son correctos');
            }
        })
        .catch(error=>{
            console.log(error);
        })

    }

    componentDidMount() {
        if(cookies.get('username')){
            window.location.href="./menu";
        }
    }
    

    render() {
        return (
    <div className="containerPrincipal">
        <div className="containerTop">
            <div>
                <Icon className="flag" icon="emojione:flag-for-spain" />
            </div>
            <div>
                <Icon className="flag" icon="emojione:flag-for-united-kingdom" />
            </div>
        </div>
        <div className="containerMiddle">
            <div className="title">
            <div className="hiNeighbor">
                Bienvenido a iHood!

            </div>
            <div className="houseIcon">
                <Icon className="iconHouse" icon="noto:house-with-garden" />
            </div>
            </div>
            <div className="login">
                <div className="form-group">
                  <label>Usuario: </label>
                 <br />
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      onChange={this.handleChange}
                   />
                  <br />
                   <label>Contraseña: </label>
                   <br />
                 <input
                     type="password"
                   className="form-control"
                      name="password"
                      onChange={this.handleChange}
                 />
                 <br />
                </div>
            </div>
            <div className="login2">
                <div className="rememberMe">
                    <div className="rememberMeLeft">
                        <button className="rememberButton"></button>
                        <div className="rememberText">Recuérdame</div>
                    </div>
                    <div className="rememberMeRight">
                        <div className="rememberPassword">
                        <a href="https://www.facebook.com/">¿Hás olvidado tu contraseña?</a>
                        </div>
                    </div>
                </div>
                <div className="loginButton">
                <button className="btn btn-primary" onClick={()=> this.iniciarSesion()}>Iniciar Sesión</button>
                </div>
            </div>
            
        </div>
        <div className="containerBottom">
            <div className="detailedLines">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
                <div className="line4"></div>
            </div>
            <div className="bottom">
                <div className="bottomText">
                    ¿No eres miembro aún?
                </div>
                <div className="registerButton">
                    <div>
                        <button className="registerText" onClick={()=> this.iniciarSesion()}>Registrate aquí</button>
                    </div> 
                </div>

            </div>
        </div>
    </div>
        );
    }
}

