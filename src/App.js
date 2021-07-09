import Navbar from './Base/Navbar';
import Cook from './Cook/Cook';
import Learn from './Learn/Learn';

import PageNotFound from './Base/PageNotFound';

import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import SingleRecipePage from './Cook/SingleRecipePage';


function App() {
  return (
      <Router >
        <div className="App">
          <Navbar/> 
          <div className="content">
            <Switch>
              <Route exact path="/cook">
                  <Cook />
                </Route>
                <Route exact path="/cook/:id">
                  <SingleRecipePage />
                </Route>
                <Route exact path="/learn">
                  <Learn />
                </Route>
                <Route exact path="/">
                  <Cook />
                </Route>
                <Route path="*">
                  <PageNotFound />
                </Route>

            </Switch>
            
          </div>
        </div>
      </Router>


  );


}



export default App;
