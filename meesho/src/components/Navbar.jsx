
import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './Context/AuthContext';

const Navbar = () => {

    const [userData, setUserData] = useState();
    const router = useNavigate();
    const { state, Logout } = useContext(AuthContext);

    useEffect(() => {
        if (state) {
            setUserData(state.user)
        }
    }, [state])



    return (
        <div id='Nmain'>
            <div className='Navtop'>
                <div className='Toprig'>
                    <div className='Toprig-img'>
                        <img src='https://www.kofluence.com/wp-content/uploads/2023/04/meesho-store-1024x246.png' />
                    </div>
                    <div className='Toprig-inp'>
                        <input type='text' placeholder='Try Saree, Kurti or Search by Product Code' />
                    </div>
                </div>
                <div className='Toplef'>
                    <div className='Toplef-fi'>
                        <p>Download App</p>
                    </div>
                    <div className='Toplef-se'>
                        <p>Become a Supplier</p>
                    </div>
                    <div className='Toplef-th'>
                    {userData?.name &&
                        <div onClick={ ()=> router('/profile')}>
                            <i class="fa-regular fa-user"></i>
                            <p>{userData.name}</p>
                        </div>}
                        {userData?.role == "Seller" && <div onClick={ ()=> router('/add-product')}>Add</div>}
                        { userData?.role == "Buyer" &&
                        <div onClick={ ()=> router('/cart')}>
                            <i class="fa-solid fa-cart-shopping"></i>
                            <p>Cart</p>
                        </div>}
                        {userData?.name ?
                            <h4 onClick={Logout}>Log</h4> :
                            <div onClick={() => router('/register')}>Reg</div>
                        }
                    </div>
                </div>
            </div>
            <div className='Navbot'>
                <p onClick={ ()=> router('/all-product')}>All</p>
                <p>Women Ethnic</p>
                <p>Women Western</p>
                <p>Men</p>
                <p>Kids</p>
                <p>Home & Kitchen</p>
                <p>Beauty & Health</p>
                <p>Jewellery & Accessories</p>
                <p>Bags & Footwear</p>
                <p>Electronics</p>
            </div>
        </div>
    )
}

export default Navbar;
