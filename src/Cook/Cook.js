import RecipeRow from "./RecipeRow"

const Cook = () => {
    return (  
        <div className="cook">
            <RecipeRow name="Trending" filterType="trending"></RecipeRow>
            <RecipeRow name="Favourite" filterType="favourite"></RecipeRow>
        </div>
    );
}

 
export default Cook;
