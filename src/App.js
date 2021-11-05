import React, { useState } from "react";
import PageWrapper from "./components/PageWrapper";
import Paginacion from "./components/Paginacion";
import Pelicula from "./components/Pelicula";
import PeliculaJson from "./peliculas.json";

const App = () => {
  const [paginaActual, setPaginaActual] = useState(1);
  const tolaPorPagina = 4;
  let peliculas = PeliculaJson;
  const cargarPeliculas = () => {
    peliculas = peliculas.slice(
      (paginaActual - 1) * tolaPorPagina,
      paginaActual * tolaPorPagina
    );
  };

  const getTotalPages = () => {
    let cantidadTotalPeliculas = PeliculaJson.length;
    return Math.ceil(cantidadTotalPeliculas / tolaPorPagina);
  };
  cargarPeliculas();

  return (
    <>
      <PageWrapper>
        {peliculas.map(
          ({
            titulo,
            calificacion,
            director,
            actores,
            fecha,
            duracion,
            img,
            descripcion,
          }) => {
            return (
              <Pelicula
                titulo={titulo}
                calificacion={calificacion}
                director={director}
                actores={actores}
                fechaLanzamiento={fecha}
                duracion={duracion}
                imagen={img}
              >
                {descripcion}
              </Pelicula>
            );
          }
        )}
        <Paginacion
          pagina={paginaActual}
          total={getTotalPages()}
          onChange={(pagina) => {
            setPaginaActual(pagina);
          }}
        />
      </PageWrapper>
    </>
  );
};

export default App;
