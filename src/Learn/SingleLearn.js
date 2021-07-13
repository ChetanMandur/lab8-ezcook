import { useParams } from "react-router-dom";
import learnListJSON from '../data/learn.json';
import PageNotFound from '../Base/PageNotFound';
import './css/SingleLearn.css'
import { Card, Col, Container, Row } from "react-bootstrap";


const SingleLearn = () => {

    const {id} = useParams();
    
    const learn = learnListJSON.find(
        (current) => current.id == id
    )

    if (learn == undefined){
        return(
            <PageNotFound></PageNotFound>
        )

    }
    else{
        return (  
            <div className="SingleLearnMain">
                {learn.title}
                <iframe width="560" height="315" src={learn.url} 
                title={learn.title}
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>

            </div>
        );

    }
    
}
 
export default SingleLearn;