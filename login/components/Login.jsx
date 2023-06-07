import React, {useContext, useState} from "react";
import AuthContext from "./AuthContext";
import "../src/assets/css/Login.css";

const Login = () => {

    const [identificacion, setIdentificacion] = useState("");
    const [correo, setCorreo] = useState("");
    const auth = useContext(AuthContext);

    const enviarForm = async (e) => {
        e.preventDefault();
        console.log("Enviando formulario")
        await auth.login(identificacion, correo);
    };

    return (
        <div className="login-container">
            <form onSubmit={enviarForm} className="login-form">
                <input 
                    type="number"
                    placeholder="Ingresa su Identificacion" 
                    value={identificacion}
                    onChange={(e) => setIdentificacion(e.target.value)}
                />
                <input 
                    type="email" 
                    placeholder="Ingrese su Correo Electronico"  
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}  
                />
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default Login;