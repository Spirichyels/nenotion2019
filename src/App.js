import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import PageTest1 from "./Ненужный код/PageTest1";
import PageTest2 from "./Ненужный код/PageTest2";
import NavTest from "./PageTest/navTest";

import { connect, Provider } from "react-redux";
import store from "./store/react-store";

import { getText, updateNewText } from "./store/testReducers";
import { localApi } from "./localApi/localApi";
import TextAreaContainer from "./localApi/textArea/TextAreaContainer";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("render App");
    //console.log(this.props.text);

    const onPlay = () => {
      console.log("api", localApi.getAllText());
      console.log("initialState", this.props.text);
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
          <div></div>
          <div>
            <TextAreaContainer></TextAreaContainer>
          </div>
          ---------------------------
          <div>{/* <TextAreaContainer2></TextAreaContainer2> */}</div>
        </div>
        <div></div>
        <Route path="/page1" render={() => <PageTest1 />} />
        <Route path="/page2" render={() => <PageTest2 />} />
      </div>
    );
  }

  componentDidMount() {
    console.log("apiText:", localApi.getAllText());
    console.log("initialState: ", this.props.text);
  }
}

const mapStateToProps = (state) => {
  return {
    text: state.test.text,
    //newTextUpdate: state.test.newTextUpdate,
  };
};

const AppConnect = connect(mapStateToProps, { updateNewText, getText })(App);

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
