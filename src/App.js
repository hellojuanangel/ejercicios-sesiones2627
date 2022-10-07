import React, { useReducer } from 'react';
import './App.css';
import FilterOptions from './components/FilterOptions';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const myContext = React.createContext(null);

const filterTodos = (todos, filter) => {

  switch (filter) {
      case 'SHOW_ALL':
          return todos;
      case 'SHOW_ACTIVE':
          return todos.filter((todo) => !todo.completed);
      case 'SHOW_COMPLETED':
          return todos.filter((todo) => todo.completed);
      default:
          return todos;
  }

}

function App() {

  const initialState = {
    todos: [],
    filter: 'SHOW_ALL',
    nextTodoID: 0
  }

  const reducer = (state, action) => {

    switch (action.type) {
        case ADD_TODO:
          return {
              filter: state.filter,
              todos: [
                ...state.todos,
                {
                  id: state.nextTodoID + 1,
                  text: action.payload.text,
                  completed: false
                }
              ],
              nextTodoID: state.nextTodoID + 1
          }
        case TOGGLE_TODO:
          return {
              ...state,
              todos: state.todos.map((todo) => 
                (todo.id === action.payload.id)
                ?
                {
                    ...todo,
                    completed: !todo.completed
                }
                :
                todo
              )
          }
        case DELETE_TODO:
          return {
              ...state,
              todos: state.todos.filter( (todo) => todo.id !== action.payload.id)
          }
        case SET_VISIBILITY_FILTER:
          return {
              ...state,
              filter: action.payload.filter
          }
        default:
            return state;
    }

  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <header className="App-header">

        <h1>EJERCICIOS SESIONES 26 Y 27</h1>

        <myContext.Provider value={ {state, dispatch} }>
          <TodoList todos={ filterTodos(state.todos, state.filter) }></TodoList>
          <TodoForm></TodoForm>
          <FilterOptions></FilterOptions>
        </myContext.Provider>

      </header>
    </div>
  );
}

export default App;
