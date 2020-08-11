import React from "react";
import Header from "./Header";
import TodoItem from "./TodoItem/TodoItem";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from 'uuid';


// class component
class TodoContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      title: "",
      completed: false,

      todos: [
        {
          id: uuidv4(),
          title: "react lernen",
          completed: false,
        },
        {
          id: uuidv4(),
          title: "javaScript auffrischen(Klassen, usw.)",
          completed: false,
        },
        {
          id: uuidv4(),
          title: "ajajajaj(Klassen, usw.)",
          completed: false,
        },
        {
          id: uuidv4(),
          title: "Hallo world",
          completed: false,
        },
        {
          id: uuidv4(),
          title: '"Hallo apollo 18"',
          completed: false,
        },
      ],
    };
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




  addTodo = (e) => {
    // console.log(e.target.value);
    // console.log("hallo e");
    this.setState({ title: e.target.value });
    
  };

  submitTodo = (e) => {
    // console.log(e);
    // console.log("gaelus e");
    e.preventDefault();
    const currentTodo = {
      id: `1 ${Date.now()}`,
      title: this.state.title,
      completed: false,
    };
    const todoState = this.state.todos;
    todoState.push(currentTodo)
    this.setState({
      id: "",
      title: "",
      todos: todoState,
    })
  };

  addTodoItem = (title) => {
    console.log('add:', title);
    // füge neuses toDo Item dem state hinzu
    // drei Werte: id, title, completed
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    }
    // copy array from state updateTodosArr
    const updatedTodoArr = [...this.state.todos];
    // add new todo Item to updatedTodosArr
    updatedTodoArr.unshift(newTodo)

    // update state with updatedTodosArr
     this.setState({
       todos: updatedTodoArr
     });
    
    console.log(updatedTodoArr);

  }

  render() {
    return (
      <div className="container">
        <Header />
        <InputTodo addTodoItem = {this.addTodoItem}/>
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

        <form action="#">
          <label htmlFor="#">Add Todo</label>
          <input type="text" value={this.state.title} onChange={this.addTodo} />
          <button onClick={this.submitTodo}>Submit</button>
        </form>
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
