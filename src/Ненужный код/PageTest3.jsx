import React from "react";

class Profiletext extends React.Component {
  state = {
    editMode: false,
    text: this.props.text,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
      text: this.props.text,
    });
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    //debugger;
    this.props.updateNewText(this.state.text);
  };
 
  ontextChange = (e) => {
    this.setState({
      text: e.currentTarget.value,
    });
  };
  componentDidMount() {
    this.props.getText();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.text !== this.props.text) {
      this.setState({
        text: this.props.text,
      });
    }
  }
  render() {
    // console.log("1", this.props);
    // console.log("2", this.state);
    //console.log("render PageTest");
    return (
      <div>
        {!this.state.editMode === true ? (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              Ваш статус ={""}
              {!this.props.text ? "Тут ваш статус" : this.props.text}
            </span>
          </div>
        ) : (
          <div>
            <input
              onChange={this.ontextChange}
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              value={this.state.text}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Profiletext;
