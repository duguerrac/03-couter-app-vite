//para imprimir variables en html solo debemos agregar las llaves {} y dentro de ellas 
//va cualquier codigo de javascript, pero NO puede ser un objeto 
// const funcion= ()=> ('retorno de la funcion");

import PropTypes from "prop-types";
export const FirstApp = ( {title, subTitle} ) => {
    
  return (
    <>
    <h1>{title}</h1>
    {/* <code>{JSON.stringify(nombre)}</code> */}
    <p>{subTitle}</p>
    </>
  )
};
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string .isRequired
};
FirstApp.defaultProps = {
    title: "No hay titulo",
    subTitle: "No hay subtitulo"
};