import React from "react";
import { City } from "../../../types/tripTypes";
import "./style.scss";

interface ButtonTitleProps {
  title: string;
  width?: string;
  height?: string;
  color?: string;
  disabled?: boolean;
}

const Button = ({
  title,
  width = "150px",
  height = "50px",
  color = "#fff",
  disabled,
}: ButtonTitleProps) => {
  return (
    <button
      disabled={disabled}
      className={`customBtn ${disabled && "btnDisabled"}`}
      style={{ width: width, height: height, color: color }}
    >
      {title}
    </button>
  );
};

export default Button;
