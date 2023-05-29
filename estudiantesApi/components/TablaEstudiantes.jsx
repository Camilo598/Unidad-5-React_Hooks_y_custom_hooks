import React, {useState, useEffect} from "react";

function TablaEstudiantes(){

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
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Correo</th>
                    <th>Celular</th>
                    <th>LinkedIn</th>
                    <th>Github</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
            {
                estudiantes.map(estudiante =>(
                    <tr key={estudiante.estudiante_id}>
                        <td>{estudiante.estudiante_id}</td>
                        <td>{estudiante.estudiante_nombres}</td>
                        <td>{estudiante.estudiante_apellidos}</td>
                        <td>{estudiante.estudiante_correo}</td>
                        <td>{estudiante.estudiante_celular}</td>
                        <td>{estudiante.estudiante_linkedin}</td>
                        <td>{estudiante.estudiante_github}</td>
                        <td>{estudiante.estudiante_estado}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
}

export default TablaEstudiantes;