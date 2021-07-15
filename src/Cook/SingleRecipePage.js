import { useParams } from "react-router-dom";
import recipeListJSON from '../data/recipes.json';
import PageNotFound from '../Base/PageNotFound';
import './css/SingleRecipePage.css'
import { Card, Col, Container, Row } from "react-bootstrap";

import {ImSpoonKnife, ImList2, ImClock} from "react-icons/im";

const SingleRecipePage = () => {
    const {id} = useParams();
    
    const recipe = recipeListJSON.find(
        (current) => current.id == id
    )

    if (recipe == undefined){
        return(
            <PageNotFound></PageNotFound>
        )

    }

    else{
        return ( 
            <div className="singleRecipeBase">
                    <Row noGutters={true}>
                        <Col>
                            <Card className="bg-white text-white">
                                <Card.Img src={  process.env.PUBLIC_URL+"/"+recipe.image} alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Title><h1>{recipe.name}</h1></Card.Title>
                                    <Card.Text>
                                    <h4>{recipe.desc}</h4>
                                    </Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                    </Row>

                    <br>
                    </br>

                    <Row noGutters={true}>
                        <Col>
                            <div className="singleRecipeSub">
                                <h1><ImList2/>Ingredients</h1>
                                <ul>
                                    {recipe.ing.map(
                                        current => ( <li>{current}</li> )
                                    )}

                                </ul>
                                
                            </div> 
                        </Col>
                        <Col>
                            <div className="singleRecipeSub">
                                <h1><ImClock/> Aditional Info</h1>
                                <ul>
                                    <li><b>Total Time:</b> {recipe.timePrep + recipe.timeCook} min(s)</li>
                                    <ul>
                                        <li>Prep Time: {recipe.timePrep} min(s)</li>
                                        <li>Cook Time: {recipe.timeCook} min(s)</li>
                                    </ul>
                                    <li><b>Service Size:</b> {recipe.servings}</li>
                                    <li><b>Difficulty:</b> {recipe.diff} </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>

                    <br></br>

                    <Row noGutters={true}>
                        <Col>
                            <div className="prepBorder">
                                <div className="singleRecipeSub">
                                    <h1><ImSpoonKnife/>Steps</h1>
                                    <ol>
                                        {recipe.steps.map(
                                            current => ( <li>{current}</li> )
                                        )}

                                    </ol>
                                </div>
                            </div>
                        </Col>
                    </Row>
            </div>
        );
    }

    
}
 
export default SingleRecipePage;