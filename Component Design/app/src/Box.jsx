import { useState } from "react";
import "./Box.css";
export default function Box({ isActice, myOnClick }) {
  return (
    <div
      className="Box"
      onClick={myOnClick}
      style={{ backgroundColor: isActice ? "green" : "red" }}
    ></div>
  );
}
