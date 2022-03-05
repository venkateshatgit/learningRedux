import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);
    return (  
        <div className="counter">
            <h1>In Counter Component</h1>
            <h3>State: {count}</h3>
            <div className="buttons">
                <button onClick={() => setCount(count+1)}>+</button>    
                <button onClick={() => setCount(count-1)}>-</button>    
            </div>
        </div>
    );
}

export default Counter;