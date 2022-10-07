import React, { useContext } from 'react';
import { myContext, SET_VISIBILITY_FILTER } from '../App';

const FilterOptions = () => {

    const { state, dispatch } = useContext(myContext);

    return (
        <div>

            <span>
                {
                    state.filter === 'SHOW_ALL'
                    ?
                    (<span>ALL</span>)
                    :
                    (
                        <button onClick={ () => {
                            dispatch(
                                {
                                    type: SET_VISIBILITY_FILTER,
                                    payload: {
                                        filter: 'SHOW_ALL'
                                    }
                                }
                            );
                        }}>
                            ALL
                        </button>
                    )
                }
            </span>

            <span>
                {
                    state.filter === 'SHOW_ACTIVE'
                    ?
                    (<span>ACTIVE</span>)
                    :
                    (
                        <button onClick={ () => {
                            dispatch(
                                {
                                    type: SET_VISIBILITY_FILTER,
                                    payload: {
                                        filter: 'SHOW_ACTIVE'
                                    }
                                }
                            );
                        }}>
                            ACTIVE
                        </button>
                    )
                }
            </span>

            <span>
                {
                    state.filter === 'SHOW_COMPLETED'
                    ?
                    (<span>COMPLETED</span>)
                    :
                    (
                        <button onClick={ () => {
                            dispatch(
                                {
                                    type: SET_VISIBILITY_FILTER,
                                    payload: {
                                        filter: 'SHOW_COMPLETED'
                                    }
                                }
                            );
                        }}>
                            COMPLETED
                        </button>
                    )
                }
            </span>

        </div>
    );
}

export default FilterOptions;
