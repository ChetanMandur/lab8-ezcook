import './css/PageNotFound.css';

const PageNotFound = () => {
    return (
        <div className="pagenotfound">
            <div className="errorTitle">Page does not exist!</div>
            <div className="errorText">Most likely a broken link... <a href="/cook">Click here to go back</a></div>
        </div>
    );
}
 
export default PageNotFound;