import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/ao-mang-to.jpg'
import { useNavigate } from 'react-router-dom';
import { LoginAction } from '../../redux/LoginSlice';
import MyShop from './MyShop';
import { useState } from 'react';
// import { LoginSelecter } from '../../redux/selector';

function SearchNav() {
    const ProductShop = useSelector((state) => state.Shop)
    let count = ProductShop.length;
    const dispatch = useDispatch();
    const Navigate = useNavigate()
    // const LoginState = useSelector(LoginSelecter)
    function handleSignOut(){
        sessionStorage.clear()
        Navigate('/')
        dispatch(LoginAction.SetLogin(1))
    }

    const [show, setShow] = useState("");
    function handleSetShow(){
        setShow(show === "show"? "":"show")
        console.log(show)
    }
    return (
        <nav class="navbar bg-body-tertiary SearchNav">
            <div class="container-fluid">
                <img src={logo} alt="" onClick={() => {
                    Navigate('/TrangChu')
                }}></img>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                </form>
                <div className='account-nav'>
                    <p className='user'>
                        <span class="material-symbols-outlined">
                            account_circle
                        </span>
                        User
                        <div className='popoverUser'>
                            <p>1. Thông tin tài Khoản.</p>
                            <p onClick={
                                handleSignOut
                            }>2. Đăng xuất.</p>
                        </div>
                    </p>

                    <p onClick={
                            handleSetShow
                        }>
                        <span class="material-symbols-outlined" >
                            shopping_cart
                        </span>
                        <MyShop show={show} handleSetShow={handleSetShow} />
                        <span className='notify'>{count}</span>
                        Shop
                    </p>
                </div>
            </div>
        </nav>
    )
}

export default SearchNav;