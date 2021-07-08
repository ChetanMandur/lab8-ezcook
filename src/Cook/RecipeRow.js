import './css/RecipeRow.css'
import recipeListJSON from '../data/recipes.json'

import { CardDeck,Card } from 'react-bootstrap';

const RecipeRow = (props) => {
    const name = props.name;
    const filterType = props.filterType
    return (  
        <div className="recipeRowMain">
            <h2>{name}</h2>
            <CardDeck>
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
                    <Card key={recipe.id} style={{ width: '16rem' }} >
                        <Card.Img variant="top" src={  process.env.PUBLIC_URL+"/"+recipe.image} style={{ width: '11rem', height:'11rem' }} />
                        <Card.Body>
                            <Card.Title>{recipe.name}</Card.Title>
                            <Card.Text>
                                {recipe.desc}
                            </Card.Text>
                        </Card.Body>
                    </Card>

                ))}
            </CardDeck>

        </div>
    );
}
 
export default RecipeRow;