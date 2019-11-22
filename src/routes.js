import React from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'

//Components
import Home from './components/Home'
import About from './components/About'
import SingleJob from './components/SingleJob';


class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path ='/about' component={About} />
                <Route path ='/job/:id' component={SingleJob} />
            </Switch>
        )
    }
}

export default Routes