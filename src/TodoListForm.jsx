import React, { Component } from "react";
import "./TodoListForm.css"

class TodoListForm extends Component {
    constructor(props) {
        super(props);
        this.state = { todo: "" };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(evt) {
        this.setState({ todo: evt.target.value })
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.createTodo(this.state.todo);
        this.setState({ todo: "" });
    }

    render() {
        return (
            <div>
                <form className='NewTodoForm' action="" onSubmit={this.handleSubmit}>
                    <label htmlFor="todo"></label>
                    <input
                        onChange={this.handleChange}
                        id="todo"
                        type="text"
                        placeholder="New Todo"
                        value={this.state.todo} />
                    <button>add</button>
                </form>
            </div>
        )
    }
}


export default TodoListForm
