import { useParams } from "react-router-dom";
import recipeListJSON from '../data/recipes.json';
import PageNotFound from '../Base/PageNotFound';
import './css/SingleRecipePage.css'
import { Card, Col, Container, Row } from "react-bootstrap";

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
                    <Row>
                        <Col>
                            <Card className="bg-dark text-white">
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

                    <Row>
                        <Col>
                            <div className="singleRecipeSub">
                                <h1>Ingredients</h1>
                                <ul>
                                    {recipe.ing.map(
                                        current => ( <li>{current}</li> )
                                    )}

                                </ul>
                                
                            </div> 
                        </Col>
                        <Col>
                            <div className="singleRecipeSub">
                                <h1>Aditional Info</h1>
                                <ul>
                                    <li>Total Time: {recipe.timePrep + recipe.timeCook} min(s)</li>
                                    <ul>
                                        <li>Prep Time: {recipe.timePrep} min(s)</li>
                                        <li>Cook Time: {recipe.timeCook} min(s)</li>
                                    </ul>
                                    <li>Service Size: {recipe.servings}</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>

                    <br></br>

                    <Row>
                        <Col>
                            <div className="singleRecipeSubPrep">
                                <h1>Preperation</h1>
                                <ol>
                                    {recipe.prep.map(
                                        current => ( <li>{current}</li> )
                                    )}

                                </ol>
                            </div>
                        </Col>
                    </Row>
            </div>
        );
    }

    
}
 
export default SingleRecipePage;