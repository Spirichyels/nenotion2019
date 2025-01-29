import React from "react";
import TextArea from "../localApi/textArea/TextArea";
import Stroka from "./Stroka";
import ArrStrok from "./ArrStrok";

class TextAreaComponent2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { stroks: [...props.stroks] };
    //console.log(this.state.stroks);

    //this.stroks = props.stroks;

    // this.state = { text: props.text };
    // this.handleChange = this.handleChange.bind(this);
    // this.OnBlurSubmit = this.OnBlurSubmit.bind(this);
  }

  handleChange(event) {
    // let newText = event.currentTarget.value;
    // this.setState({ text: newText });
  }

  OnBlurSubmit(event) {
    // event.preventDefault();
    // this.props.updateNewText(this.state.text);
  }

  componentDidUpdate(prevProps, prevState) {
    // if (this.props.text !== prevProps.text) {
    //   this.props.getText();
    //   this.setState({
    //     text: this.props.text,
    //   });
    // }
  }

  render() {
    return (
      <div>
        {/* <TextArea
          text={this.state.text}
          OnBlurSubmit={this.OnBlurSubmit}
          handleChange={this.handleChange}
        ></TextArea> */}
        <ArrStrok stroks={this.state.stroks}></ArrStrok>

        {/* <Stroka
          text={this.state.text}
          OnBlurSubmit={this.OnBlurSubmit}
          handleChange={this.handleChange}
        ></Stroka> */}
      </div>
    );
  }
}

export default TextAreaComponent2;
