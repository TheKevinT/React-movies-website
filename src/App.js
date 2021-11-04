import React from "react";
import PageWrapper from "./components/PageWrapper";
import Pelicula from "./components/Pelicula";
import PeliculaJson from "./peliculas.json";

const App = () => {
  let peliculas = PeliculaJson;

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
      </PageWrapper>
    </>
  );
};

export default App;
