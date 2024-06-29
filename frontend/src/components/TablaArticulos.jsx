import React from "react";

export default function TablaArticulos({rows , onActualizar}){

    const escribir = (booleano)=>{
        if (booleano){
            return ('SI')
        }
        return('NO')
    } 

    const tbody = rows.map(e => 
        <tr key={e.IdArticulo}>
            <td>{e.NombreArticulo}</td>
            <td>{e.Precio}</td>
            <td>{e.Stock}</td>
            <td>{e.FechaAlta}</td>
            <td>{e.IdTipo}</td>
            <td>{e.IdProveedor}</td>
            <td>{escribir(e.Activo)}</td>
            <td>
                 {
                     (<button type="button" className="btn btn-primary">
                        eliminar
                   </button>)   
                 }  
            </td>
            <td>
                 {
                     (<button type="button" className="btn btn-primary" onClick={()=>{onActualizar(e)}}>
                        Actualizar
                   </button>)   
                 }  

            </td>
           
        </tr>
    )

    return (
        <>
       <div className="card">
            <div className="card-body">
                <table className="table">
                    <thead>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Fecha Alta</th>
                        <th>Tipo</th>
                        <th>Proveedor</th>
                        <th>Activo</th>
                    </thead>

                    <tbody>{tbody}</tbody>

                </table>
            </div>
            </div>
        </>
    )
}