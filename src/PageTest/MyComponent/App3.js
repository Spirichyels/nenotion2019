import React, { useMemo, useState } from "react";
import { Slate, Editable, withReact } from "slate-react";
import { createEditor } from "slate";

const MultiSelectInputs = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "Input 1" }],
    },
    {
      type: "paragraph",
      children: [{ text: "Input 2" }],
    },
    {
      type: "paragraph",
      children: [{ text: "Input 3" }],
    },
  ]);

  return (
    <Slate
      editor={editor}
      initialValue={value}
      onChange={(newValue) => setValue(newValue)}
    >
      <Editable
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          userSelect: "all",
        }}
        renderElement={({ attributes, children, element }) => (
          <div {...attributes} style={{ marginBottom: "10px" }}>
            {children}
          </div>
        )}
      />
    </Slate>
  );
};

export default MultiSelectInputs;
