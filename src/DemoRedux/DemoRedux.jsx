import React, { Component } from 'react'
import {connect} from 'react-redux'
/*
    B1: Xây dựng giao diện (dàn layout chia component)
    B2: Xác định dữ liệu thay đổi (state) => object, array, number ,string ,...
    B3: Binding state lên giao diện (kết nối với redux lấy state về và hiển thị lên giao diện)
    B4: Thay đổi state (xử lý thông qua các sự kiện onclick, onchange, blur ...) => đưa dữ liệu lên redux xử lý



*/

class DemoRedux extends Component {
    // state = {
    //     number: 10
    // }
  render() {
    console.log(this.props);
    return (
      <div className='container'>
        <h3>Ví dụ 1: Like ảnh</h3>
        <div className='w-25 mt-2 card'>
            <img src={this.props.img} alt="..." className='w-100'/>
        </div>
        <div className='card-body'>
            <button className='btn btn-danger' onClick={()=>{
                const action = {
                    type:'changeIMG',
                    payload: './img/red-car.jpg'
                };
                this.props.dispatch(action);
            }}>Change img</button>

            <i className='fa fa-heart fs-3 text-danger m-2' style={{cursor:'pointer'}} onClick={() => {
                //Gửi dữ liệu lên redux
                const action = {
                    type:'increaseLike', //Nhãn của action 
                    payload: 1 //Dữ liệu gửi lên redux
                }
                //Dùng this.props.dispatch để đưa dữ liệu lên reducer
                this.props.dispatch(action);
            }}> </i> {this.props.like}
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
        like: state.likeReducer,
        img: state.imgReducer
})

//Dùng thư viện connect để tạo ra nội dung component mới có kết nối dữ liệu với redux
const CompoentWithRedux = connect(mapStateToProps)(DemoRedux);
export default CompoentWithRedux




// closure function
// function main() {

//     return function (thamSo) {
//         console.log(thamSo);
//     }
// }

// main()(123)