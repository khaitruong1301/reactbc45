import React, { Component, Fragment } from 'react'

export default class ComponentWithState extends Component {

    //state là 1 thuộc tính object có sẵn của react class component, dùng để quản lý các dữ liệu thay đổi trên giao diện của component đó

    state = {
        color: 'green',
        like: 1,
        fontSize: 10,
        login: true
    }


    // handleChangeColor = async () => {
    //     /*
    //         this.setState là phương thức mặc định của react class component. Dùng để thay đổi giá trị this.state đồng render lại giao diện
    //         + Lưu ý : Phương thức setState là phương thức bất đồng bộ
    //     */
    //     await this.setState({
    //         color:'red'
    //     });

    //     console.log(this.state);
    // }

    handleChangeColor = () => {
        /*
            this.setState là phương thức mặc định của react class component. Dùng để thay đổi giá trị this.state đồng render lại giao diện
            + Lưu ý : Phương thức setState là phương thức bất đồng bộ
        */
        this.setState({
            color: 'red'
        }, () => {
            //Hàm này sẽ tự gọi sau khi thay đổi state và render lại giao diện
            console.log(this.state);

        });

    }

    renderLoginUI = () => {
        if (this.state.login) {
            return <>
                <p>Hello! cybersoft2023</p>
                <button className='btn btn-primary' onClick={()=>{
                    this.setState({
                        login:false
                    })
                }}>Logout</button>
            </>
        }

        return <button onClick={()=>{
            this.setState({
                login:true
            })
        }}>Login</button>
    }


    render() {

        return (
            <div className='container'>
                <h3>Ví dụ 1: Thay đổi màu sắc</h3>
                <p style={{ color: this.state.color }}>Lorem ipsum dolor sit amet.</p>
                <button className='btn btn-danger' onClick={() => {
                    this.handleChangeColor();
                }}>Change color</button>
                <hr />
                <h3>Ví dụ 2: Tăng giảm số lượng</h3>
                <p>{this.state.like} <i className='fa fa-heart text-danger'></i></p>
                <br />
                <i className='fa fa-heart text-danger fs-3' style={{ cursor: 'pointer' }} onClick={() => {
                    this.setState({
                        like: this.state.like + 1
                    })
                }}></i>
                <hr />
                <h3>Ví dụ 3: Tăng giảm fontsize</h3>
                <p style={{ fontSize: this.state.fontSize + 'px' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, dicta.</p>
                <button className='btn btn-dark mx-2' onClick={() => {
                    this.setState({
                        fontSize: this.state.fontSize + 1
                    })
                }}>+</button>
                <button className='btn btn-dark mx-2' onClick={() => {
                    this.setState({
                        fontSize: this.state.fontSize - 1
                    })
                }}>-</button>

                <hr />
                <h3>Ví dụ 4: Header login</h3>
                <div className='bg-dark text-end text-white p-3'>
                    {/* {this.state.login === true ?   <p>Hello! cybersoft2023</p> : <button>Login</button>} */}

                    {this.renderLoginUI()}



                </div>

            </div>
        )
    }
}
