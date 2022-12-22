import React from "react";

function Card({ titulo, url, tempersApi, weight }) {
  let tempers;
  if (tempersApi) {
    tempers = tempersApi.map((temper) => <p key={temper}>{temper}</p>);
  } else {
    tempers = [<p key={1}>No hay informacion</p>];
  }

  return (
    <div>
      <figure>
        <h1>{titulo}</h1>
        <img src={url} width="180" alt={titulo} />
        <figcaption>{tempers}</figcaption>
        <p>{weight}</p>
      </figure>
    </div>
  );
}

export default Card;
