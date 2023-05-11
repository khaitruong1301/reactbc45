import React, { Component } from 'react'
import Header from '../Components/Header/Header'

import {Outlet} from 'react-router-dom'

export default class HomeTeamplate extends Component {
  render() {
    return (
      <>
        <Header />
        <main id="body" style={{minHeight:650}}>
            <Outlet /> {/* Đại diện cho các component route load lên thẻ này */}
        </main>

        <footer className='bg-dark text-white text-center p-5'>
            Footer cybersoft
        </footer>
      </>
    )
  }
}
