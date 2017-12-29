import React from "react";
import { Link } from 'react-router-dom'
class MenuLinks extends React.Component {
    render() {
        let links = this.props.links.map((link, i) =>
            <Link to={{pathname: link.link}} key={i} onClick={this.props.toggle.bind(this)}>
                <li ref={i + 1} >
                    <i aria-hidden="true" className={`fa ${ link.icon }`}></i>
                    {link.text}
                </li>
            </Link>);

        return (
            <div className={this.props.menuStatus} id='menu'>
                <ul>
                    { links }
                </ul>
            </div>
        )
    }
}
export default MenuLinks