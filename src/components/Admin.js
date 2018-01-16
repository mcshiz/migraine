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


    render() {
        return (
            <div>
                <div>
                    <button className="button warning clear" onClick={this.clearData}>Clear Data</button>
                </div>
                <div>
                    <button className="button warning load-example-data" onClick={this.props.loadExampleData}>Load Example Data</button>
                </div>
            </div>
        )
    }
}

export default Admin