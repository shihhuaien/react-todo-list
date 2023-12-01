import React, { Component } from "react";
import TodoListForm from "./TodoListForm";
import { v4 as uuidv4 } from 'uuid';
import Todo from "./Todo";
import "./TodoList.css"

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: [] };
        this.createTodo = this.createTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.completeTodo = this.completeTodo.bind(this);
    }

    createTodo(newTodo) {
        const todoItem = { id: uuidv4(), text: newTodo, completed: false };
        this.setState({ todos: [...this.state.todos, todoItem] });
    }

    removeTodo(id) {
        this.setState(prevState => ({
            todos: prevState.todos.filter(todo => todo.id !== id)
        }))
    }

    updateTodo(id, updateText) {
        const updateTodos = this.state.todos.map((todo) => {
            if (id === todo.id) {
                return { ...todo, text: updateText }
            }
            return todo
        });
        this.setState({ todos: updateTodos });
    }

    completeTodo(id) {
        const completedTodos = this.state.todos.map((todo) => {
            if (id === todo.id) {
                return { ...todo, completed: !todo.completed }
            }
            else {
                return todo
            }
        })
        this.setState({ todos: completedTodos })
    }

    render() {

        return (
            <div className="TodoList">
                <h1>
                    Get To Work! <span>An Animated Todo List Made With React Hooks.</span>
                </h1>                {this.state.todos.map((todo) => (
                    <div key={todo.id}>
                        <Todo
                            todo={todo}
                            removeTodo={this.removeTodo}
                            updateTodo={this.updateTodo}
                            completeTodo={this.completeTodo}
                        />
                    </div>
                ))}
                <TodoListForm createTodo={this.createTodo} />
            </div >
        )
    }
}

export default TodoList