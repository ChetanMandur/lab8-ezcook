import './css/PageNotFound.css';
import {Link } from "react-router-dom";
const PageNotFound = () => {
    return (
        <div className="pagenotfound">
            <div className="errorTitle">Page does not exist!</div>
            <div className="errorText">Most likely a broken link... <Link to="/cook">Click here to go back</Link></div>
        </div>
    );
}
 
export default PageNotFound;