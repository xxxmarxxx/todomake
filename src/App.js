import React from "react";
import TodoContainer from "./components/ToDoContainer";
import "./App.scss";

function App() {

     return (
       <div className="App">
        <p style={{textAlign:"center", marginBottom: "20px", background: "red"}}>
          Hier kommt unsere ToDo hin (this text is from App.js). 
          </p>
        <TodoContainer text="Mein text kommt als property 2"/>
        
       </div>
       );
     }
 
export default App;
