import React, { Component,PureComponent } from 'react'
/*
    pureComponent tương tự component tuy nhiên không có lifecycle shouldComponentUpdate (pure sẽ tự xử lý so sánh this và new props ngầm). Sự so sánh this props và new props chỉ là shalow compare (so sánh với các giá trị nguyên thuỷ như boolean,number,string, null, undefined).
    Lưu ý khi sử dụng purecomponent thì tại các sự kiện thay đổi reference value state thì cần clone object đó ra.


    
*/
export default class Child extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        }
        console.log('constructor child')
    }

    static getDerivedStateFromProps(newState, newProps) {
        console.log('getDerivedStateFromProps child')
        return null;
    }

    // shouldComponentUpdate(newProps,newState)  {
    //     console.log('newProps', newProps);
    //     console.log('this props', this.props);
    //     if(newProps.number !== this.props.number) {
    //         return true; //cần component render lại vì props đã thay đổi
    //     }

    //     return false;

    // }

    // componentWillReceiveProps(newProps)  {
    //     console.log(newProps)
    //     //hàm chỉ chạy khi new props thay đổi
    //     console.log('componentWillReceiveProps');
    // }


    render() {
        console.log('render child')

        return (
            <div className='bg-dark text-white fs-3 p-3'>
                Child component : {this.props.number.value}
            </div>
        )
    }
    componentDidMount() {
        console.log('componentDidMount child')
    }

    componentDidUpdate() {
        //Tương tự componentdidmount tuy nhiên hàm này sẽ chạy sau mỗi lần state hoặc props thay đổi, thường dùng để set các page detail. lưu ý khi setstate trong hàm này phải có if
    }

    componentWillUnmount() {
        console.log('componentWillUnmount child')
    }
}
