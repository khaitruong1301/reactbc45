import React, { Component } from 'react'

const arrCar = [
    { id: 1, name: 'Red car', color: 'red', price: 1000, img: './img/red-car.jpg' },
    { id: 2, name: 'Silver car', color: 'silver', price: 2000, img: './img/silver-car.jpg' },
    { id: 3, name: 'Black car', color: 'black', price: 3000, img: './img/black-car.jpg' },
    { id: 4, name: 'Steel car', color: '#EEE', price: 4000, img: './img/steel-car.jpg' },

]
/*
    Yêu cầu 1: Xây dựng giao diện render các objcar thành các card item bootstrap
*/

export default class BaiTapChonXe extends Component {

    state = {
        carDetail: {
            id: 1,
            name: 'Red car',
            color: 'red',
            price: 1000,
            img: './img/red-car.jpg'
        }
    }

    renderCar = () => {
        return arrCar.map((car) => {
            return <div className='col-3' key={car.id}>
                <div className='card'>
                    <img src={car.img} alt='...' />
                    <div className='card-body'>
                        <h3>{car.name}</h3>
                        <p>Price: {car.price} $</p>
                        <button className='btn btn-dark' onClick={() => {
                            this.setState({
                                carDetail:car
                            })
                        }}>View detail</button>
                    </div>
                </div>
            </div>
        })
    }

    render() {
        const {img,id,name,price,color} = this.state.carDetail;
        return (
            <div className='container'>
                <h3>Car List</h3>
                <div className='row'>
                    {this.renderCar()}

                </div>

                <h3> Car detail</h3>
                <div className='row'>
                    <div className='col-4'>
                        <img src={img} alt='...' className='w-100' />
                    </div>
                    <div className='col-8'>
                        <ul>
                            <li>Model: {name}</li>
                            <li>Price: {price} $</li>
                            <li>Color: {color}</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}


/*
    Yêu cầu 1:
    * List Card
        * div.card => card (Trong card button chọn xe )




*/