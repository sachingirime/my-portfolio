
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";

import SinglePost from "./components/SinglePost";

import Project from "./components/Project";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer1";


function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Footer/>
    <Switch>
      <Route component = {Home} path ="/" exact ></Route>
      
      <Route component = {SinglePost} path ="/project/:slug"></Route>
    
      <Route component = {Project} path ="/project"></Route>

    </Switch>
    
    </BrowserRouter>
  )

}

export default App;
