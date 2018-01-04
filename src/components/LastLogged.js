import React from 'react';
import 'moment'
import moment from "moment/moment";

class LastLogged extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          lastLogged: null
        };
        this.getLastLogged = this.getLastLogged.bind(this)
    }

    getLastLogged() {
        let data = this.props.data;
        if(data.length <= 0 ) {
            return;
        }
        let lastLogged = new Date(Math.max.apply(null, data.map(function(e) {
            return new Date(e.date);
        })));
        if(Date.parse(lastLogged) && moment(lastLogged).isValid()) {
            return moment(lastLogged).format('MM/DD/YY h:mm:ss a');
        }
    }
    render () {
        const LastLogged = this.getLastLogged();

        return (
            <b className='last-logged'>Last Logged: {LastLogged}</b>
        )
    }
}
export default LastLogged