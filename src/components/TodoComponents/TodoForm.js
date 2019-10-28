import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newTodo: ''
        };
    }

    handleChange = e => {
        this.setState({ newTodo: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({ newTodo: '' })
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='todo'>New Todo</label>
                <input 
                type='text' 
                name='todo' 
                id='todo' 
                value={this.state.newTodo}
                onChange={this.handleChange}
                />
                <button>Add Todo</button>
            </form>
        );
    }
}

export default TodoForm;