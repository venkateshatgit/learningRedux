import { useSelector } from "react-redux";

function Header() {
    const count = useSelector(state => state.counter.value)
    return (  
        <div className="header">
            <h1>In Header Component State: {count}</h1>    
        </div>
    );
}

export default Header;