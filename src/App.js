import React, {Component} from 'react';
import BottomMenu from './components/BottomMenu'
import Main from './components/Main'
import './styles/main.css'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: 0,
            links: [
                {
                    text: 'Home',
                    link: '/migraine',
                    icon: 'fa-home'
                },
                {
                    text: 'Reporting',
                    link: '/reporting',
                    icon: 'fa-bar-chart'
                },
                {
                    text: 'Admin',
                    link: '/admin',
                    icon: 'fa-cog'
                }
            ]
        }
    }
    render() {
        return (
            <div className="App">
                <div className="center">
                    <div className="header">
                        <div>Kates Migraines</div>
                    </div>
                    <div className="container-fluid">
                        <Main />
                    </div>
                    <div className="menu">
                        <BottomMenu title="Kates Migraines" links={this.state.links}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
