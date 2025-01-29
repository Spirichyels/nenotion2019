import React, { useRef, useState } from "react";

const MultiSelectInputs = () => {
  const [values, setValues] = useState(["Input 1", "Input 2", "Input 3"]);
  const fieldsRef = useRef([]);
  const isSelecting = useRef(false);
  const startIndex = useRef(null);

  // Обработчик начала выделения
  const handleMouseDown = (index) => {
    isSelecting.current = true;
    startIndex.current = index;
    window.getSelection().removeAllRanges(); // Сбрасываем текущее выделение
  };

  // Обработчик движения мыши
  const handleMouseMove = (index) => {
    if (isSelecting.current) {
      // Выделяем текст от startIndex до текущего index
      for (
        let i = Math.min(startIndex.current, index);
        i <= Math.max(startIndex.current, index);
        i++
      ) {
        const range = document.createRange();
        const selection = window.getSelection();
        range.selectNodeContents(fieldsRef.current[i]);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  };

  // Обработчик окончания выделения
  const handleMouseUp = () => {
    isSelecting.current = false;
  };

  // Обработчик изменения текста
  const handleInputChange = (index, e) => {
    const newValues = [...values];
    newValues[index] = e.target.textContent;
    setValues(newValues);
  };

  return (
    <div>
      {values.map((value, index) => (
        <div
          key={index}
          ref={(el) => (fieldsRef.current[index] = el)}
          contentEditable
          suppressContentEditableWarning
          onMouseDown={() => handleMouseDown(index)}
          onMouseMove={() => handleMouseMove(index)}
          onMouseUp={handleMouseUp}
          onInput={(e) => handleInputChange(index, e)}
          style={{
            border: "1px solid #ccc",
            margin: "5px",
            padding: "5px",
            userSelect: "text",
            whiteSpace: "pre-wrap", // Сохраняем пробелы и переносы строк
          }}
        >
          {value}
        </div>
      ))}
    </div>
  );
};

export default MultiSelectInputs;
