import React, {useState, useEffect} from "react";
import EstudianteContexto from "./EstudianteContexto";

function EstudianteProvider({children}){
    const [estudiantes, setEstudiantes] = useState([]);

    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWNhY2lvbiI6MTAyMjM0ODc3NCwiY29ycmVvIjoiZXNhbmNoZXoxOTg4QGdtYWlsLmNvbSIsImlhdCI6MTY4MTYwODM4MCwiZXhwIjoxNjgyMjEzMTgwfQ.q5KH3EX0r_x9nBfPw_Sdlo5Qve9SKNqBq52XFxxsXnQ");


    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    useEffect(() => {
        fetch("https://apiestudiantes.maosystems.dev/estudiantes", requestOptions)
        .then(response => response.json())
        .then(result => setEstudiantes(result.data))
        //.then(resul => console.log(result.data))
        .catch(error => console.log('error', error));
    }, []);

    return(
        <EstudianteContexto.Provider value={estudiantes}>
            {children}
        </EstudianteContexto.Provider>
    )
}

export default EstudianteProvider;