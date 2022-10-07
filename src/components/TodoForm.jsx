import React, { useRef, useContext } from 'react';
import { ADD_TODO, myContext } from '../App';

const TodoForm = () => {

    const { dispatch } = useContext(myContext);
    const newText = useRef();

    return (
        <div>
            <h2>Create your TODOs</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                dispatch(
                    {
                        type: ADD_TODO,
                        payload: {
                            text: newText.current.value
                        }
                    }
                );
                newText.current.value = '';
            }}>
                <input type='text' ref={newText}/>
                <button type='submit'>
                    Create Todo
                </button>
            </form>
        </div>
    );
}

export default TodoForm;
