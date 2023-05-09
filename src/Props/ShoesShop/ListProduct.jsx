import React, { Component } from 'react'
import ItemProduct from './ItemProduct'

export default class ListProduct extends Component {
    render() {
        const {arrProduct} = this.props;
        return (
            <div className='container'>
                <h3>Shoes shop</h3>
                <div className='row'>
                    {arrProduct.map((prod) => {
                        return  <div className='col-4 mt-2' key={prod.id}>
                        <ItemProduct sp={prod}/>
                    </div>
                    })}
                </div>
            </div>
        )
    }
}
