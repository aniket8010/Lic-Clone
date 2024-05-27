import React from 'react'
import HeaderTop from './Header-top'
import HeaderBottom from './Header-bottom'

const Header = () => {
    return (
        <div className='flex'>
            <div className='my-2 ms-10'>
                <img height={"50%"} width={"50%"} src="https://licindia.in/o/lic-theme/images/lic_logo.png" alt="" />
            </div>
            <div>
                <HeaderTop />
                <HeaderBottom />
            </div>
        </div>
    )
}

export default Header