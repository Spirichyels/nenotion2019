import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import PageTest1 from "./PageTest/PageTest1";
import PageTest2 from "./PageTest/PageTest2";
import NavTest from "./PageTest/navTest";

import textAreaTest from "./PageTest/textAreaTest";
import { connect, Provider } from "react-redux";
import store from "./store/react-store";
import PageTest3 from "./PageTest/PageTest3";
import { updateNewText } from "./store/testReducers";
import { localApi } from "./localApi/localApi";

class App extends React.Component {
  render() {
    console.log("render App");
    //console.log(this.props.text);

    const onPlay = () => {
      console.log(localApi.getAllText());
    };

    return (
      <div>
        <div></div>
        <div className="app">Название</div>
        <div>
          <NavTest />
          <div>
            <button onClick={onPlay}>Play</button>
          </div>

          <PageTest3
            text={this.props.text}
            updateNewText={this.props.updateNewText}
          />
        </div>
        <div></div>
        <Route path="/page1" render={() => <PageTest1 />} />
        <Route path="/page2" render={() => <PageTest2 />} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    text: state.test.text,
    //newTextUpdate: state.test.newTextUpdate,
  };
};

const AppConnect = connect(mapStateToProps, { updateNewText })(App);

const AppWithRouter = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppConnect />
      </Provider>
    </BrowserRouter>
  );
};

export default AppWithRouter;
