import React from "react";
import Header from "./Header";
import TodoItem from "./TodoItem/TodoItem";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

// class component
class TodoContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    console.log("komponenten ist fertig (comopnent DIDMount)");
    axios
      .get("https://jsonplaceholder.typicode.com/todos", {
        params: { _limit: 15 },
      })
      .then((response) => {
        console.log(response.data);
        this.setState({
          todos: response.data,
        });
      });
    // Aufgabe
    // füge die Todo von jsonplaceholder deinem state hinzu
  }

  componentDidUpdate() {
    console.log("component did update");
  }
  onChangeCheckbox = (id) => {
    const updatedTodosArr = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    // console.log(updatedTodosArr);
    this.setState({
      todos: updatedTodosArr,
    });
  };

  deleteTodoHandler = (id) => {
    //console.log("delete item:", id);

    const updatedTodosArr = this.state.todos.filter((todo) => todo.id !== id);
    //console.log(updatedTodosArr); // ziel: array ohne das gelöschte Element
    // update state
    this.setState({
      todos: updatedTodosArr,
    });
  };

  addTodoItem = (title) => {
    console.log("add:", title);
    // füge neuses toDo Item dem state hinzu
    // drei Werte: id, title, completed
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    // copy array from state updateTodosArr
    const updatedTodoArr = [...this.state.todos];
    // add new todo Item to updatedTodosArr
    updatedTodoArr.unshift(newTodo);

    // update state with updatedTodosArr
    this.setState({
      todos: updatedTodoArr,
    });

    console.log(updatedTodoArr);
  };

  render() {
    console.log("Komponente render wird aufgerufen");
    return (
      <div className="container">
        <Header />
        <InputTodo addTodoItem={this.addTodoItem} />
        <ul>
          {this.state.todos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              titel={todo.title}
              completed={todo.completed}
              handleChange={this.onChangeCheckbox}
              deleteTodoHandler={this.deleteTodoHandler}
            />
          ))}
        </ul>

       
      </div>
    );
  }
}

// functional component
// const TodoContainerFunction = () => {
//     return (
//         <div>
//             <h1>Hi, ich bin der TodoContainer!</h1>
//             <p>Icke bin eine React Component</p>
//         </div>);
// };
export default TodoContainer;
