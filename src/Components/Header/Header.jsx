import React, { Component } from 'react'
//component thay thế thẻ a trong react router dom
import {NavLink} from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <NavLink className="navbar-brand" to="/">Cybersoft</NavLink>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <NavLink className={({isActive})=> isActive ? 'nav-link bg-white text-dark' : 'nav-link' } to="/" style={({isActive}) => isActive ? {border:'1px solid orange'} : {} } aria-current="page">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive})=> isActive ? 'nav-link bg-white text-dark' : 'nav-link' } style={({isActive}) => isActive ? {border:'1px solid orange'} : {} } to="/about" >About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive})=> isActive ? 'nav-link bg-white text-dark' : 'nav-link' } style={({isActive}) => isActive ? {border:'1px solid orange'} : {} } to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive})=> isActive ? 'nav-link bg-white text-dark' : 'nav-link' } style={({isActive}) => isActive ? {border:'1px solid orange'} : {} } to="/form">Form</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <a className="dropdown-item" href="#">Action 1</a>
                                <a className="dropdown-item" href="#">Action 2</a>
                            </div>
                        </li>
                    </ul>
                    <form className="d-flex my-2 my-lg-0">
                        <input className="form-control me-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>

        )
    }
}
