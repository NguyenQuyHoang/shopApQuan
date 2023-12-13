import { useSelector } from "react-redux";
import { ProductState } from "../../redux/selector";
import ItemProduct from "../TrangChu/ItemProduct";

function DoNu(){
    const ProductsSelector = useSelector(ProductState);
    const ListDoNu = ProductsSelector.products.filter((Product) => {
        return Product.GioiTinh === 0;
    })
    let data = ListDoNu.map((item, index) => {
        return (
            <ItemProduct key={index} image={item.Img[0]} name={item.Ten} donGia={item.Giá}
                index={index} ListAoQuan={ListDoNu}
            />
        )
    })
    return (
        <div>
            <div className="ProductTypePage row">
            <div className="headerTypeProduct">ĐỒ NỮ ALL</div>
            {data}
        </div>
        </div>
    )
}

export default DoNu;