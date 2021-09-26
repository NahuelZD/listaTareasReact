import React, { Fragment, useState } from 'react';

const Tareas = () => {
    const [listaTareas, setListaTareas] = useState([]);
    const [tarea, setTarea] = useState("");

    const capturarTarea = (e)=>{
        //Cada vez que suceda el evento...
        console.log(e.target.value);
        //Guardar el contenido de...
        setTarea(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("En el evento Submit")
        let arreglo = listaTareas;
        arreglo.push(tarea);
        setListaTareas(arreglo);
        setTarea("");
    }

        return (
        <Fragment>
            <h1 className="my-2 text-center">Lista de Tareas en REACT</h1>
            <div className="container d-flex justify-content-center mt-2">
                <form className="w-75" onSubmit={handleSubmit}>
                    <div className="d-flex form-group">
                        <input type="text" className="form-control" placeholder="Tarea 1" onChange={capturarTarea} value={tarea}>
                        </input>
                        <button className="btn btn-outline-dark mx-2" type="submit">Agregar</button>
                    </div>
                </form>
            </div>
        </Fragment>
    );
};

export default Tareas;