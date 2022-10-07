import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { DELETE_TODO, myContext, TOGGLE_TODO } from '../App';

const Todo = ({ completed, text, id }) => {

    const { dispatch } = useContext(myContext);

    return (
        <li
            onClick={ () => {
                dispatch(
                    {
                        type: TOGGLE_TODO,
                        payload: {
                            id: id 
                        }
                    }
                );
            } }
            style={
                {
                    textDecoration: completed ? 'line-through': 'none',
                    textDecorationColor: completed ? 'green' : 'none',
                    color: completed ? 'green' : 'white'
                }
        }>
            {id} - {text}
            <button onClick={ (event) => {
                event.stopPropagation();
                dispatch(
                    {
                        type: DELETE_TODO,
                        payload: {
                            id: id 
                        }
                    }
                );
            }}>
                Delete
            </button>
        </li>
    );
}

Todo.propTypes = {
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

export default Todo;