import React, { useState } from "react";

const ArrStrok = (props) => {
  const [values, setValues] = useState(props.stroks);

  const [divE, setDivE] = useState(null);

  const OnBlurSubmit = (event) => {
    //let x = event.currentTarget.children[divE].innerHTML;

    let newArr = [];
    values.map((item, index) => {
      item !== event.currentTarget.children[index].innerHTML
        ? //? newArr.push(event.currentTarget.children[index].innerHTML)
          (item.text = event.currentTarget.children[index].innerHTML)
        : (item.text = item.text);
    });
  };

  //   const OnBlurSubmit = (event) => {
  //     let x = event.currentTarget.children[divE].innerHTML;
  //     if (x !== values[divE].text) {
  //       values[divE].text = x;
  //       console.log(values);
  //     }
  //   };

  const onClickDiv = (event) => {
    setDivE(event.currentTarget.accessKey);
  };

  return (
    <div
      contentEditable="true"
      onBlur={OnBlurSubmit}
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
          onClick={onClickDiv}
          style={{
            color: item.color,
            whiteSpace: "pre-line",
            cursor: "pointer",
          }}
          accessKey={index}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
};

export default ArrStrok;
