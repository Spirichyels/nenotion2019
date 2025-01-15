// let tasks = [];

// const saveToLocalStorage = () => {
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// };

// const renderTask = () => {};

// if (localStorage.getItem("tasks")) {
//   tasks = JSON.parse(localStorage.getItem("tasks"));
// }

// tasks.forEach((task) => renderTask(task));

let text = "start text";

export const localApi = {
  getAllText() {
    return text;
  },

  updateAllText(text) {
    this.text = text;
    return 0;
  },
};
