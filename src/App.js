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
import DemoProps from './Props/DemoProps/DemoProps'
import ListProduct from './Props/ShoesShop/ListProduct'
import { dataProduct } from './data/dataProduct'
import PhoneDetail from './Props/PhoneDetail/PhoneDetail'
import BaiTapGioHang from './Props/BaiTapGioHang/BaiTapGioHang';

//Cấu hình router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import About from './pages/About'
import Header from './Components/Header/Header'
import HomeTeamplate from './templates/HomeTeamplate'
import ProductManagement from './pages/DemoFrom/ProductManagement'
import LifeCycleDemo from './pages/LifeCycleDemo/LifeCycleDemo'
import DetailProduct from './pages/LifeCycleDemo/DetailProduct'
export default class App extends Component {

    render() {
        return (
            <BrowserRouter>

                <Routes>
                    <Route path='' element={<HomeTeamplate />} >
                        <Route index element={<Home />}></Route>
                        <Route path="home" element={<Home />}></Route>
                        <Route path="login" element={<Login />}></Route>
                        <Route path="about" element={<About />}></Route>
                        <Route path="detail" >
                            <Route path=':id' element={<DetailProduct />}></Route>
                        </Route>
                        <Route path="form" element={<ProductManagement />}></Route>
                        <Route path="lifecycle" element={<LifeCycleDemo />}></Route>
                    </Route>
                    <Route path='*' element={<Navigate to={'/'} />}></Route>
                </Routes>


            </BrowserRouter>
        )
    }
}
