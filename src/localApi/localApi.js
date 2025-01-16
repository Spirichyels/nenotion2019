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
  text: "Текст из initialStateasd\nasdasdasd\nasdasdasd\nasdasdasd\nasdassssssasd\n",

  getAllText() {
    return this.text;
  },

  updateAllText(text) {
    //debugger;
    this.text = text;
    //console.log("text: ", text);
    //console.log("localApi.text: ", localApi.text);

    return 0;
  },
};
