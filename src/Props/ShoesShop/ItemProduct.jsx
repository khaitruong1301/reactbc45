import React, { Component } from 'react'

export default class ItemProduct extends Component {
  render() {
    const {sp} = this.props;
    return (
        <div className='card'>
        <img src={sp.image} alt='...' />
        <div className='card-body text-center'>
            <h3>{sp.name}</h3>
            <p>{sp.price} $</p>
            <p>{sp.description}</p>
            <button className='btn btn-dark'>
                <i className='fa fa-plus'></i>
                Add to cart
            </button>


        </div>
    </div>
    )
  }
}
