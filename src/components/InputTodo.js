import React, { Component } from "react";

class InputTodo extends Component {

    state = {
        title: "",
        correctLength: true
    };

    onChangeHandler = (e) => {
        //console.log('Input change', e.target);
        this.setState({
            title: e.target.value  //toUpperCase albo (+ " |"
        })
}

    onSubmitHandler = (e) => {
        e.preventDefault();
        //console.log(this.state.title);
        // correct length
        if(this.state.title.length > 3 && this.state.title.length < 25 ) {

            this.props.addTodoItem(this.state.title);

                // clear title the
            this.setState({
                title: "",
                correctLength: true
            });

        } else{ // incorrect length
            this.setState({
                title: "",
                correctLength: false
            });
        }
    }

    render() {

        return (
            <form action="" onSubmit={this.onSubmitHandler} className="form">
                <input 
                className="input-text"
                type="text" 
                placeholder="Todo..." 
                value={ this.state.title } 
                onChange={ this.onChangeHandler }
                
                />
                <input type="submit" value="hinzufügen" className="input-submit"/>
                {this.state.correctLength ? 
                    null  : 
                    <p>Dein todo muss 3 und 25 zeichen lang sein!</p>
                }

            </form>
        );
    }
}

export default InputTodo;