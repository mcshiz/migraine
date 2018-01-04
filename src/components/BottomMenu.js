import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/bottomMenu.css'
class   BottomMenu extends React.Component {
    render() {
        let Links = this.props.links.map((link, i) =>
            <Link to={{pathname: link.link}} key={i}>
                <li ref={i + 1} >
                    <i aria-hidden="true" className={`fa ${ link.icon }`}></i>
                </li>
            </Link>);
        return (
            <div id="bottom-menubar">
                {Links}
            </div>
        )
    }
}

export default BottomMenu