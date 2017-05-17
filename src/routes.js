import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home.jsx';
import Marinades from './components/Marinades.jsx';
import Recipes from './components/Recipes.jsx';
import Contact from './components/Contact.jsx';
import Feedback from './components/Feedback.jsx';
//import Oldsite from './components/Oldsite.jsx';

class Routes extends React.Component {

    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/Recipes' component={Recipes} />
                <Route path='/Marinades' component={Marinades} />
                <Route path='/Contact' component={Contact}/>
                <Route path='/Feedback' component={Feedback} />
            </Switch>
        );
    }
}

export default Routes;

/*
 <Route path='/Oldsite' hide='true' component={Oldsite} />

 */