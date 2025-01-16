import React from "react";

class TextAreaContainer extends React.Component {
  state = {
    //editMode: false,
    text: this.props.text,
  };

  updateLocalState = (newText) => {
    this.state.text = newText;
  };

  handleSubmit = (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    fetch("/some-api", { method: form.method, body: formData });

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    this.state.text = formJson;
    this.props.updateNewText(this.state.text);
    //debugger;
    console.log("inputtex:", formJson);
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate TextAreaContainer");
    this.props.getText();
    debugger;
    if (prevProps.text !== this.props.text) {
      //this.updateLocalState(this.props.text);
      //this.props.getText();
      //   this.setState({
      //     text: this.props.text,
      //   });
    }
  }
  componentDidMount() {
    console.log("componentDidMount TextAreaContainer");

    this.props.getText();
    //this.updateLocalState("");

    //debugger;
  }

  render() {
    return (
      <div>
        <button type="submit">Save post</button>
        <form method="post" onSubmit={this.handleSubmit}>
          <textarea
            //onBlur={deactivateMode}
            name="textName"
            defaultValue={this.state.text}
          ></textarea>
        </form>
      </div>
    );
  }
}

export default TextAreaContainer;
