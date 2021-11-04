import React from "react";

const Pelicula = ({
  titulo,
  calificacion,
  director,
  actores,
  fechaLanzamiento,
  duracion,
  imagen,
  children,
}) => {
  return (
    <>
      <div className="movie-item-style-2">
        <img src={imagen} alt="" />
        <div className="mv-item-infor">
          <h6>
            <a href="moviesingle.html">
              {titulo}
              <span>(2012)</span>
            </a>
          </h6>
          <p className="rate">
            <i className="ion-android-star" />
            <span>{calificacion}</span> /10
          </p>
          <p className="describe">{children}</p>
          <p className="run-time">
            {" "}
            Run Time: {duracion} . <span>MMPA: PG-13 </span> .{" "}
            <span>Release: {fechaLanzamiento}</span>
          </p>
          <p>
            Director: <a href="#">{director}</a>
          </p>
          <p>
            Stars: <a href="#">{actores}</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Pelicula;
