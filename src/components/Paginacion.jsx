import React from "react";

const Paginacion = ({ pagina, total, onChange }) => {
  const getPage = () => {
    const resultado = [];
    for (let i = 0; i < total; i++) {
      let pag = i + 1;
      resultado.push(
        <a
          className={pagina === pag ? "active" : ""}
          onClick={() => {
            onChange(pag);
          }}
          style={{ cursor: "pointer" }}
        >
          {pag}
        </a>
      );
    }
    return resultado;
  };
  return (
    <>
      <div className="topbar-filter">
        <div className="pagination2">
          <span>
            Página {pagina} de {total}:
          </span>
          {getPage()}
        </div>
      </div>
    </>
  );
};

export default Paginacion;
