import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ShopContent from './Shop_giam_gia/shopcontent'

function MyShop({show, handleSetShow}) {
    const shopProduct = useSelector((state) => state.Shop)
    const indexCheck = shopProduct.length;
    let final = <></>
    if (indexCheck > 0) {
        const tempData = shopProduct[indexCheck - 1]
        const data = tempData.data.MyShop
        console.log(data)
        final = data.map((item, index) => {
            return (
                <ShopContent key={index} Img={item.Img[0]} name={item.Ten} MaSP={item.MaSP}
                    Gia={item.Giá} index={index} shopProduct={tempData} />
            )
        })
    }

    return (
        <div class={`shop ${show}`} >
            <div class="shop_header">
                <span class="material-symbols-outlined" onClick={
                    handleSetShow
                }>
                    close
                </span>
                <div class="head1">
                    <p>Giỏ hàng</p>
                </div>
            </div>
            <div class="shop_content">
                {final}
            </div>
            <div class="shop_footer">
                <div class="footer1">
                    <p>SUPTOTAL</p>
                </div>
                <div class="footer2">
                    <p>Giỏ hàng</p>
                </div>
                <div class="footer3">
                    <p>Thanh Toán</p>
                </div>
            </div>
        </div>
    )
}

export default MyShop