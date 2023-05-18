import { useState } from "react";

export const Path = ({ pathData: { d, id, name }, onClick }) => {
  return (
    <>
      <path
        d={d}
        id={id}
        name={name}
        onClick={(e) => {
          console.log();
          onClick({
            x: e.clientX - 5,
            y: e.clientY - 5,
          });
        }}
      ></path>
    </>
  );
};
