import './css/Navbar.css'
import {MdHelpOutline} from "react-icons/md";

import recipeListJSON from '../data/recipes.json';
import learnListJSON from '../data/learn.json';

import PageNotFound from '../Base/PageNotFound';

import {useEffect} from 'react'
import { Modal, Button } from 'react-bootstrap';

import { useState } from 'react';


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
    var input = searchBar.value.toLowerCase();

    const recipe = recipeListJSON.find(
        (current) => current.name.toLowerCase() == input
    );

    const learn = learnListJSON.find(
        (current) => current.title.toLowerCase() == input
    );


    if (recipe == undefined && learn == undefined){
        searchBar.setAttribute("style", "animation: shake 0.5s;")
    }

    else{
        if (recipe != undefined){
            window.location.href= '#/cook/' + recipe.id;
            searchBar.value = "";
            colourChangeClick('cookNav');
        }
        if (learn != undefined){
            window.location.href= '#/learn/' + learn.id;
            searchBar.value = "";
            colourChangeClick('learnNav');
        }
        
    }

}

function HelpButton() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <div className="helpNav" onClick={handleShow}><MdHelpOutline/></div>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Help</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <b>Cook:</b>
              <br />
              In this section, you are able to browse all the available recipes. <br />
              Clicking one will bring you to a page where you can view the steps required to preparing the food.
              <br />
              <br />
              <b>Learn:</b>
              <br />
              In this section, you are able to browse all the available tutorials on the website. <br />
              Clicking one will bring you to the video page where you are able to watch the tutorial.
              <br />
              <br />
              <b>Create:</b>
              <br />
              In this section, you are able to create a recipe for <i>EZcook</i>! <br />
              After filling out all the required fields and submitting, your recipe will be sent for review by our staff. 
          </Modal.Body>
          <Modal.Footer>
            <div className="helpcloseButton" onClick={handleClose}>
                Close
            </div>
          </Modal.Footer>
        </Modal>
      </>
    );
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
                {/* <div className="helpNav"><MdHelpOutline/></div> */}
                <HelpButton/>
                <input className="searchNav" placeholder="Search..." type="text" name="" id="searchBar" />
            </div>
            
        </nav>
    );
}



 
export default Navbar
