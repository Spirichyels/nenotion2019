import React from "react";
import TextArea from "./TextArea";
import { connect } from "react-redux";
import { getText, updateNewText } from "../../store/testReducers";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { compose } from "redux";
import TextAreaComponent from "./TextAreaComponent";

class TextAreaClass extends React.Component {
  componentDidMount() {
    this.props.getText();
  }
  render() {
    return (
      <div>
        <TextAreaComponent
          text={this.props.text}
          getText={this.props.getText}
          updateNewText={this.props.updateNewText}
        ></TextAreaComponent>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    text: state.test.text,
    getText: state.test.getText,
    //newTextUpdate: state.test.newTextUpdate,
  };
};

const TextAreaContainer = compose(
  withRouter,
  connect(mapStateToProps, {
    updateNewText,
    getText,
  })
)(TextAreaClass);

export default TextAreaContainer;
