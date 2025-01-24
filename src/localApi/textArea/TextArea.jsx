import React from "react";

const TextArea = ({ text, handleSubmit, handleChange }) => {
  return (
    <div>
      <button type="submit">Save post</button>
      <form method="post" onSubmit={handleSubmit}>
        <textarea
          //onBlur={deactivateMode}
          onChange={handleChange}
          name="textName"
          value={text}
        ></textarea>
      </form>
    </div>
  );
};

export default TextArea;
