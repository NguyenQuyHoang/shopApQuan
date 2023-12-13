import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ProductState } from "../../redux/selector";
import ItemProduct from "../TrangChu/ItemProduct";

function TypeNew() {
    const param = useParams()
    const bit = (param.Bit === "Nam")? 1 : 0;
    const ProductsSelector = useSelector(ProductState);
    const ListAoQuan = ProductsSelector.products.filter((Product) => {
        let date = new Date();
        let Thang = date.getMonth() + 1;
        let Nams = date.getFullYear();
        return (Thang - Product.Day.Thang <= 4) && (Product.Day.Nam === Nams) && (Product.type === param.Type.toLowerCase())
        && (Product.GioiTinh === bit)
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
            <div className="headerTypeProduct">{param.Type} {param.Bit}</div>
            {data}
        </div>
    )
}

export default TypeNew;