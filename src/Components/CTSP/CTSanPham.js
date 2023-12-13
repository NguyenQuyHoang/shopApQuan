import React ,{ useEffect, useState }from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AxiosAddShop } from '../../redux/ShopSlice/ShopSlice';
import store from '../../redux/store';


const CTSanPham = () => {
    const dispatch = useDispatch()
    const ItemSelector = store.getState().CTSanPham
    console.log("Data: ", ItemSelector)
    const itemProduct = ItemSelector[0].data.Ctsp
    const product = itemProduct[0].List[itemProduct[0].index]
    
    const [currentImage, setCurrentImage] = useState(product.Img[0]);

  const handleThumbnailClick = (image) => {
    console.log(image)
    setCurrentImage(image);
  };

  let size = ""
  product.Size.forEach(element => {
    return size += element + " "
  });

  function handleAddShop(){
    const username = sessionStorage.getItem('username')
    const data = {
        username: username,
        product: product
    }
    dispatch(AxiosAddShop(data))
  }
    return (
        <div className='px-5 mt-5 '>
            <div className='row'>
            
            
            
            <div className="btn-group col-2  flex-column" role="group" aria-label="Basic example">
                <button type="button" 
                    className="btn btn-link">
                        <img src={product.Img[1]}
                        alt="" 
                        onClick={() => handleThumbnailClick(product.Img[1])}
                        style={{maxWidth:"10rem", 
                        cursor: 'pointer',
                        border: currentImage === product.Img[1] ? '2px solid #007bff' : 'none',
                        borderRadius : 20
                        }}/>
                </button>
                <button type="button" 
                    className="btn btn-link">
                        <img src={product.Img[2]}
                        alt="" 
                        onClick={() => handleThumbnailClick(product.Img[2])}
                       style={{maxWidth:"10rem", 
                        cursor: 'pointer',
                        border: currentImage === product.Img[2] ? '2px solid #007bff' : 'none',
                        borderRadius : 20
                        }}/>
                </button>
                <button type="button" 
                    className="btn btn-link">
                        <img  src={product.Img[3]}
                        alt="" 
                        onClick={() => handleThumbnailClick(product.Img[3])}
                       style={{maxWidth:"10rem", 
                        cursor: 'pointer',
                        border: currentImage === product.Img[3]? '2px solid #007bff' : 'none',
                        borderRadius : 20
                        }}/>
                </button>
            </div>
            <div className='col-5'>
            <img src={currentImage} alt="" className="img-thumbnail " 
      
            style={{ cursor: 'pointer' }} />
            
            
            <hr />
            </div>
            <div className='col-5  mt-4'>
                <h1> tên sản phẩm : {product.Ten}  </h1>
                <p>Mã SP: {product.MaSP}</p>
                <p>đánh giá : {product.rate}</p>
                <p>Size : {size}</p>
                <div class="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" class="btn btn-outline-primary" onClick={
                        handleAddShop
                    }>Thêm vào giỏ hàng</button>
                    <button type="button" class="btn btn-outline-primary">Mua ngay</button>
                </div>
            </div>
        </div>
        <div className='mt-3 px-5 text-center'>
            <h1>
                Thông tin chi tiết sản phẩm
            </h1>
            <p>lượt đánh giá | số lượng sản phẩm đã bán  | Số Lượng sản phẩm còn lại </p>
            <h6  style={{fontSize:'25px'}}>Mô Tả Sản phẩm</h6>

            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Comment' rows="3">
    
                </textarea>
                <button type='submit' className='btn btn-outline-success  ' style={{width:'100px'}}> SEND</button>
            </div>
            <h6>Bình luận của người đã mua </h6>

            <div>
                <h3>Các sản phẩm khác của shop</h3>
            </div>
        </div>
        </div>
    );
};

export default CTSanPham;