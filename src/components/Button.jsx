import React from "react";
import { Link } from "react-router-dom";

function Button({
  width,
  height,
  text,
  textColor,
  textSize,
  color,
  borderWidth,
  borderColor,
  rounded,
}) {
  return (
    <Link
      style={{
        fontSize: textSize,
        border: `1 ${borderWidth} ${borderColor}`,
        borderRadius: rounded,
        width,
        height,
        backgroundColor: color,
        color: textColor,
      }}
      to={`/TestPage`}
      className="flex justify-center items-center font-[vazir-medium]"
    >
      {text}
    </Link>
  );
}

export default Button;
