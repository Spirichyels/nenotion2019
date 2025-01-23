import React from "react";

const TextArea = ({ handleSubmit, text }) => {
  return (
    <div>
      <button type="submit">Save post</button>
      <form method="post" onSubmit={handleSubmit}>
        <textarea
          //onBlur={deactivateMode}
          name="textName"
          defaultValue={text}
        ></textarea>
      </form>
    </div>
  );
};

export default TextArea;
