import './actions';

const initialState = { value: 0 }

function counterReducer( state=initialState, action){

    if(action.type === 'counter/increment'){
        return{
            ...state,
            value: state.value +1
        }
    }

    if(action.type === 'counter/decrement'){
        return {
            ...state,
            value: state.value -1 
        }
    }



    return state;
}

export default counterReducer;