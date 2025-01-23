import React from "react";
import TextArea from "./TextArea";
import { connect } from "react-redux";
import { getText, updateNewText } from "../../store/testReducers";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { compose } from "redux";

function handleSubmit(e) {
  // Prevent the browser from reloading the page
  e.preventDefault();

  // Read the form data
  const form = e.target;
  const formData = new FormData(form);

  // You can pass formData as a fetch body directly:
  fetch("/some-api", { method: form.method, body: formData });

  // Or you can work with it as a plain object:
  const formJson = Object.fromEntries(formData.entries());

  //this.updateNewText(formJson);
  //debugger;
  console.log("inputtex:", formJson);
}

class TextAreaClass extends React.Component {
  state = {
    localText: this.props.text,
  };

  refreshText = () => {
    // console.log("localText:", this.state.localText);
    // console.log("this.props.text:", this.props.text);
    this.props.getText();
    this.setState({
      localText: this.props.text,
    });
    console.log("localText:", this.state.localText);
  };

  componentDidMount() {
    debugger;
    console.log("localText0: ", this.state.localText);
    this.refreshText();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate TextAreaContainer");

    debugger;
    console.log("localText2: ", this.state.localText);
    if (this.props.text !== prevProps.text) {
      this.refreshText();
    }
  }

  render() {
    return (
      <div>
        <form method="post" onSubmit={this.handleSubmit}>
          <textarea
            //onBlur={deactivateMode}
            //onChange={this.onChange}
            name="postContent"
            defaultValue={this.state.localText}
          ></textarea>
        </form>
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

const TextAreaContainer = compose(
  withRouter,
  connect(mapStateToProps, {
    updateNewText,
    getText,
  })
)(TextAreaClass);

export default TextAreaContainer;
