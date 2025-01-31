import React, { useMemo, useState } from "react";
import { Slate, Editable, withReact } from "slate-react";
import { createEditor } from "slate";

const App4 = () => {
  return (
    <div
      style={{
        userSelect: "all",
      }}
    >
      <input
        style={{
          userSelect: "all",
        }}
        defaultValue={"Input 1"}
      ></input>
      <input
        style={{
          userSelect: "text",
        }}
        defaultValue={"Input 1"}
      ></input>
      <input
        style={{
          userSelect: "all",
        }}
        defaultValue={"Input 1"}
      ></input>
    </div>
  );
};

export default App4;
