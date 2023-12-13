import IntroItem from "./IntroItem";
import img1 from "../../assets/ao-tay-ngan.jpg"
import img2 from "../../assets/ao-mang-to.jpg"
import img3 from "../../assets/ao-lien-quan.jpg"
import img4 from '../../assets/dịch vụ vận tải.jpg'
import img5 from '../../assets/khuyen-mai-giam-gia-hang-hoa-dich-vu-trong-cong-ty-co-phan_2809162618.png'
import img6 from '../../assets/6-hinh-thuc-thanh-toan-truc-tuyen-o-viet-nam3.jpg'
import ServiceItem from "./serviceItem";
import { useSelector } from "react-redux";
import ItemProduct from "./ItemProduct";
import { ProductState } from "../../redux/selector";

function TrangChu() {
    const ProductsSelector = useSelector(ProductState)
    const ListDoNam = ProductsSelector.products.filter((product) =>{
        return product.GioiTinh === 1;
    })
    const ListDoNu = ProductsSelector.products.filter((product)=> {
        return product.GioiTinh === 0;
    })

    const dataDoNam = ListDoNam.slice(0, 4).map((item, index) => (
        <ItemProduct key={index} image={item.Img[1]} name={item.Ten} donGia={item.Giá}
         index={index} ListAoQuan={ListDoNam.slice(0, 4)}/>
    ))

    const dataDoNu = ListDoNu.slice(0, 4).map((item, index) => (
        <ItemProduct key={index} image={item.Img[1]} name={item.Ten} donGia={item.Giá}
            index={index} ListAoQuan={ListDoNu.slice(0, 4)}
        />
    ))
    return (
        <div className="TrangChu">
            <div className="Intro_Main row">
                <IntroItem image={img1}
                    IntroName="Thời Trang Nam" />
                <IntroItem image={img2}
                    IntroName="Thời Trang Nữ" />
                <IntroItem image={img3}
                    IntroName="Su Hướng" />
            </div>
            <div className="service row">
                <ServiceItem imageService={img4}
                    nameService="Dịch vụ vận chuyển"
                    descriptService="Chúng tôi cung cấp cho khách hàng dịch vụ vận chuyển tốt nhất."
                />
                <ServiceItem imageService={img5}
                    nameService="Khuyến Mãi"
                    descriptService="Chúng tôi cung cấp cho khách hàng dịch vụ Khuyến mãi 20% khi mua hàng theo combo."
                />
                <ServiceItem imageService={img6}
                    nameService="Dịch vụ Thanh Toán"
                    descriptService="Chúng tôi cung cấp cho khách hàng dịch vụ thanh toán tiện lợi và nhanh chóng nhất."
                />
            </div>
            <div className="AboutUs row">
                <div className="image col-6">
                    <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""></img>
                </div>
                <div className="descript-about col-6">
                    <div>
                        <h2>About Us</h2>
                        <h5>Shop Áo Quần Thời Trang.</h5>
                        <p>Chúng tôi cung cấp cho các bạn những sản phẩm thời trang mới nhất. Với độ tin cậy 100%
                            chính hãng, giá cả hợp lý và nhiều ưu đãi đặc biệt. Đến với shop chúng tôi các bạn có thể
                            tự do lựa chọn theo phong cách của mình. Bạn không ngại vì bạn đẹp.</p>
                    </div>
                </div>
            </div>
            <div className="Thoitrangnam row">
                <div className="titleProduct col-12">THỜI TRANG NAM</div>
                {dataDoNam}
            </div>
            <div className="Thoitrangnu row">
                <div className="titleProduct col-12">THỜI TRANG NU</div>
                {dataDoNu}
            </div>
        </div>
    )
}

export default TrangChu;