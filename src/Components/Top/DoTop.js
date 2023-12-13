import { useSelector } from "react-redux";
import { ProductState } from "../../redux/selector";
import ItemProduct from "../TrangChu/ItemProduct";

function DoTop(){
    const ProductsSelector = useSelector(ProductState);
    const ListDoTop = ProductsSelector.products.filter((Product) => {
        return Product.rate === 5;
    })
    const data = ListDoTop.map((item, index) => {
        return (
            <ItemProduct key={index} image={item.Img[0]} name={item.Ten} donGia={item.Giá} 
                index={index} ListAoQuan={ListDoTop}
            />
        )
    })
    return (
        <div className="ProductTypePage row">
            <div className="headerTypeProduct">ĐỒ TOP</div>
            {data}
        </div>
    )
}

export default DoTop;