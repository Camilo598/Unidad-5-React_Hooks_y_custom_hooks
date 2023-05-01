import React from "react";
import Select from "./Select";
import Input from "./Input";
import Button from "./Button";

function Form(){
    const opciones = ["cedula","tarjeta","pasaporte"];
    return(
        <form>
            <Select titulo="Tipo Identificacion" opciones={opciones}/>
            <Input titulo="Numero Identificacion" type="number" placeholder="numeroidentificacion"/>
            <Input titulo="Nombre" type="text" placeholder="Nombre"/>
            <Input titulo="Apellido" type="text" placeholder="Apellido"/>
            <Input titulo="Telefono" type="number" placeholder="Telefono"/>
            <Input titulo="Correo" type="email" placeholder="Correo"/>
            <Input titulo="Linkedin" type="text" placeholder="Linkedin"/>
            <Input titulo="Github" type="text" placeholder="Github"/>
            <Button type="submit" value="Guardar" />
        </form>
    )
}

export default Form;