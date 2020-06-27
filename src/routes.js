import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Colab from './Pages/Colab';
import Project from './Pages/Project';
import About from './Pages/About';


function Routes() {
    return (
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/project/:id" exact component={Project}/>
                <Route path="/colab" exact component={Colab}/>
                <Route path="/about" exact component={About}/>
            </Switch>
    )
}

export default Routes;