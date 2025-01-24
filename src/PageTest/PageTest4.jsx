import React from "react";

class PageTest4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Отправленное имя: " + this.state.value);
    //event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          name="sdf"
          id="001"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        ></textarea>

        <input type="submit" value="Отправить" />
      </form>
    );
  }
}

export default PageTest4;
