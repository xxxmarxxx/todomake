import React from "react";
import "./TodoItem.scss";

const TodoItem = (props) => {
  // const completedStyle = {
  //     fontStyle: "italic",
  //     color: "#d35e0f",
  //     opacity: 0.4,
  //     textDecoration: "line-through",
  // };

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={props.completed}
        onChange={() => props.handleChange(props.id)}
      ></input>

      {/* <span style={props.completed ? completedStyle : null}>{props.titel}</span> */}
      {/* Alternativ zu inline style css klasse verwenden*/}
      <span className={props.completed ? "completed-item" : null}>{props.titel}</span>

      <button
        onClick={() => {
          props.deleteTodoHandler(props.id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;

// class TodoItem extends React.Component {
//     render(){
//     return <li>{this.props.titel}</li>
//     }
// }
// export default TodoItem
