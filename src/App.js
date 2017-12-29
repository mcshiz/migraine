import React, {Component} from 'react';

import Menu from './components/Menu'
import Main from './components/Main'
import './App.css';
import logo from './logo.svg';
import './styles/main.css'
import './styles/menu.css'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: 0,
            links: [
                {
                    text: 'Home',
                    link: '/',
                    icon: 'fa-pencil-square-o'
                },
                {
                    text: 'Reporting',
                    link: '/reporting',
                    icon: 'fa-pencil-square-o'
                }
            ]
        }
    }
    render() {
        return (
            <div className="App">
                <div className="center">
                    <div className="header">
                        <Menu title="Kates Migraines" links={this.state.links}/>
                    </div>
                    <div className="container-fluid">
                        <Main />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
