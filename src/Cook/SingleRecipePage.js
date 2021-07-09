import { useParams } from "react-router-dom";
import recipeListJSON from '../data/recipes.json';
import PageNotFound from '../Base/PageNotFound';
import './css/SingleRecipePage.css'

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
                <h1>{recipe.name}</h1>
                
                <h2>{recipe.desc}</h2>
            </div>
        );
    }

    
}
 
export default SingleRecipePage;