import './css/RecipeRow.css'
import recipeListJSON from '../data/recipes.json'

import { CardDeck,Card } from 'react-bootstrap';

const RecipeRow = (props) => {
    const name = props.name;
    const filterType = props.filterType
    return (  
        <div className="recipeRowMain">
            <div className="rowName">{name}</div>
            <div className="recipeRowSub">
                {recipeListJSON.filter(
                    function (recipe){
                        if (filterType === "trending"){
                            return recipe.trending;
                        }
                        else if (filterType === "favourite"){
                            return recipe.favourite;
                        }
                        else{
                            return recipe;
                        }
                    }

                ).map( (recipe) =>(
                    <div className="singleRecipe">
                        <Card key={recipe.id} style={{ width: '16 rem' }} >
                            <Card.Img variant="top" src={  process.env.PUBLIC_URL+"/"+recipe.image} style={{ width: '20rem', height:'15rem' }} />
                            <Card.Body>
                                <Card.Title>{recipe.name}</Card.Title>
                                <Card.Text>
                                    {recipe.desc}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>

        </div>
    );
}
 
export default RecipeRow;