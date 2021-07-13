import './css/Navbar.css'
import {MdHelpOutline} from "react-icons/md";

export function colourChangeClick(id) {
    document.getElementById(id).style.backgroundColor = "white";
    const navButtonIDList = ["cookNav", "learnNav", "createNav"];
    for (let currentID of navButtonIDList){
        document.getElementById(currentID).style.color = "black";
    }
    document.getElementById(id).style.color = "orange";
    
}

function colourChangeHover(id){
    var currentColor = document.getElementById(id).style.color;
    if (currentColor !== "orange"){
        document.getElementById(id).style.backgroundColor = "orange";
    }

}

function colourChangeOff(id){
    document.getElementById(id).style.backgroundColor = "white";  
}

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1><span style={{color:'orange', fontWeight:'bold'}}>EZ</span>cook</h1>
            <div className="links">

                <a href="#/cook" id="cookNav" style={{color:"orange"}} 
                    onClick={(e) => colourChangeClick(e.target.id)}
                    onMouseOver={(e) => colourChangeHover(e.target.id)}
                    onMouseOut={(e) => colourChangeOff(e.target.id) }
                    >Cook</a>

                <a href="#/learn" id="learnNav" 
                    onClick={(e) => colourChangeClick(e.target.id)}
                    onMouseOver={(e) => colourChangeHover(e.target.id)}
                    onMouseOut={(e) => colourChangeOff(e.target.id)}
                >Learn</a>

                <a href="#/create" id="createNav" 
                    onClick={(e) => colourChangeClick(e.target.id)}
                    onMouseOver={(e) => colourChangeHover(e.target.id)}
                    onMouseOut={(e) => colourChangeOff(e.target.id)}
                >Create</a>
            </div>

            <div className="extra">
                <div className="helpNav"><MdHelpOutline/></div>
                <input className="searchNav" placeholder="Search..." type="text" name="" id="" />
            </div>
            
        </nav>
    );
}
 
export default Navbar
