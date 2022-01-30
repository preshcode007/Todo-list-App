import React, { Component } from "react";
import "./App.css";
import { Todolist } from "./components/toDoList";
import { TodoForm } from "./components/TodoForm";

class App extends Component {
  render() {
    return (
      <div
        className="maincontainer"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Todolist />
      </div>
    );
  }
}

export default App;
