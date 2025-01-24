import React from "react";
import TextArea from "./TextArea";
import { connect } from "react-redux";
import { getText, updateNewText } from "../../store/testReducers";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { compose } from "redux";
import PageTest5 from "../../PageTest/PageTest5";

function handleSubmit(e) {
  // Prevent the browser from reloading the page
  e.preventDefault();

  // Read the form data
  const form = e.target;
  const formData = new FormData(form);

  // You can pass formData as a fetch body directly:
  //fetch("/some-api", { method: form.method, body: formData });

  // Or you can work with it as a plain object:
  const formJson = Object.fromEntries(formData.entries());

  this.updateNewText(formJson);
  //debugger;
  console.log("inputtex:", formJson);
}

class TextAreaClass extends React.Component {
  componentDidMount() {
    this.props.getText();
  }
  render() {
    return (
      <div>
        <PageTest5
          text={this.props.text}
          getText={this.props.getText}
          updateNewText={this.props.updateNewText}
        ></PageTest5>
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
