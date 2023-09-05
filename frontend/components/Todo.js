import React from "react";

export default class Todo extends React.Component {
  render() {
    const { id, name, taskCompleted } = this.props.todo;
    const { toggleItem } = this.props;

    return (
      <div onClick={() => toggleItem(id)}>
        {name} {taskCompleted && "✓"}
      </div>
    );
  }
}
