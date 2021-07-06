import './css/Navbar.css'
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1><span style={{color:'orange', fontWeight:'bold'}}>EZ</span>cook</h1>
            <div className="links">
                <a href={process.env.PUBLIC_URL + "/cook"}>Cook</a>
                <a href={process.env.PUBLIC_URL + "/learn"}>Learn</a>
                <a href={process.env.PUBLIC_URL + "/create"}>Create</a>
            </div>
        </nav>
    );
}
 
export default Navbar