import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    
    
    
    render() {
        const { title, id, completed } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p> 
                <input type="checkbox" checked={completed} onChange={this.props.markComplete.bind(this, id)} /> 
                {' '}
                <span>{title} </span>
                <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>

            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
  }

const btnStyle ={
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '1px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
    margin: '7px auto'
}
export default TodoItem