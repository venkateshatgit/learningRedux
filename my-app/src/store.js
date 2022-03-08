import { createStore } from 'redux';
import counterReducer from './store/counterStore/reducer';


const store = createStore( counterReducer );

export default store;