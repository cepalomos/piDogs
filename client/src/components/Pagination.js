import React from "react";

function Pagination({ pages, funcPage }) {
  return (
    <div>
      <ul>
        {pages[1].map((number) => (
          <li key={number}>
            <button
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
