import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/main.css'
import {ClipLoader} from 'halogenium'

class App extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            value: 1,
            sleepValue: 0,
            workValue: 0,
            notesDisplay: 0,
            workDisplay: 0,
            loading: false
        };
        this.saveData = this.saveData.bind(this);
        this.handleAddNotes = this.handleAddNotes.bind(this);
        this.handleAddSleep = this.handleAddSleep.bind(this);
        this.handleAddWork = this.handleAddWork.bind(this);
        this.handleRatingChange = this.handleRatingChange.bind(this);
        this.handleSleepChange = this.handleSleepChange.bind(this);
        this.handleSleepChange = this.handleSleepChange.bind(this);
    }
    saveData() {
        let value = !this.state.loading;
        this.setState({loading: value})
    }
    handleRatingChange(e) {
        let value = e.target.value;
        if (value <= 10) {
            this.setState({value: value})
        }
    }
    handleSleepChange(e){
        let value = e.target.value;
        this.setState({sleepValue: value});
    }
    handleWorkChange(e){
        let value = e.target.value;
        this.setState({workValue: value});
    }


    handleAddNotes(){
        let notesDisplay = !this.state.notesDisplay;
        this.setState({notesDisplay: notesDisplay});
    }
    handleAddSleep(){
        let sleepDisplay = !this.state.sleepDisplay;
        this.setState({sleepDisplay: sleepDisplay});
    }
    handleAddWork(){
        let workDisplay = !this.state.workDisplay;
        this.setState({workDisplay: workDisplay});
    }


    render() {

        return (
            <div className="App">
                <div className="center">
                    <div className="header">
                        <span className='header-text'>My Migranes</span>
                    </div>
                    <p className="App-intro">
                        <input type="number" min="0" max="10" maxLength={2} onChange={this.handleRatingChange.bind(this)} value={this.state.value}/>
                        <br/>
                        <span className='rating-helper'>Rate 1 - 10</span>
                    </p>
                    <div className="notes-container text">
                        <span className="add notes" onClick={this.handleAddNotes}><b>+</b> Add Notes</span>
                        {this.state.notesDisplay ? <textarea name="notes" id="notes" cols="30" rows="10" /> : null }
                    </div>
                    <div className="notes-container sleep">
                        <span className="add sleep" onClick={this.handleAddSleep}><b>+</b> Add Sleep</span>
                        {this.state.sleepDisplay ?
                            <span className='rating'>
                                <input type="number" min="0" max="100" onChange={this.handleSleepChange.bind(this)} value={this.state.sleepValue}/>
                                <br/>
                                <span className='sleep-rating-helper'>Hours slept since last time logged</span>
                            </span>
                        : null }
                    </div>
                    <div className="notes-container work">
                        <span className="add sleep" onClick={this.handleAddWork}><b>+</b> Add Work</span>
                        {this.state.workDisplay ?
                            <span className='rating'>
                                <input type="number" min="0" max="100" onChange={this.handleWorkChange.bind(this)} value={this.state.workValue}/>
                                <br/>
                                <span className='sleep-rating-helper'>Hours worked since last time logged</span>
                            </span>
                            : null }
                    </div>
                    <button className="button" onClick={this.saveData}>Log Time
                        <div className='loader-container'>
                            <ClipLoader size="10px" loading={this.state.loading}/>
                        </div>
                    </button>
                </div>
            </div>
        );
    }
}

export default App;
