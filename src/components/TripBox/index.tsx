import React from "react";
import "./style.scss";

interface TripBoxProps {
  header: string;
  content: string;
  footer: string;
}

const Tripbox = ({ header, content, footer }: TripBoxProps) => {
  return (
    <div className="tripBox">
      <div className="tripBox--header">{header}</div>
      <div className="tripBox--content">{content}</div>
      <div className="tripBox--footer">{footer}</div>
    </div>
  );
};

export default Tripbox;
