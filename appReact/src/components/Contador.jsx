import React, {useState} from 'react';

function Contador(){
    const [contador, setContador] = useState(500);

    const aumentar = () => setContador(contador + 1);
    const disminuir = () => setContador(contador - 1);
    const resetear = () => setContador(0);

    return(
        <div>
            <h1>Contador: {contador}</h1>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={disminuir}>Disminuir</button>
            <button onClick={resetear}>Resetear</button>
        </div>
    );
}

export default Contador;