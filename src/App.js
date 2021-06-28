import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import EditProducts from "./pages/EditProducts";
import AddProducts from "./pages/AddProducts";

import Navbar from './components/Navbar'

const App = () => {
  return (
    <Router>
    
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tambah" component={AddProducts} />
        <Route exact path="/edit/:id" component={EditProducts} />
      </Switch>
      
    </Router>
  );
};

export default App;
