import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Reporting from '../components/Reporting'
import Home from './Home'
import Admin from './Admin'
class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            reportData: null
        };
    }

    render() {
        return (
            <Switch>
                <Route exact path="/migraine" component={Home} />
                <Route path="/reporting" component={Reporting} />
                <Route path="/admin" component={Admin} />
            </Switch>
        )
    }

}
export default Main;