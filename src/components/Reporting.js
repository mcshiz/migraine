import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/reporting.css'
import Chart from "./Chart";
import TextDump from "./TextDump";



class Home extends Component {
    constructor (props) {
        super(props);
        this.state = {
            startDate: null,
            endDate: null,
            loading: false,
            showCSVDump: null,
            showCharts: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.filterData = this.filterData.bind(this);
        this.showCharts = this.showCharts.bind(this);
        this.showCSVDump = this.showCSVDump.bind(this);
        this.generateCSV = this.generateCSV.bind(this);
    }

    componentWillMount() {
        this.setState({
            startDate: moment().startOf('day'),
            endDate: moment().endOf('day')
        })

    }

    handleChange(startEnd, date) {
        if(startEnd === 'start') {
            this.setState({
                startDate: date
            });
        } else {
            this.setState({
                endDate: date
            });
        }
        this.setState({
            showCSVDump: false,
            showCharts: false
        })
    }


    filterData() {
        let entries = [];
        let keys = Object.keys(localStorage);
        for (let i = 0; i < keys.length; i++) {
            let obj = JSON.parse(localStorage.getItem(keys[i]));
            if(moment(keys[i]).isSameOrAfter(this.state.startDate) && moment(keys[i]).isSameOrBefore(this.state.endDate)) {
                obj['date'] = moment(keys[i]).format('MM/DD/YY h:mm:ss a')
                entries.push(obj)
            }
        }
        return entries;
    }


    generateCSV() {
        let data = this.filterData();
        let csv = "";
        // Loop the array of objects
        for (let row = 0; row < data.length; row++) {
            let keysAmount = Object.keys(data[row]).length;
            let keysCounter = 0;
            if (row === 0) {
                for (let key in data[row]) {
                    csv += key + (keysCounter + 1 < keysAmount ? ',' : '\r\n');
                    keysCounter++
                }
            } else {
                for (let key in data[row]) {
                    let escapedKey = data[row][key];
                    if (typeof data[row][key] === "string") {
                        escapedKey = data[row][key].replace(',', '')
                    }
                    csv += escapedKey + (keysCounter + 1 < keysAmount ? ',' : '\r\n');
                    keysCounter++
                }
            }
            keysCounter = 0
        }
        return csv
    }

    showCharts() {
        let data = this.filterData();
        this.setState({
            data: data
        }, function() {
            this.setState({
                showCharts: !this.state.showCharts
            })
        })
    }

    showCSVDump() {
        let data = this.generateCSV();
        this.setState({
            CSVDump: data
        }, function() {
            this.setState({
                showCSVDump: !this.state.showCSVDump
            })
        })
    }

    render() {
        return (
            <div>
                <b>Start Date:</b>
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange.bind(this, 'start')}
                />
                <b>End Date:</b>
                <DatePicker
                    selected={this.state.endDate}
                    onChange={this.handleChange.bind(this, 'end')}
                />
                <div className="action-buttons">
                    <button className="button" onClick={this.showCSVDump}>Generate CSV</button>
                    <button className="button" onClick={this.showCharts}>View Chart</button>
                </div>
                {this.state.showCSVDump ? <TextDump csv={this.state.CSVDump}/> : null }
                {this.state.showCharts ? <Chart data={this.state.data}/> : null }
            </div>
        );
    }
}

export default Home;
