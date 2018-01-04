import React, {Component} from 'react';
import LastLogged from './LastLogged'
import {ClipLoader} from 'halogenium'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            painValue: "",
            sleepValue: "",
            workValue: "",
            notesDisplay: 0,
            workDisplay: 0,
            sleepDisplay: 0,
            lat: null,
            lon: null,
            location: null,
            loading: false,
            lastLogged: null
        };

        this.saveData = this.saveData.bind(this);
        this.handleAddStat = this.handleAddStat.bind(this);
        this.handleRatingChange = this.handleRatingChange.bind(this);
        this.handleSleepChange = this.handleSleepChange.bind(this);
        this.handleSleepChange = this.handleSleepChange.bind(this);
    }

    saveData() {
        if (this.state.painValue === "") {
            alert("Please enter a pain value first");
            return;
        }
        this.setState({loading: true});
        let pressure = null;
        let location = "";
        let notes = document.getElementById('notes') ? document.getElementById('notes').value : "";
        let obj = {
            pain: this.state.painValue,
            work: this.state.workValue,
            sleep: this.state.sleepValue,
            notes: notes
        };
        fetch('http://api.apixu.com/v1/current.json?key=eb565e87eb4e4cddb96162323172812&q='+this.props.locationParam)
            .then(res => res.json())
            .then(data => {
                obj.pressure = data.current.pressure_mb;
                this.props.updateData(obj);
                this.setState({
                    loading: false,
                    painValue: ""
                })
            })
            .catch(err => console.log(err));
    }

    handleRatingChange(e) {
        let value = e.target.value;
        //prevent from entering higher than 10
        if (value <= 10) {
            this.setState({painValue: value})
        }
    }

    handleSleepChange(e) {
        let value = e.target.value;
        this.setState({sleepValue: value});
    }

    handleWorkChange(e) {
        let value = e.target.value;
        this.setState({workValue: value});
    }


    handleAddStat(ele) {
        switch (ele) {
            case "notes":
                let notesDisplay = !this.state.notesDisplay;
                this.setState({notesDisplay: notesDisplay});
                break;
            case "sleep":
                let sleepDisplay = !this.state.sleepDisplay;
                this.setState({sleepDisplay: sleepDisplay});
                break;
            case "work":
                let workDisplay = !this.state.workDisplay;
                this.setState({workDisplay: workDisplay});
                break;
            default:
                return;
        }
    }

    render() {
        return (
            <div id="home">
                <p className="App-intro">
                    <input type="number" min="0" max="10" maxLength={2} id="pain-input"
                           onChange={this.handleRatingChange} value={this.state.painValue}/>
                    <br/>
                    <span className='rating-helper'>Rate 1 - 10</span>
                </p>
                <div className="notes-container text">
                    <span className="add notes"
                          onClick={this.handleAddStat.bind(this, "notes")}><b>+</b> Add Notes</span>
                    {this.state.notesDisplay ? <textarea name="notes" id="notes" cols="30" rows="10"/> : null}
                </div>
                <div className="notes-container sleep">
                    <span className="add sleep"
                          onClick={this.handleAddStat.bind(this, "sleep")}><b>+</b> Add Sleep</span>
                    {this.state.sleepDisplay ?
                        <span className='rating'>
                                <input type="number" min="0" max="100" onChange={this.handleSleepChange.bind(this)}
                                       value={this.state.sleepValue}/>
                                <br/>
                                <span className='sleep-rating-helper'>Hours slept since last time logged</span>
                            </span>
                        : null}
                </div>
                <div className="notes-container work">
                        <span className="add work"
                              onClick={this.handleAddStat.bind(this, "work")}><b>+</b> Add Work</span>
                    {this.state.workDisplay ?
                        <span className='rating'>
                                <input type="number" min="0" max="100" onChange={this.handleWorkChange.bind(this)}
                                       value={this.state.workValue}/>
                                <br/>
                                <span className='sleep-rating-helper'>Hours worked since last time logged</span>
                            </span>
                        : null}
                </div>
                <button className="button" onClick={this.saveData}>Log Time
                    <div className='loader-container'>
                        <ClipLoader size="10px" loading={this.state.loading}/>
                    </div>
                </button>
                <br/>
                <LastLogged data={this.props.data}/>
            </div>
        );
    }
}

export default Home;
