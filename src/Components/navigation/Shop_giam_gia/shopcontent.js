import React from 'react'
import { useDispatch } from 'react-redux'
import { DeleteProduct } from '../../../redux/ShopSlice/ShopSlice';

function ShopContent({ Img, name, MaSP, Gia, index, shopProduct }) {

    const dispatch = useDispatch();
    function hanhleDeleteP() {
        const username = sessionStorage.getItem('username')
        const dataN = shopProduct.data.MyShop
        if (dataN.length > 0) {
            const final = dataN.filter((item) => {
                return dataN[index] !== item
            })
            const finalData = [username, final]
            dispatch(DeleteProduct(finalData))
        }
        // dispatch(DeleteProduct([username, final]))
    }
    return (
        <div className='shop_contentItem row'>
            <div className='col-4 img'>
                <img src={Img} />
            </div>
            <div className='col-6 name'>
                <p>Tên: {name}</p>
                <p>Mã SP: {MaSP}</p>
            </div>
            <div className='col-2 DonGia'>
                <span class="material-symbols-outlined" onClick={
                    hanhleDeleteP
                }>
                    close
                </span>
                <p>Giá Tiền</p>
                <p>{Gia}</p>
            </div>
        </div>
    )
}

export default ShopContent;