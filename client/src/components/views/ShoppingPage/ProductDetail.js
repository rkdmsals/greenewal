import React from 'react';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function ProductDetail() {
    const navigate = useNavigate();
    const location = useLocation();
    const { product } = location.state;

    const addToCart = async () => {
        try {
            const response = await axios.post('/api/addToCart', {
                userId: '유저ID',
                productId: product.id,
                quantity: 1,
            });

            if (response.status === 200) { // 장바구니에 추가 성공
                navigate('/cart'); // 장바구니 페이지로 이동
            } else {
                console.error('장바구니에 상품을 추가하는 데 실패했습니다.');
            }
        } catch (error) {
            console.error('장바구니 요청 중 오류 발생:');
        }
    };



    return (
        <div className='ProductDetail_background'>
            <div className='ProductDetail_main_container'>
                <div className="ProductDetial_top_container">
                    임시이미지
                </div>
                <div className="ProductDetial_bottom_container">
                    <div className="ProductDetail_main_description_container">
                        <div className="ProductDetail_description_title_container">
                            {product.title}
                        </div>
                        <div className="ProductDetail_description_price_container">
                            <div className="ProductDetail_description_original_price">
                                {product.originalPrice}
                            </div>
                            <div className="ProductDetail_description_discounted_price">
                                {product.discountedPrice}
                            </div>
                        </div>
                    </div>
                    <div className="ProductDetail_sub_description_container">
                        <div className="ProductDetail_sub_description_details_wrapper">
                            {product.describe}
                        </div>
                        <div className="ProductDetail_sub_description_content_container">
                            사이즈 : 10cm x 10cm
                            <br />
                            소재 : 제품 소재
                            <br />
                            제작 : 00기 디자인팀 000
                        </div>
                    </div>

                </div>

            </div >
            굿즈상세설명페이지
            <button className="ProductDetail_cart_button" onClick={addToCart}>
                장바구니 담기
            </button>
        </div >
    )
}
export default ProductDetail;