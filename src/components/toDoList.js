import React, { Component } from "react";
import { TodoForm } from "./TodoForm";
import Todo from "./Todo";
import { Button } from "bootstrap";

export class Todolist extends Component {
  state = {
    todos: [],
    toDoToShow: "all",
  };

  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos],
    });
  };

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            id: todo.id,
            text: todo.text,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    });
  };

  updateToDoToShow = (s) => {
    this.setState({
      toDoToShow: s,
    });
  };

  handleDeleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id != id),
    });
  };

  render() {
    let todos = [];

    if (this.state.toDoToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.toDoToShow === "active") {
      todos = this.state.todos.filter((todo) => !todo.complete);
    } else if (this.state.toDoToShow === "complete") {
      todos = this.state.todos.filter((todo) => todo.complete);
    }

    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {/* {JSON.stringify(this.state.todos)} */}
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            toggleComplete={() => this.toggleComplete(todo.id)}
            onDelete={() => this.handleDeleteTodo(todo.id)}
            todo={todo}
          />
        ))}
        <div>
          todo left: {this.state.todos.filter((x) => !x.complete).length}
        </div>
        <div>
          <button onClick={() => this.updateToDoToShow("all")}>all</button>
          <button onClick={() => this.updateToDoToShow("active")}>
            active
          </button>
          <button onClick={() => this.updateToDoToShow("complete")}>
            complete
          </button>
        </div>
      </div>
    );
  }
}
