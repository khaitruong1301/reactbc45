//rcc (react class component)
import React, { Component } from 'react'
import BTHomePage from './Components/BTHomePage/BTHomePage'
import Databinding from './Databinding/Databinding'
import HandleEvent from './HandleEvent/HandleEvent'
import ComponentWithStyle from './ComponentWithStyle/ComponentWithStyle'
//css
import './assets/styles/styles.css'
import ComponentWithState from './ComponentWithState/ComponentWithState'
import RenderWithMap from './RenderWithMap/RenderWithMap'
import BaiTap from './BaiTap/BaiTap'

export default class App extends Component {

    render() {
        return (
            <div>
                {/* <p>12377216378612</p> */}
                {/* <BTHomePage /> */}
                {/* <Databinding /> */}
                {/* <HandleEvent /> */}
                {/* <ComponentWithStyle /> */}
                {/* <p className='color-dark-blue'>123</p> */}
                {/* <ComponentWithState /> */}
                {/* <RenderWithMap /> */}
                <BaiTap />
            </div>
        )
    }
}
