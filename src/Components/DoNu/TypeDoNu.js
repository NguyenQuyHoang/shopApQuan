import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ProductState } from "../../redux/selector";
import ItemProduct from "../TrangChu/ItemProduct";

function TypeDoNu() {
    const param = useParams()
    const ProductsSelector = useSelector(ProductState);
    const ListAoQuan = ProductsSelector.products.filter((Product) => {
        return (Product.GioiTinh === 0) && (Product.type === param.Type.toLowerCase())
    })
    const data = ListAoQuan.map((item, index) => {
        return (
            <ItemProduct key={index} image={item.Img[0]} name={item.Ten} donGia={item.Giá} 
                index={index} ListAoQuan={ListAoQuan}
            />
        )
    })

    return (
        <div className="ProductTypePage row">
            <div className="headerTypeProduct">{param.Type} Nu</div>
            {data}
        </div>
    )
}

export default TypeDoNu;