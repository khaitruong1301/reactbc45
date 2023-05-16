import React, { Component,createRef } from 'react'
import FormProduct from './FormProduct'

export default class ProductManagement extends Component {
    constructor(props) {
        super(props);
        //Hàm tạo ra đối tượng dom
        this.childRef = createRef();
        this.state = {
            arrProduct: [
                { id: '11', name: 'iphone', price: 1000, image: './img/applephone.jpg', description: 'iphone pro max', type: 'phone' },
                { id: '22', name: 'macbook', price: 2000, image: './img/lt_macbook.png', description: 'macbook m1 pro', type: 'laptop' }
            ],
            // productEdit: {
            //     id: '',
            //     name: '',
            //     price: '',
            //     image: '',
            //     description: '',
            //     type: ''
            // }
        }
    }
    

    //state đặt đâu thì setState đặt tại đó
    addItem = (prodClick) => {
        let newArrProduct = [...this.state.arrProduct];
        newArrProduct.push({ ...prodClick });

        this.setState({
            arrProduct: newArrProduct
        })

    }
    deleteItem = (idClick) => {
        //Dựa vào id click tìm ra index
        let index = this.state.arrProduct.findIndex(item => item.id === idClick);
        if (index !== -1) {
            //Dựa vào index để xoá item trong state.arrProduct
            this.state.arrProduct.splice(index, 1);
            //set lại state arrProduct
            this.setState({
                arrProduct: this.state.arrProduct
            })
        }
    }
    editProduct = (prodClick) => {
        // this.setState({
        //     productEdit:prodClick
        // })
        this.childRef.current.setState({
            values: prodClick
        })
    }
    updateItem = (prodEdit) => {
        prodEdit = {...prodEdit};

        //Tìm thằng trong mảng => lấy dữ liệu trong mảng gán = productEdit
        let prodInArray = this.state.arrProduct.find(item=>item.id == prodEdit.id);

        if(prodInArray){
            for(let key in prodInArray) {
                prodInArray[key] = prodEdit[key];
            }

            this.setState({
                arrProduct: this.state.arrProduct
            })
        }

    }


    renderTableProduct = () => {
        return this.state.arrProduct.map((item) => {
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
                    {item.description}
                </td>
                <td>
                    {item.type}
                </td>
                <td>
                    <button className='btn btn-danger' onClick={() => {
                        this.deleteItem(item.id)
                    }}>
                        <i className='fa fa-trash'></i>
                    </button>
                    <button className='btn btn-primary mx-2' onClick={()=>{
                        this.editProduct(item);
                    }}>
                        <i className='fa fa-edit'></i>
                    </button>
                </td>
            </tr>
        })
    }

    render() {

        return (
            <div className='container' >
                <h3>Product Management</h3>
                <FormProduct ref={this.childRef} productEdit={this.state.productEdit} addItem={this.addItem} updateItem={this.updateItem}/>
                <table className='table'>
                    <thead className='bg-dark text-white'>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>image</th>
                            <th>price</th>
                            <th>description</th>
                            <th>type</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableProduct()}
                    </tbody>
                </table>
            </div>
        )
    }
}
