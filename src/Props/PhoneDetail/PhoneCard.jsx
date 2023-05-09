import React, { Component } from 'react'

export default class PhoneCard extends Component {

    state = {
        
    }
    render() {
        const {phone,viewDetail} = this.props;
        return (
            <div className='card'>
                <img src={phone.hinhAnh} alt="..." />
                <div className='card-body'>
                    <h3>{phone.tenSP}</h3>
                    <p>{phone.giaBan.toLocaleString()} $</p>
                    <button className='btn btn-success' onClick={() => {
                       viewDetail(phone)
                    }}>
                        View detail
                    </button>
                </div>
            </div>
        )
    }
}
