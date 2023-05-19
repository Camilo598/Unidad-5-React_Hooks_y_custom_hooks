import React, {useState} from "react";

function CambioTema(){
    const [tema, setTema] = useState('light');

    const cambiarTema = () => {
        if (tema === 'light'){
            setTema('dark');
        } else {
            setTema('light')
        }
    }

    return (
        <div className={"App ${tema}"}>
            <h1>Cambio de Tema</h1>
            <button onClick={cambiarTema}>Cambiar tema</button>
        </div>
    ) 
}

export default CambioTema