import React from "react";
import '../css/Pagination.css';

function Pagination({ pages, funcPage }) {
  return (
    <div className="contenedor_pagination">
      <ul>
        {pages[1].map((number) => (
          <li key={number}>
            <button
            className="button_pagination"
              onClick={(e) => {
                e.preventDefault();
                funcPage(number);
              }}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
