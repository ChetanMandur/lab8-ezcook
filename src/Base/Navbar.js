import './css/Navbar.css'
import {Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1><span style={{color:'orange', fontWeight:'bold'}}>EZ</span>cook</h1>
            <div className="links">
                {/* <a href={"/cook"}>Cook</a>
                <a href={"/learn"}>Learn</a>
                <a href={"/create"}>Create</a> */}
                <Link to="/cook">Cook</Link>
                <Link to="/learn">Learn</Link>
                <Link to="/create">Create</Link>
            </div>
        </nav>
    );
}
 
export default Navbar