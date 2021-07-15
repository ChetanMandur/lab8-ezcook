import RecipeRow from "./RecipeRow"

const Cook = () => {
    return (  
        <div className="cook">
            <br></br>
            <RecipeRow name="Trending" filterType="trending"></RecipeRow>
            <br></br>
            <RecipeRow name="Your Favourites" filterType="favourite"></RecipeRow>
        </div>
    );
}

 
export default Cook;
