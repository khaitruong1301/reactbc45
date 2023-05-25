import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeQuantity, delItemAction } from '../redux/reducers/cartReducer';

/*
    +xoá export ngay class
    +xoá các vị trí có chữ mapDispatchToProps

*/
class Cart extends Component {
    render() {
        const { cart } = this.props;
        return (
            <div className='container'>
                <h3 className='display-4 mt-2'> <i className='fa fa-cart-plus'></i> Cart</h3>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>img</th>
                            <th>price</th>
                            <th>quantity</th>
                            <th>total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item) => {
                            return <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>
                                    <img src={item.image} alt="..." width={50} />
                                </td>
                                <td>
                                    {item.price}
                                </td>
                                <td>
                                    <button className='btn btn-primary mx-2' onClick={() => {
                                        const payload = {
                                            id: item.id,
                                            quantity: 1
                                        }

                                        const action = changeQuantity(payload);

                                        this.props.dispatch(action);
                                    }}>+</button>
                                    {item.quantity}
                                    <button className='btn btn-primary mx-2' onClick={() => {
                                        const payload = {
                                            id: item.id,
                                            quantity: -1
                                        }

                                        const action = changeQuantity(payload);

                                        this.props.dispatch(action);
                                    }}>-</button>
                                </td>
                                <td>{item.price * item.quantity}</td>
                                <td>
                                    <button className='btn btn-outline-danger' onClick={() => {
                                        //Tạo action và đưa lên reducer
                                        //   const action = {
                                        //     type:'cartReducer/delItemAction',
                                        //     payload: item.id
                                        //   }
                                        const action = delItemAction(item.id);
                                        this.props.dispatch(action);
                                    }}>
                                        <i className='fa fa-close'></i>
                                    </button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    cart: state.cartReducer.gioHang
})


export default connect(mapStateToProps)(Cart)