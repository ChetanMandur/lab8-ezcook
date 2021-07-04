import './css/Navbar.css'
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1><span style={{color:'orange', fontWeight:'bold'}}>EZ</span>cook</h1>
            <div className="links">
                <a href="/cook">Cook</a>
                <a href="/learn">Learn</a>
                <a href="/create">Create</a>
            </div>
        </nav>
    );
}
 
export default Navbar