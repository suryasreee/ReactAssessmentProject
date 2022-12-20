import React from "react";

export function List(props) {
  return (
    <div className="liststyle">
      <ul>
        {props.list.map((data, key) => {
          return <li key={key}>{data.City}</li>;
        })}
      </ul>
    </div>
  );
}
