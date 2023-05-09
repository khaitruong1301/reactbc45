import React, { Component } from 'react'

export default class ProductItem extends Component {



  render() {
    let {prod,contentButton,children,renderLike} = this.props;
    return (
      <div className='card'>
        <img src={prod.image} alt="..."/>
        <div className='card-body'>
            <h3>{prod.name}</h3>
            <p>price: {prod.price}</p>
            <button className='btn btn-dark' onClick={()=>{
                console.log('id',prod.id);
            }}>Add to card</button>

            {contentButton}
            {children}
            {renderLike()}
        </div>
      </div>
    )
  }
}
