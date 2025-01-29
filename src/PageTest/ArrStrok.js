import React, { useState } from "react";

const ArrStrok = (props) => {
  const [values, setValues] = useState(props.stroks);

  //console.log(values);
  //console.log(props.stroks);

  const handleInput = (index, event) => {
    console.log(index);
    debugger;
    const newValues = [...values];
    //newValues[index].text = event.target.innerText;

    setValues(newValues);
  };

  let handleChange = (event) => {
    debugger;
    let newText = event.currentTarget.value;
    //this.setState({ text: newText });
  };
  handleChange = handleChange.bind(this);

  const OnBlurSubmit = (index, event) => {
    console.log(index, event);
    event.preventDefault();
    props.updateNewText(values);
  };

  return (
    <div
      role="textbox"
      style={{
        display: "block",
        margin: "10px",
        padding: "10px",
        border: "1px solid black",
        minHeight: "60px",
        userSelect: "text",
      }}
    >
      {values.map((item, index) => (
        <div
          key={index}
          onClick={handleChange}
          style={{
            color: item.color,
            whiteSpace: "pre-line",
            cursor: "pointer",
          }}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
};

export default ArrStrok;
