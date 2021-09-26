import React, { Fragment, useState } from 'react';

const AddTask = (props) => {
    const [tarea, setTarea] = useState("");
    const capturarTarea = (e)=>{
        setTarea(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        /* Llamo a la propiedad compartida con mi componente padre, que es una funcion a traves de props */
        props.handleAddTaskParent(tarea);
        setTarea("");
    }

        return (
        <Fragment>
            <h1 className="my-2 text-center">Lista de Tareas en REACT</h1>
            <div className="container d-flex justify-content-center mt-2">
                <form className="w-75" onSubmit={handleSubmit}>
                    <div className="d-flex form-group">
                        <input type="text" className="form-control" placeholder="Tareas" onChange={capturarTarea} value={tarea}>
                        </input>
                        <button className="btn btn-outline-dark mx-2" type="submit">Agregar</button>
                    </div>
                </form>
            </div>
        </Fragment>
    );
};

export default AddTask;