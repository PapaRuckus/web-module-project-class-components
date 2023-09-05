import React from "react";
import TodoList from "./TodoList";
import Form from "./Form";

let id = 0;
const getId = () => ++id;

const todoList = [
  {
    name: "Walk the dog",
    id: getId(),
    taskCompleted: false,
  },
  {
    name: "Cook Dinner",
    id: getId(),
    taskCompleted: true,
  },
  {
    name: "Do the Dishes",
    id: getId(),
    taskCompleted: false,
  },
];

export default class App extends React.Component {
  state = {
    todos: todoList,
  };

  constructor() {
    super();
    this.setState = {
      todoList: todoList,
    };
  }

  addTodo = (e, todo) => {
    e.preventDefault();
    const newTodo = {
      name: todo,
      id: getId(),
      taskCompleted: false,
    };
    this.setState({
      ...this.state,
      todoList: [...this.state.todoList, newTodo],
    });
  };

  toggleItem = (id) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map((td) => {
        if (id == td.id) return { ...td, taskCompleted: !td.taskCompleted };
        return td;
      }),
    });
  };

  render() {
    return (
      <div>
        {/* Todo App */}
        <TodoList todos={this.state.todos} toggleItem={this.toggleItem} />
        <Form />
      </div>
    );
  }
}
