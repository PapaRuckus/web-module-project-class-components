import React from "react";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  state = {
    showAll: true,
  };

  toggleShowAll = (evt) => {
    this.setState({
      ...this.state,
      showAll: !this.state.showAll,
    });
  };

  render() {
    const { todos, toggleItem } = this.props;
    const filtered = todos.filter(
      (td) => !td.taskCompleted || this.state.showAll
    );
    return (
      <div>
        {filtered.map((todo) => (
          <Todo key={todo.id} todo={todo} toggleItem={toggleItem} />
        ))}
        <button onClick={this.toggleShowAll}>{this.state.showAll ? "Hide Completed" : "Show All"}</button>
      </div>
    );
  }
}
