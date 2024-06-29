import React from "react";
import { useForm } from "react-hook-form";

export default function RegistrarProveedor(props) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    props.registrarProveedor(data);
  };

  return (
    <div>
      <h2>Registrar Nuevo Proveedor</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="nombre">Nombre del Proveedor:</label>
          <input
            type="text"
            id="nombre"
            {...register("NombreProveedor", { required: true })}
          />
          {errors.NombreProveedor && <span>Este campo es requerido</span>}
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}
