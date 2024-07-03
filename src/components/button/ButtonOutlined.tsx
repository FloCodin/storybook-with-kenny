import React from "react";
import "./Buttons.css";

type ButtonOutlinedProps = {
  type: "success" | "info" | "warning" | "danger" | "default";
  label: string;
};

const ButtonOutlined: React.FC<ButtonOutlinedProps> = ({ type, label }) => {
  return <button className={`btn ${type} `}>{label}</button>;
};

export default ButtonOutlined;
