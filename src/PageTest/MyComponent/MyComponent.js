import { HotKeys, configure } from "react-hotkeys";
import React, { Component } from "react";
import { ReactDOM } from "react-dom";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: true,
    };
    configure({
      ignoreTags: ["HotKeys"],
    });

    this.keyMap = {
      TEST: "Control+s",
    };

    this.handlers = {
      TEST: (e) => {
        e.preventDefault();
        this.setEditing();
      },
    };
  }

  setEditing = () => {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  };

  render() {
    return (
      <HotKeys keyMap={this.keyMap} autoFocus={true} handlers={this.handlers}>
        <span>My HotKeys are effective here</span>
        <br />
        <b>isEditing: {this.state.isEditing.toString()}</b>
        <br />

        {this.props.children}
      </HotKeys>
    );
  }
}

export default MyComponent;
