import React from "react";

const CheckBoxWithLabel = ({ id, title }) => {
  return (
    <div className="checkbox-with-label">
      <p className="checkbox-title">{title}</p>
      <input type="checkbox" name={title} id={id} tabIndex={-1} />
      <label htmlFor={id} tabIndex={0}></label>
    </div>
  );
};

export default CheckBoxWithLabel;
