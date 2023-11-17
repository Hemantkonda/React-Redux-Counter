import { createStore } from 'redux';

// actions
export const increment = () => {
    return {
      type: 'INCREMENT',
    };
  };
  
  export const decrement = () => {
    return {
      type: 'DECREMENT',
    };
  };

  export const reset = () => {
    return {
      type: 'RESET',
    };
  };

// reducers
const initialState = {
    count: 0,
  };
  
  const counterReducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT') {
      return {
        count: state.count + 1,
      };
    } else if (action.type === 'DECREMENT') {
      return {
        count: state.count - 1,
      } 
    } else if (action.type === 'RESET') {
        return {
          count: 0,
        }
    }
    else {
      return state;
    }
  };
  

// store
export const Store = createStore(counterReducer);


