import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ProductState } from '../../redux/selector';
import ItemProduct from '../TrangChu/ItemProduct';

function TypeDoTopNu () {
    const param = useParams()
    const ProductsSelector = useSelector(ProductState);
    const ListAoQuan = ProductsSelector.products.filter((Product) => {
        return (Product.rate === 5) && (Product.type === param.Type.toLowerCase()) && (Product.nu === 1)
    })
    const data = ListAoQuan.map((item, index) => {
        return (
            <ItemProduct key={index} image={item.Img[0]} name={item.Ten} donGia={item.Giá} />
        )
    })

    return (
        <div className="ProductTypePage row">
            <div className="headerTypeProduct">{param.Type} Nu</div>
            {data}
        </div>
    )
}

export default TypeDoTopNu