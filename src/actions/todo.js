import axios from 'axios';
import {
    ADD_TODO_SUCCESS,
    ADD_TODO_FAILURE,
    ADD_TODO_STARTED,
    DELETE_TODO
} from './types';

export const addTodo = ({ title, userId }) => {
    return dispatch => {
        dispatch(addTodoStarted());

        axios
            .post(ENDPOINT, {
                title,
                userId,
                completed: false
            })
            .then(res => {
                throw new Error('NOT!');
                // dispatch(addTodoSuccess(res.data));
            })
            .catch(err => {
                dispatch(addTodoFailure(err.message));
            });
    };
};
const addTodoSuccess = todo => ({
    type: ADD_TODO_SUCCESS,
    payload: {
        ...todo
    }
});

const addTodoStarted = () => ({
    type: ADD_TODO_STARTED
});

const addTodoFailure = error => ({
    type: ADD_TODO_FAILURE,
    payload: {
        error
    }
});


//   export const addTodo = ({ title, userId }) => {
//     return dispatch => {
//       dispatch(addTodoStarted());

//       axios
//         .post(`https://jsonplaceholder.typicode.com/todos`, {
//           title,
//           userId,
//           completed: false
//         })
//         .then(res => {
//           dispatch(addTodoSuccess(res.data));
//         })
//         .catch(err => {
//           dispatch(addTodoFailure(err.message));
//         });
//     };
//   };

// export const addTodo = ({ title, userId }) => {
//     return dispatch => {
//       dispatch(addTodoStarted());

//       axios
//         .post(ENDPOINT, {
//           title,
//           userId,
//           completed: false
//         })
//         .then(res => {
//           setTimeout(() => {
//             dispatch(addTodoSuccess(res.data));
//           }, 2500);
//         })
//         .catch(err => {
//           dispatch(addTodoFailure(err.message));
//         });
//     };
//   };

// export const addTodo = ({ title, userId }) => {
//     return (dispatch, getState) => {
//       const { todos } = getState();
  
//       if (todos.length >= 4) return;
  
//       dispatch(addTodoStarted());
  
//       // ...
//     };
//   };