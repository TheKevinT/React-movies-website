import React, { useEffect, useState } from "react";
import PageWrapper from "./components/PageWrapper";
import Paginacion from "./components/Paginacion";
import Pelicula from "./components/Pelicula";

const App = () => {
  const [paginaActual, setPaginaActual] = useState(1);
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    buscarPeliculas();
  }, []);
  const tolaPorPagina = 4;
  // let peliculas = PeliculaJson;
  const buscarPeliculas = async () => {
    const url = "https://lucasmoy.dev/data/react/peliculas.json";
    const respuesta = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    const json = await respuesta.json();
    setPeliculas(json);
  };

  const getTotalPages = () => {
    let cantidadTotalPeliculas = peliculas.length;
    return Math.ceil(cantidadTotalPeliculas / tolaPorPagina);
  };

  const peliculasPorPagina = peliculas.slice(
    (paginaActual - 1) * tolaPorPagina,
    paginaActual * tolaPorPagina
  );
  return (
    <>
      <PageWrapper>
        {peliculasPorPagina.map(
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
                key={titulo}
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
