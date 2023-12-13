import { useDispatch, useSelector } from "react-redux";
import { AxiosAddShop } from "../../redux/ShopSlice/ShopSlice";
import { AxiosAddCtsp, CtspAction } from "../../redux/ctspSlice/CtspSlice";
import { useNavigate } from "react-router-dom";

function ItemProduct({ image, name, donGia, moTa, index, ListAoQuan }) {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    function handleCtsp() {
        const username = sessionStorage.getItem('username')
        const dataUd = [{
            index: index,
            List: ListAoQuan
        }]
        const data = [username, dataUd]
        dispatch(AxiosAddCtsp(data))
        setTimeout(()=>{
            navigate('/ctsp')
        }, 1000)
    }
    function handleAddShop() {
        const product = ListAoQuan[index]
        const username = sessionStorage.getItem('username')
        const data = {
            username: username,
            product: product
        }
        dispatch(AxiosAddShop(data))
    }
    return (
        <div className="card itemProduct col-3" onClick={
            handleCtsp
        }>
            <img src={image} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{moTa}</p>
                <p>Giá tiền: {donGia}</p>
                <a className="btn btn-primary" onClick={
                    handleAddShop
                }>THÊM GIỎ HÀNG</a>
            </div>
        </div>
    )
}

export default ItemProduct;