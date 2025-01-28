import React, { useEffect, useState } from "react";

const TextAreaContainer2 = ({ text }) => {
  console.log("TextAreaContainer");
  let [newPostContent, pushInputText] = useState(text);

  useEffect(() => {
    pushInputText(text);
  }, [text]);

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    fetch("/some-api", { method: form.method, body: formData });

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());

    pushInputText(formJson);
    //debugger;
    console.log("inputtex:", formJson);
  }

  return (
    <div>
      <form method="post" onSubmit={handleSubmit}>
        <textarea
          //onBlur={deactivateMode}
          name="postContent"
          defaultValue={text}
        ></textarea>
        <button type="submit">Save post</button>
      </form>
    </div>
  );
};

export default TextAreaContainer2;
