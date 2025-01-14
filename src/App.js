import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Route,
  render,
} from "react-router-dom/cjs/react-router-dom.min";
import PageTest1 from "./PageTest/PageTest1";
import PageTest2 from "./PageTest/PageTest2";
import NavTest from "./PageTest/navTest";

class App extends React.Component {
  render() {
    console.log("render App");
    return (
      <div>
        <div></div>
        <div className="app">gfhgf</div>
        <div>
          <NavTest />
        </div>
        <Route path="/page1" render={() => <PageTest1 />} />
        <Route path="/page2" render={() => <PageTest2 />} />
      </div>
    );
  }
}

const AppWithRouter = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default AppWithRouter;
