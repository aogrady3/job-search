import React from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'

//Components
import Home from './components/Home'
import About from './components/About'


class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path ='/about' component={About} />
            </Switch>
        )
    }
}

export default Routes