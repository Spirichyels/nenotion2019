import React from "react";
import TextArea from "../localApi/textArea/TextArea";
import { connect } from "react-redux";
import { getText, updateNewText } from "../store/testReducers";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { compose } from "redux";
import TextAreaComponent2 from "./TextAreaComponent2";

class TextAreaClass2 extends React.Component {
  componentDidMount() {
    this.props.getText();
  }
  render() {
    return (
      <div>
        <TextAreaComponent2
          stroks={this.props.stroks}
          //   getText={this.props.getText}
          //   updateNewText={this.props.updateNewText}
        ></TextAreaComponent2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stroks: state.test.stroks,
    getText: state.test.getText,
    //newTextUpdate: state.test.newTextUpdate,
  };
};

const TextAreaContainer2 = compose(
  withRouter,
  connect(mapStateToProps, {
    updateNewText,
    getText,
  })
)(TextAreaClass2);

export default TextAreaContainer2;
