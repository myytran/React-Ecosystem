import React, { useState } from 'react';
import { connect }  from 'react-redux';
import { createTodo } from './actions';
import './NewTodoForm.css';


const NewTodoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div className="new-todo-form">
            <input
                className="new-todo-input"
                type="text"
                placeholder="Add Todo"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)} />
                onClick={() => {
                    const isDuplicate = todos.some(todo.text === text)
                        if (!isDuplicate) {
                            onCreatePressed(inputValue)
                            setInputValue('')
                        }
                }}
            <button className="new-todo-button">Create Todo</button>
        </div>
    );
};

const mapStateToProps = state => ({
    todos: state.todos,
})

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);