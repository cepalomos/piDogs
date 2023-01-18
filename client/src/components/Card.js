import React from "react";
import '../css/Card.css';

function Card({ titulo, url, tempersApi, weight }) {
  let image = url ?? "data:image/png;base64,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";
  // let tempers;
  // if (tempersApi) {
  //   tempers = tempersApi.map((temper) => <p key={temper}>{temper}</p>);
  // } else {
  //   tempers = [<p key={1}>No hay informacion</p>];
  // }

  return (
    <figure className="card_container">
      <h1 className="card_titulo">{titulo}</h1>
      <img src={image} width="180" alt={titulo} />
      <figcaption>{tempersApi}</figcaption>
      <p>{`${weight} kgs`}</p>
    </figure>
  );
}

export default Card;
