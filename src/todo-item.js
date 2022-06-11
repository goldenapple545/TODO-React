import React from 'react';

// Функциональный компонент
const TodoItem = (props) => {
    const className = props.checked ? 'checked' : '';

    return(
        <li
            className={className}
            onClick={props.toggleTodo}
        >
            {props.name}
        </li>
    );
}

export default TodoItem;