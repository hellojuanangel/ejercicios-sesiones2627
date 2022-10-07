import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({todos}) => {

    return (
        <div>
            <h1>Your TODOs</h1>
            <ul>
                {todos.map((todo, index) =>
                    (
                        <Todo 
                            key={index}
                            {...todo} // id, text, completed
                        />
                    )
                )}
            </ul>
            
        </div>
    );
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.number.isRequired,
                text: PropTypes.string.isRequired,
                completed: PropTypes.bool.isRequired
            }
        ).isRequired
    ).isRequired,
}

export default TodoList;