import React, { Component } from 'react'
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'
 class Header extends Component {
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
                            <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Redux</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <NavLink className="dropdown-item" to="/demo-redux">Demo redux</NavLink>
                                <NavLink className="dropdown-item" to="/demo-redux1">Tăng giảm font</NavLink>
                                <NavLink className="dropdown-item" to="/demo-redux2">Form Redux</NavLink>
                            </div>
                        </li>
                    </ul>
                    <form className="d-flex my-2 my-lg-0">
                       <NavLink to="/cart">
                            <i className='fa fa-cart-plus text-white fs-4'>({this.props.cart.length} - {this.tinhTongTien()})</i> 
                       </NavLink>
                    </form>
                </div>
            </nav>

        )
    }

    tinhTongTien = () => {
        let tongTien = 0;
        for(let item of this.props.cart){
            tongTien += item.quantity * item.price;
        }
        return tongTien.toLocaleString();
    }
}

const mapStateToProps = (state) => ({
    cart:state.cartReducer.gioHang
})



export default connect(mapStateToProps)(Header)