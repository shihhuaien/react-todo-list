import React, { Component } from "react";
import "./todo.css"

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { isEdit: false, task: this.props.todo.text };
        this.toggleForm = this.toggleForm.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCompleted = this.handleCompleted.bind(this);
    }

    toggleForm() {
        this.setState({ isEdit: !this.state.isEdit })
        console.log(this.state.isEdit)
    }
    handleUpdate(evt) {
        evt.preventDefault();
        this.props.updateTodo(this.props.todo.id, this.state.task);
        this.setState({ isEdit: !this.state.isEdit });
    }

    handleChange(evt) {
        this.setState({ task: evt.target.value })
    }

    handleCompleted() {
        this.props.completeTodo(this.props.todo.id)
        //change parent's state{completed:!}
    }

    render() {
        let result;
        if (this.state.isEdit) {
            result = (
                <div className="Todo" key={this.props.todo.id}>
                    <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
                        <input onChange={this.handleChange} type="text" value={this.state.task} />
                        <button>完成</button>
                    </form>
                </div>)
        }
        else {
            result = (
                <div className="Todo" key={this.props.todo.id}>
                    <div onClick={this.handleCompleted} type="text" className={this.props.todo.completed ? "Todo-task completed" : "Todo-task"}>
                        {this.props.todo.text}
                    </div>
                    <div className="Todo-buttons">
                        <button
                            onClick={() => this.props.removeTodo(this.props.todo.id)}>
                            <i className='fas fa-trash' />
                        </button>
                        <button
                            onClick={this.toggleForm}>
                            <i className='fas fa-pen' />
                        </button>
                    </div>
                </div>)
        }
        return result
    }
}

export default Todo