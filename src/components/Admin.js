import React from 'react'
import '../styles/admin.css'
class Admin extends React.Component {
    constructor() {
        super();
        this.clearData = this.clearData.bind(this);
        this.loadExampleData = this.loadExampleData.bind(this)

    }
    clearData(){
        localStorage.clear();
        alert('Data Cleared');
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
        return (
            <div>
                <div>
                    <button className="button warning clear" onClick={this.clearData}>Clear Data</button>
                </div>
                <div>
                    <button className="button warning load-example-data" onClick={this.loadExampleData}>Load Example Data</button>
                </div>
            </div>
        )
    }
}

export default Admin