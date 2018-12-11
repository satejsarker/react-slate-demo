import React, { Component } from 'react'
import {
    NavLink
} from 'react-router-dom'
 class Header extends Component {
    render() {
        return (
        <div>
            < nav className= "navbar navbar-expand-lg navbar-light bg-light" >
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        < NavLink className = "nav-link"
        to='/' > Home </NavLink>
        </li>
      <li className="nav-item">
        < NavLink  to ='/richText'className= "nav-link"
        href = "#" > Rich Text </NavLink>
      </li>
      </ul>
      </div>
            </nav>
        </div>
           
        )
    }
}

export default Header;