import React, { Component } from 'react'
import Child from './Child';
import axios from 'axios'
import { NavLink } from 'react-router-dom';
export default class LifeCycleDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number:{
                value:1
            },
            userLogin:'',
            arrProduct:[]
        }
        console.log('constructor')
    }
    /**
     * 
     * @param {*} currentState : this.state của component
     * @param {*} newProps : props sau khi thay đổi và trước render
     * @returns 
     */
    static getDerivedStateFromProps(currentState, newProps) {
        //Xử lý state trước khi giao diện sinh ra
        console.log('getDerivedStateFromProps');
        if(localStorage.getItem('userLogin')){
            return {
                ...currentState,
                userLogin : localStorage.getItem('userLogin')
            }
        }
        return null;
    }

    getAllProductApi = async () => {
        //Gọi api 
        const res = await axios({
            url:'https://shop.cyberlearn.vn/api/product',
            method:'GET'
        });
        console.log(res.data.content);
        //Sau khi có giá trị từ api thì ta sẽ đứa vào state
        this.setState({
            arrProduct:res.data.content
        })
    }

    shouldComponentUpdate(newProps,newState)  {

        console.log('shouldComponentUpdate')
        return true;
    }

    render() {
        console.log('render');
        return (
            <div className='container'>
                <h3>Lifecycle component</h3>
                <p>{this.state.number.value}</p>
                <button className='btn btn-success' onClick={()=>{

                    let newNumber = {...this.state.number};
                    newNumber.value += 1;
                    this.setState({
                        number: newNumber
                    })
                }}>
                    <i className='fa fa-heart'></i> Like
                </button>
                <Child number={this.state.number} />
                <div id="content">
                    userLogin: {this.state.userLogin}
                </div>
                <hr />
                <h3>Gọi api từ backend</h3>
                <button className='btn btn-dark' onClick={()=>{
                    this.getAllProductApi();
                }}> Get all product</button>
                <div className='row'>
                    {this.state.arrProduct.map((item)=>{
                        return <div className='col-4 mt-2' key={item.id}>
                        <div className='card'>
                            <img src={item.image} alt="..." />
                            <div className='card-body'>
                                <h3>{item.name}</h3>
                                <p>{item.price}</p>
                                <NavLink to={`/detail/${item.id}`} className='btn btn-dark'>View detail</NavLink>
                            </div>
                        </div>
                    </div>
                    })}
                </div>
            </div>
        )
    }


    timeout = {}
    componentDidMount() {
        //thường dùng để gọi api đưa vào state

        console.log('componentDidMount');
        // this.getAllProductApi();

       this.timeout = setInterval(() => {
            console.log('thông tin mới');
            //setstate...
        }, 3000);
        



    }
    componentWillUnmount() {

        //Chạy trước khi component mất khỏi giao diện
        console.log('componentWillUnmount');
        //clear những hàm chạy ngầm (hàm realtime ) tại lifecycle này khi component mất khỏi giao diện
        clearInterval(this.timeout);
    }
}


