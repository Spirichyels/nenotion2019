import React from "react";
import styles from "./TextArea.module.css";

const TextArea = ({ text, OnBlurSubmit, handleChange }) => {
  return (
    <form onBlur={OnBlurSubmit}>
      <div className={styles.item}>
        <textarea
          rows={5}
          cols={50}
          onChange={handleChange}
          value={text}
        ></textarea>
      </div>
    </form>
  );
};

export default TextArea;
