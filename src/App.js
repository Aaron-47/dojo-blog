import Navbar from './navbar';
import Home from './home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';  // We can use Browser Router with the name Router in the file 
import './index.css';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';


function App() {
  return (
    <Router>      {/* So we gonna wrap our react application inside Router */}
      <div className="App">
        <Navbar />  {/* Nesting of Navbar, Its always gonna show coz its not inside Switch, it will be here for every single route */}
        <div className="content">  {/* This is the emmit setup "div.content" */}
          <Switch>      {/* only one route shows at any one time and all of our routes goes inside switch component and inside that we set up our individual routes. */}
            <Route exact path="/">  
              <Home/>      {/* We create individual routes for each page using Route component , inside of that we need to add a path property and it is basically route. 
                          Then we have to nest the component inside the route which the user want to visit */}
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/blogs/:id">  {/* Route parameter it will represent the id of the blog as we cannot hardcode any number  */}
              <BlogDetails/>
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch> 
        </div>
      </div>
    </Router>
  );
}

export default App;  // We always export our component function so we can use it in other files 
