import React, {useState}from "react";

const TareaForm = ({ agregarTarea }) => {
    
    const [input, setInput] = useState('');

    const formSubmit = (e) => {
        e.preventDefault();
        agregarTarea(input);
        setInput('');
    }

    return(
        <form onSubmit={formSubmit}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Agregar tarea..."
            />
            <button type="submit">Agregar</button>
        </form>
    );
};

export default TareaForm