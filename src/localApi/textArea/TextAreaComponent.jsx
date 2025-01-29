import React from "react";
import TextArea from "./TextArea";
import Stroka from "../../PageTest/Stroka";
import ArrStrok from "../../PageTest/ArrStrok";

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
  }

  OnBlurSubmit(event) {
    event.preventDefault();
    this.props.updateNewText(this.state.text);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.text !== prevProps.text) {
      this.props.getText();
      this.setState({
        text: this.props.text,
      });
    }
  }

  render() {
    return (
      <div>
        {/* <TextArea
          text={this.state.text}
          OnBlurSubmit={this.OnBlurSubmit}
          handleChange={this.handleChange}
        ></TextArea> */}
        {/* <ArrStrok></ArrStrok> */}

        {/* <Stroka
          text={this.state.text}
          OnBlurSubmit={this.OnBlurSubmit}
          handleChange={this.handleChange}
        ></Stroka> */}
      </div>
    );
  }
}

export default PageTest5;
