//rcredux
/*
    Khi sử dụng snippet rcredux cần lưu ý
    + xoá chữ export tại class component
    + xoá hàm dispatchToProps ở connect và ở trên chữ connect
*/
import React, { Component } from 'react'
import { connect } from 'react-redux'

class TangGiamFontSize extends Component {

  render() {
    const {fontSize,dispatch} = this.props;
    return (
        <div className='container'>
          <h3>Ví dụ: Tăng giảm fontsize</h3>
          <p style={{fontSize:fontSize}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi qui quaerat culpa laudantium, saepe non quasi dignissimos fuga voluptatibus beatae!</p>
          <button className='btn btn-dark mx-2' onClick={()=>{
            //Tạo ra action chứa dữ liệu gửi lên redux
            const action = {
                type:'CHANGE_FONT_SIZE',
                payload: 1
            }
            //Dùng props dispatch để đưa lên reducer
            dispatch(action)
          }}>+</button>
          <button className='btn btn-dark mx-2' onClick={()=>{
            //Tạo ra action chứa dữ liệu gửi lên redux
            const action = {
                type:'CHANGE_FONT_SIZE',
                payload: -1
            }
            //Dùng props dispatch để đưa lên reducer
            dispatch(action)
          }}>-</button>
        </div>
      )
  }
}
const mapStateToProps = (state) => ({
    fontSize:state.fontSizeReducer
})


export default connect(mapStateToProps)(TangGiamFontSize)