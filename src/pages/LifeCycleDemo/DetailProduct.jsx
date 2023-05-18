import React, { Component } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
export default class DetailProduct extends Component {

    state = {
        productDetail: {

        },
    }


    render() {
        console.log(this.props)
        return (
            <div className='container'>
                <h3>Detail product</h3>
                <div className='row mt-2'>
                    <div className='col-4'>
                        <img src={this.state.productDetail.image} className='w-100' alt="..." />

                    </div>
                    <div className='col-8'>
                        <h3>{this.state.productDetail.name}</h3>
                        <p>{this.state.productDetail.description}</p>
                    </div>
                </div>
                <h3 className='mt-2'>Related product</h3>
                <div className='row'>
                    {/*optional chaining (?): Kiểm tra giá trị có mới làm tiếp không thì bỏ qua  */}
                    {this.state.productDetail.relatedProducts?.map((item) => {
                        return <div className='col-4 mt-2' key={item.id}>
                            <div className='card'>
                                <img src={item.image} />
                                <div className='card-body'>
                                    <NavLink onClick={()=>{
                                        this.getProductDetail(item.id)
                                    }} to={`/detail/${item.id}`} className='btn btn-dark'>View detail</NavLink>
                                </div>
                            </div>

                        </div>

                    })}

                </div>
            </div>
        )
    }


    componentDidMount() {
        //Vừa load lên trang thì sẽ lấy tham số call api => setState bởi api content
        const url = window.location.href.split('/');
        let id = url[url.length - 1];
        //Từ id sẽ call api
        this.getProductDetail(id);
    }

    getProductDetail = async (id) => {
        const res = await axios({
            url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
            method: 'GET'
        });
        //Sau khi lấy dữ liệu thành công từ api về đưa vào state
        this.setState({
            productDetail: res.data.content,
        })
    }

    componentDidUpdate(prevProps, prevState) {

        // const url = window.location.href.split('/');
        // let id = url[url.length - 1];
        // console.log(this.state, 'thisstate');
        // console.log(prevState, 'prevState');
        
       

    }
}
