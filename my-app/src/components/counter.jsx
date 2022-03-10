import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/counterStore/reducer";



function Counter() {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    
    return (  
        <div className="counter">
            <h1>In Counter Component</h1>
            <h3>State: {count}</h3>
            <div className="buttons">
                <button onClick={() => dispatch(increment())}>+</button>    
                <button onClick={() => dispatch(decrement())}>-</button>    
            </div>
        </div>
    );
}

export default Counter;