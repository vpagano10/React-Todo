// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div className='todo-list'>
            {props.todos.map(todo => (
                <Todo key={todo.id} todo={todo} toggleCompleted={props.toggleCompleted} filterCompleted={props.filterCompleted} />
            ))}
            <button className='clear-btn' onClick={() => props.filterCompleted(props.todo.id)}>Clear Completed</button>
        </div>
    )
}

export default TodoList;