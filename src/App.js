import Navbar from './Base/Navbar';
import Cook from './Cook/Cook';
import Learn from './Learn/Learn';

import PageNotFound from './Base/PageNotFound';

import {HashRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  // return (
  //   <Router basename={"/lab8-ezcook"}>
  //     <div className="App">
  //       <Navbar/> 
  //       <div className="content">
  //         <Switch>
  //           <Route exact path= { "/cook"}>
  //             <Cook></Cook>
  //           </Route>
            

  //           <Route exact path={"/learn"}>
  //             <Learn></Learn>
  //           </Route>

  //           <Route exact path={"/"}>
  //             <Cook></Cook>
  //           </Route>

  //           <Route path="*">
  //             <PageNotFound></PageNotFound>
  //           </Route>


  //         </Switch>
          
  //       </div>
  //     </div>
  //   </Router>
  // );

  return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Navbar/> 
          <div className="content">
            <Switch>
              <Route exact path="/cook">
                  <Cook />
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
