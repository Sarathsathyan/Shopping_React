import React from "react";

import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';

import Navbar from "./components/navbar";
import Login from "./Pages/login";
import App from "./App";

const BaseRouter=()=>(
    <Router>
    <div>
        <Switch>
        <Route exact path="/" component={App}></Route>
        <Route exact path='/login' component={Login}></Route>
        </Switch>
    </div>
    </Router>
);

export default BaseRouter;