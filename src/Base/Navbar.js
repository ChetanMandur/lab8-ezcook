import './css/Navbar.css'
import {MdHelpOutline} from "react-icons/md";

import recipeListJSON from '../data/recipes.json';
import PageNotFound from '../Base/PageNotFound';

import {useEffect} from 'react'

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



function searchBar(){
    var searchBar = document.getElementById("searchBar");
    var input = searchBar.value;
    const recipe = recipeListJSON.find(
        (current) => current.name == input
    );


    if (recipe == undefined){
        searchBar.setAttribute("style", "animation: shake 0.5s;")
        searchBar.value = "";
    }

    else{
        window.location.href= '#/cook/' + recipe.id;
        searchBar.value = "";
        colourChangeClick('cookNav');

    }

}

const Navbar = () => {

    
    useEffect(() =>{
        document.getElementById('searchBar').addEventListener("keyup", function(event){
            event.preventDefault();
            if (event.key == 'Enter'){
                searchBar()
            }
        })

        document.getElementById('searchBar').addEventListener('animationend', () => {
            document.getElementById("searchBar").style.animation = null;
          });
    });
    
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
                <input className="searchNav" placeholder="Search..." type="text" name="" id="searchBar" />
            </div>
            
        </nav>
    );
}



 
export default Navbar
