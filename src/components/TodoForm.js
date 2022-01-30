import React, { Component } from "react";
import shortid from "shortid";

export class TodoForm extends Component {
  state = {
    text: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // so it does not refresh

    // this onSubmit function is our addTodo which is going to take 3 props..
    this.props.onSubmit({
      // id: shortid.generate(),
      text: this.state.text,
      complete: false,
    });
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="I have to get this done"
        />

        <button onClick={this.handleSubmit}>Add Todos</button>
      </form>
    );
  }
}
