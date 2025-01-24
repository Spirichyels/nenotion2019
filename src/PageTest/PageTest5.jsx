import React from "react";

class PageTest5 extends React.Component {
  constructor(props) {
    super(props);

    this.state = { text: props.text };

    this.handleChange = this.handleChange.bind(this);
    this.OnBlurSubmit = this.OnBlurSubmit.bind(this);
  }

  handleChange(event) {
    let newText = event.currentTarget.value;
    this.setState({ text: newText });
    //this.props.updateNewText(newText);
  }

  OnBlurSubmit(event) {
    //debugger;

    event.preventDefault();
    this.props.updateNewText(this.state.text);
    //alert("Отправленное имя: " + this.state.text);
    //debugger;
    //event.preventDefault();
    // const form = event.currentTarget;
    // const formData = new FormData(form);
    // //fetch("/", { method: form.method, body: formData });
    // const formJson = Object.fromEntries(formData.entries());
    //this.props.updateNewText(this.state.text);
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("componentDidUpdate TextAreaContainer");
    //this.props.getText();
    //debugger;

    // console.log("text2: ", this.state.text);
    if (this.props.text !== prevProps.text) {
      //debugger;
      this.props.getText();
      this.setState({
        text: this.props.text,
      });
      //   console.log("text3: ", this.state.text);
    }
  }

  render() {
    return (
      <form onBlur={this.OnBlurSubmit}>
        <textarea
          onChange={this.handleChange}
          value={this.state.text}
        ></textarea>
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}

export default PageTest5;
