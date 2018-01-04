import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Reporting from './Reporting';
import Admin from './Admin';
import NotFound from './NotFound';
import moment from 'moment';
class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            data: {},
            location: null,
        };
        this.updateData = this.updateData.bind(this);
        this.getLocation = this.getLocation.bind(this);
    }
    componentWillMount() {
        this.getLocation();
        let keys = Object.keys(localStorage);
        let data = [];
        keys.map((key) => {
            if(Date.parse(key) && moment(key).isValid()) {
                let item = JSON.parse(localStorage.getItem(key));
                item['date'] = moment(key);
                data.push(item)
            }
        });
        this.setState({
            data: data
        })
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                let location = position.coords.latitude + "," + position.coords.longitude;
                this.setState({
                    location: location
                })
            });
        } else {
            this.setState({
                location: 54952
            })
        }
    }

    updateData(data) {
        let date = moment().utc().utcOffset(-360).toISOString();
        data.date = date;
        this.setState({data: this.state.data.concat(data)});
        localStorage.setItem(date, JSON.stringify(data));
    }

    render() {
        const HomeWithData = (props) => {
            return (
                <Home data={this.state.data} locationParam={this.state.location} updateData={this.updateData} {...props}/>
            )
        };
        const ReportingWithData = (props) => {
            return (
                <Reporting data={this.state.data} updateData={this.updateData} {...props}/>
            )
        };
        const AdminWithData = (props) => {
            return (
                <Admin data={this.state.data} updateData={this.updateData} {...props}/>
            )
        };
        return (
            <Switch>
                <Route exact path="/migraine" render={HomeWithData} />
                <Route path="/reporting" render={ReportingWithData} />
                <Route path="/admin" render={AdminWithData} />
                <Route component={NotFound} />
            </Switch>
        )
    }

}
export default Main;