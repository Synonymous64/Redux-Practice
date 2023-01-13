import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <div style={{display: 'flex', alignItems:'center', justifyContent:'space-between'}}>
            <span className='logo'>REDUX STORE</span>
            <div>
                <Link to='/' className='navLink'>Home</Link>
                <Link to='/cart' className='navLink'>Cart</Link>
                <span className='cartCount'>
                    Cart items: 0
                </span>
            </div>
        </div>
    )
}

export default NavBar;
