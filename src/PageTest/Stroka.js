import React from "react";

import style from "./Stroka.module.css";

const Stroka = ({
  text,
  //, OnBlurSubmit, handleChange
}) => {
  return (
    // <div
    // //onBlur={OnBlurSubmit} onChange={handleChange}
    // >
    //   {text}
    // </div>

    <div>
      <input
        type="text"
        value={text}
        //onBlur={OnBlurSubmit}
        //onChange={handleChange}
      />
    </div>
  );
};

export default Stroka;
