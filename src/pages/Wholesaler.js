import React from "react";
import { testText } from "../test/test";
import { useForm } from "react-hook-form";
import "./wholesaler.css";
const Wholesaler = () => {
  const mayorista = testText.find((m) => m.name === "Mayorista");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="wholesaler-text">
        <h1>{mayorista.name}</h1>
        <p>{mayorista.text}</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="form-mayorista">
        <label className="labelfield container container-fluid">
          Nombre
          <input {...register("namefield", { required: true })} />
          {errors.namefield && <p className='errorfield'>Este campo es obligatorio</p>}
        </label>

        <label className="labelfield container container-fluid">
          E-mail
          <input
            {...register("emailfield", {
              required: true,
              pattern: { value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ },
            })}
            placeholder="nombre@email.com"
          />
          {errors.emailfield && <p className='errorfield'>E-mail incorrecto</p>}
        </label>

        <label className="labelfield container container-fluid">
          Teléfono
          <input
            type="number"
            {...register("telfield", {
              required: true,
              minLength: { value: 8 },
            })}
          />
          {errors.telfield && <p className='errorfield'>Este campo es obligatorio</p>}
        </label>

        <label className="labelfield container container-fluid">
          Dirección
          <input {...register("dirfield", { required: false })} />
        </label>

        <label className="labelfield mesagefield container container-fluid">
          Mensaje
          <textarea {...register("mesagefield", { required: true })} />
          {errors.mesagefield && <p className='errorfield'>Este campo es obligatorio</p>}
        </label>

        <input type="submit" className="btn btn-form" />
      </form>
    </>
  );
};

export default Wholesaler;
