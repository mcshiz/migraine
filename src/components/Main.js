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
    loadExampleData() {
        let exampleData = [
            {date: "2017-12-23T17:33:33.265Z", obj: {"pain":"3","work":"9","sleep":"8","notes":"notes","pressure":1025}},
            {date: "2017-12-24T17:33:33.265Z", obj: {"pain":"4","work":"2","sleep":"12","notes":"notes","pressure":1029}},
            {date: "2017-12-25T17:33:33.265Z", obj: {"pain":"6","work":"5","sleep":"8","notes":"notes","pressure":1030}},
            {date: "2017-12-26T17:33:33.265Z", obj: {"pain":"9","work":"3","sleep":"6","notes":"notes","pressure":1028}},
            {date: "2017-12-27T17:33:33.265Z", obj: {"pain":"6","work":"0","sleep":"4","notes":"notes","pressure":1026}},
            {date: "2017-12-28T17:33:33.265Z", obj: {"pain":"3","work":"1","sleep":"9","notes":"notes","pressure":1026}},
            {date: "2017-12-29T17:33:33.265Z", obj: {"pain":"1","work":"3","sleep":"10","notes":"notes","pressure":1020}},
        ];
        exampleData.map((obj) => {
            localStorage.setItem(obj.date, JSON.stringify(obj.obj))
        });
        alert("Data Loaded")
    }

    render() {
        const HomeWithData = (props) => {
            return (
                <Home data={this.state.data} locationParam={this.state.location} updateData={this.updateData} {...props}/>
            )
        };
        const ReportingWithData = (props) => {
            return (
                <Reporting data={this.state.data} updateData={this.updateData} loadExampleData={this.loadExampleData} {...props}/>
            )
        };
        const AdminWithData = (props) => {
            return (
                <Admin data={this.state.data} updateData={this.updateData} loadExampleData={this.loadExampleData} {...props}/>
            )
        };
        return (
            <Switch>
                <Route exact path="/migraine" render={HomeWithData} />
                <Route path="/migraine/reporting" render={ReportingWithData} />
                <Route path="/migraine/admin" render={AdminWithData} />
                <Route component={NotFound} />
            </Switch>
        )
    }

}
export default Main;