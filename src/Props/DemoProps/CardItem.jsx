import React, { Component } from 'react'

export default class CardItem extends Component {

    // renderABC = () => {
    //     this.props.hoTen
    // }

  render() {
    //this.props (Đây là thuộc tính có sẵn của react class component). Dùng để nhận dữ liệu từ component cha truyền vào.
    /*
        props không thể gán lại dữ liệu
    */
    const {hoTen,hinhAnh,tuoi} = this.props;

    return (
      <div className='card'>
        <img src={hinhAnh} />
        <div className='card-body'>
            <h3>Name: {hoTen} </h3>
            <p>Tuổi: {tuoi}</p>
        </div>
      </div>
    )
  }
}
