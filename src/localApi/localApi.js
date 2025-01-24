// let tasks = [];

// const saveToLocalStorage = () => {
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// };

// const renderTask = () => {};

// if (localStorage.getItem("tasks")) {
//   tasks = JSON.parse(localStorage.getItem("tasks"));
// }

// tasks.forEach((task) => renderTask(task));

export const localApi = {
  apiText: "1 строчка\n2 строчка\n3 строчка\n4 строчка\n5 строчка\n",

  getAllText() {
    return this.apiText;
  },

  updateAllText(text) {
    //debugger;
    this.apiText = text;
    //console.log("text: ", text);
    //console.log("localApi.text: ", localApi.text);

    return 0;
  },
};
