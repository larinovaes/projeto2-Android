import react from "react";

function ComponenteComProps(props) {
  return(
      <div>
          <h1>{props.nome}</h1>
          <h2>{props.cargo}</h2>
      </div>
    )
}

export default ComponenteComProps;