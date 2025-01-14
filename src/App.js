import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import PageTest1 from "./PageTest/PageTest1";
import PageTest2 from "./PageTest/PageTest2";
import NavTest from "./PageTest/navTest";
import store from "./store/store";
import textAreaTest from "./PageTest/textAreaTest";

class App extends React.Component {
  render() {
    console.log("render App");
    console.log(this.props.store);

    return (
      <div>
        <div></div>
        <div className="app">gfhgf</div>
        <div>
          <NavTest />
        </div>
        <div>
          <textAreaTest props={this.props.store}>sdfsd</textAreaTest>
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
      <App props={store} />
    </BrowserRouter>
  );
};

export default AppWithRouter;
