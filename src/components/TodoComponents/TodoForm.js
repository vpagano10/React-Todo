import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
    width: 95%;
`;
const Button = styled.button`
    background-color: slategrey;
    border: 2px solid white;
    padding: 1%;
    margin: 0% 1% 0% 1%;
    width: 20%;
    &:hover {
        background-color: coral;
    }
`;
const Label = styled.label`
    margin: 0% 2% 0% 0%;
    font-weight: bold;
`;

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

    handleClear = e => {
        e.preventDefault();
        this.props.clearCompleted();
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Label htmlFor='todo'>New Todo</Label>
                <input 
                type='text' 
                name='todo' 
                id='todo' 
                value={this.state.newTodo}
                onChange={this.handleChange}
                />
                <Button onClick={this.handleSubmit} type='submit'>Add Todo</Button>
                <Button onClick={this.handleClear} type='submit'>Clear Todo</Button>
            </Form>
        );
    }
}

export default TodoForm;