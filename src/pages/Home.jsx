import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux';
import { addItemAction } from '../redux/reducers/cartReducer';
class Home extends Component {

  state = {
    arrProduct: []
  }


  getProducApi = async () => {
    let res = await axios({
      url:'https://shop.cyberlearn.vn/api/Product',
      method:'GET'
    })

    this.setState({
      arrProduct:res.data.content
    })
  }

  componentDidMount() {
    this.getProducApi();
  }

  render() {
    return (
      <div className='container'>
        <h3>Home page</h3>
        <div className='row'>
        {this.state.arrProduct.map((item)=>{
          return <div className='col-3 mt-2' key={item.id}>
            <div className='card'>
              <img src={item.image} alt="..." />
              <div className='card-body'>
                <h5>{item.name}</h5>
                <p>{item.price}</p>
                <button className='btn btn-dark' onClick={()=>{
                  //Gửi item lên reducer xử lý thay đổi giỏ hàng
                  // const action = {
                  //   type:'cartReducer/addItemAction',
                  //   payload: item
                  // }
                  const action = addItemAction(item);
                  this.props.dispatch(action);
                }}>Add to cart <i className='fa fa-cart-plus'></i></button>
              </div>
            </div>
          </div>
        })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {};

export default connect(mapStateToProps) (Home);