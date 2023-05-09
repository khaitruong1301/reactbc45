import React, { Component } from 'react'
import CardItem from './CardItem'
import ProductItem from './ProductItem'

export default class DemoProps extends Component {

    product = {
        id:1,
        name:'red car',
        price: 1000,
        image: './img/red-car.jpg'
    }

    renderLike = () => {
        return <i className='fa fa-heart text-danger'></i>
    }
  render() {
    // const ob
    return (
      <div className='container'>
        <div className='w-25'>
            <CardItem hoTen="Nguyễn Văn A" hinhAnh={'https://i.pravatar.cc?u=1'} tuoi={18}/>
        </div>
        <div className='w-25'>
            <ProductItem prod={this.product} contentButton={<button className='btn btn-danger rounded-circle'>sale 30%</button>} renderLike={this.renderLike}> 
                <p>Lorem ipsum dolor sit amet.</p>
            </ProductItem>
        </div>
      </div>
    )
  }
}
