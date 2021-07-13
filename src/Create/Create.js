import './css/Create.css';
import { Col, Container, Row } from "react-bootstrap";

const Create = () => {
    return (  
        <div className="createMain">
            <br />
            <div className="newRecipeTitle">New Recipe</div>
                <div className="createSub">
                    <Row noGutters={true}>
                        <Col>
                            <Row>
                                <label>
                                    Name:
                                    <br />
                                    <input className="createName" type="text" width="80px" id="createName" name="name"></input>
                                </label>
                            </Row>

                            <Row>
                                <label>
                                    Ingredients:
                                    <br />
                                    <textarea className="createIngredients" rows="10" cols= "10"  id="createIngredients" name="ingredients"></textarea>
                                </label>
                            </Row>

                            <Row>
                                <label>
                                    Additional Information:
                                    <br />
                                    <textarea className="createAddInfo" rows="10" cols= "10" id="createAddInfo" name="addinfo"></textarea>
                                </label>
                            </Row>

                            
                        </Col>

                        <Col>
                            <label>
                                Preperation:
                                <br />
                                <textarea className="createPrep" rows="25" cols= "10" id="createPrep" name="preperation"></textarea>
                            </label>
                        </Col>
                    </Row>

                    <Row >
                        <input className="createSubmit" type="submit" value="Submit" />
                    </Row>
                </div>
            </div>
    );
}


export default Create;