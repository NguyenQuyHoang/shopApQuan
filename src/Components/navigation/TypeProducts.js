import { Link } from "react-router-dom";

function TypeProducts() {
    return (
        <div className="Type-products">
            <ul className='row'>
                <li className='col-3'>
                    <div className='box'>
                        <Link to='/DoNam'>Đồ Nam
                            <span class="material-symbols-outlined">
                                stat_minus_1
                            </span>
                        </Link>
                        <ul className='dropdown'>
                            <li className='background'></li>
                            <li><Link to='/DoNam'>Tất Cả</Link></li>
                            <li><Link to='/DoNam/Ao'>Áo Nam</Link></li>
                            <li><Link to='/DoNam/Quan'>Quần Nam</Link></li>
                        </ul>
                    </div>
                </li>
                <li className='col-3'>
                    <div className='box'>
                        <Link to='/DoNu'>Đồ Nữ
                            <span class="material-symbols-outlined">
                                stat_minus_1
                            </span>
                        </Link>
                        <ul className='dropdown'>
                            <li className='background'></li>
                            <li><Link to='/DoNu'>Tất Cả</Link></li>
                            <li><Link to='/DoNu/Ao'>Áo Nữ</Link></li>
                            <li><Link to='/DoNu/Quan'>Quần Nữ</Link></li>
                        </ul>
                    </div>
                </li>
                <li className='col-3'>
                    <div className='box'>
                        <Link to='/DoTop'>Top
                            <span class="material-symbols-outlined">
                                stat_minus_1
                            </span>
                        </Link>
                        <ul className='dropdown'>
                            <li className='background'></li>
                            <li><Link to='/DoTop'>Tất Cả</Link></li>
                            <li><Link to='/DoTop/Nam/Ao'>Áo Nam</Link></li>
                            <li><Link to='/DoTop/Nam/Quan'>Quần Nam</Link></li>
                            <li><Link to='/DoTop/Nu/Ao'>Áo Nữ</Link></li>
                            <li><Link to='/DoTop/Nu/Quan'>Quần Nữ</Link></li>
                        </ul>
                    </div></li>
                <li className='col-3'>
                    <div className='box'>
                        <Link to='/DoNew'>New
                            <span class="material-symbols-outlined">
                                stat_minus_1
                            </span>
                        </Link>
                        <ul className='dropdown'>
                            <li className='background'></li>
                            <li><Link to='/DoNew'>Tất Cả</Link></li>
                            <li><Link to='/DoNew/Nam/Ao'>Áo Nam</Link></li>
                            <li><Link to='/DoNew/Nam/Quan'>Quần Nam</Link></li>
                            <li><Link to='/DoNew/Nu/Ao'>Áo Nữ</Link></li>
                            <li><Link to='/DoNew/Nu/Quan'>Quần Nữ</Link></li>
                        </ul>
                    </div></li>
            </ul>
        </div>
    )
}

export default TypeProducts;