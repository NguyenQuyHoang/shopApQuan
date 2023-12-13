import { useSelector } from "react-redux";
import { ProductState } from "../../redux/selector";
import ItemProduct from "../TrangChu/ItemProduct";

function DoNam(){
    const ProductsSelector = useSelector(ProductState)
    const ListDoNam = ProductsSelector.products.filter((product) =>{
        return product.GioiTinh === 1;
    })

    let data = ListDoNam.map((item, index) => {
        return(
            <ItemProduct key={index} image={item.Img[0]} name={item.Ten} donGia={item.Giá}
                index={index} ListAoQuan={ListDoNam}
            />
        )
    })

    return (
        <div className="ProductTypePage row">
            <div className="headerTypeProduct">ĐỒ NAM ALL</div>
            {data}
        </div>
    )
}

export default DoNam;