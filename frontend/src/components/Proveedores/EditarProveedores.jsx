import React from "react";
import { useForm } from "react-hook-form";

export default function EditarProveedor(props) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    props.actualizarProveedor(props.proveedor.IdProveedor, data);
  };

  return (
    <div>
      <h2>Editar Proveedor</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="nombre">Nombre del Proveedor:</label>
          <input
            type="text"
            id="nombre"
            defaultValue={props.proveedor.NombreProveedor}
            {...register("NombreProveedor", { required: true })}
          />
          {errors.NombreProveedor && <span>Este campo es requerido</span>}
        </div>
        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
}
