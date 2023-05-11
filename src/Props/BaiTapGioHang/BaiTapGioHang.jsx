import React, { Component } from 'react'
import SanPham from './SanPham'
import GioHang from './GioHang'

const dataProduct = [
    { id: 1, name: 'Red car', image: './img/red-car.jpg', price: 1000 },
    { id: 2, name: 'Silver car', image: './img/silver-car.jpg', price: 1000 },
    { id: 3, name: 'Black car', image: './img/black-car.jpg', price: 1000 },
    { id: 4, name: 'Steel car', image: './img/steel-car.jpg', price: 1000 }
]
export default class BaiTapGioHang extends Component {

    state = {
        cart: [
            { id: 1, name: 'red car', image: './img/red-car.jpg', price: 1000, quantity: 1 }
        ]
    }

    addItem = (itemClick) => {
        console.log(itemClick);

        let itemCart = {...itemClick,quantity:1};

        //Kiểm tra giỏ hàng có sản phầm đó hay chưa (nếu có thì lấy ra và tăng số lượng ngược lại thì add vào giỏ hảng)
        let gioHang = this.state.cart;

        let spGioHang = gioHang.find(item => item.id === itemCart.id);
        if(spGioHang){
            //Nếu sản phẩm được click tìm thấy trong giỏ hàng
            spGioHang.quantity += 1;
        }else {
            gioHang.push(itemCart);
        }
        //this.setState();
        this.setState({
            cart : gioHang
        })
    }

    deleteItem = (idClick) => {
        console.log(idClick);

        let indexDel = this.state.cart.findIndex(item=>item.id === idClick);
        if(indexDel !== -1){
            this.state.cart.splice(indexDel,1);

            this.setState({
                cart:this.state.cart
            })
        }

    }

    changeQuantity = (idClick,num) => {
        let item = this.state.cart.find(sp => sp.id === idClick);
        if(item){
            item.quantity += num;
            if(item.quantity < 1) {
                if(window.confirm('bạn có muốn xoá không ?')){
                    this.deleteItem(idClick);
                    return;
                }else {
                    item.quantity -= num;
                }

            }
        }
        //Sau khi xử lý state cart xong thì set lại state mới cho cart
        this.setState({
            cart:this.state.cart
        })
    }


    render() {
        return (
            <div className='container'>
                <h3>Product list</h3>
                <div className='row'>
                    {dataProduct.map((car)=>{
                        return <div className='col-3' key={car.id}>
                        <SanPham car={car} addToCart={this.addItem}/>
                    </div>
                    })}
                    
                  
                </div>
         
                <h3>Cart ({this.state.cart.length}) </h3>
                <GioHang cart={this.state.cart}  deleteItem={this.deleteItem} changeQuantity={this.changeQuantity}/>
            </div>
        )
    }
}
