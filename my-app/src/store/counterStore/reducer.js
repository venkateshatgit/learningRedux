// import './actions';
import initialState from './state';
import * as actionType from './actionTypes';

function counterReducer( state=initialState,  action){

    if(action.type === actionType.INCREMENT){
        return{
            ...state,
            value: state.value + 1
        }
    }

    if(action.type === actionType.DECREMENT){
        return {
            ...state,
            value: state.value -1 
        }
    }

    console.log("Called");
    return state;
}

export default counterReducer;