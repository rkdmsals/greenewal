import React from 'react';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { auth } from '../../../_actions/user_action';
import axios from 'axios';
import Slider from 'react-slick';
import './ProductDetail.css';

function ProductDetail() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { product } = location.state;
    // console.log(product)

    const [userId, setUserId] = useState("");

    useEffect(() => {
        dispatch(auth()).then(response => {
            // console.log(response);

            if (response.payload.isAuth) {
                setUserId(response.payload.id);
                // console.log(response.payload.id);
                return
            }
            /*else {
                navigate('/login');
            }
            */
        })
    }, []);

    const addToCart = () => {
        if (!userId) {
            navigate('/login');
            return;
        }

        // console.log('userid: ' + userId + ' product: ' + product.id);
        axios.post('/api/addToCart/add', {
            userId: userId,
            productId: product.id,
            quantity: 1, // 장바구니에 추가하는 상품의 수량
            title: product.title,
            price: product.discountedPrice
        })
            .then(response => {
                if (response.status === 200) {
                    alert('장바구니에 상품이 추가되었습니다.');
                    navigate(`/cart/${userId}`);  // 장바구니로 이동
                } else {
                    // console.error('장바구니에 상품을 추가하는 데 실패했습니다.');
                }
            })
            .catch(error => {
                // console.error('장바구니 요청 중 오류 발생:', error);
            });


    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "ProductDetail_custom_slides"
    };

    return (
        <div className='ProductDetail_background'>
            <div className='ProductDetail_main_container'>
                <div className="ProductDetial_inner_container">
                    <div className="ProductDetail_img_container">
                        <Slider {...settings}>
                            {product.detailImg.map((image, index) => (
                                <div key={index}>
                                    <img className="detailImg_wrapper" src={image} alt={`Image ${index + 1}`} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className="ProductDetail_main_description_container">
                        <div className="ProductDetail_description_title_container">
                            {product.title}
                        </div>
                        <div className="ProductDetail_description_price_container">
                            <div className="ProductDetail_description_original_price">
                                {product.originalPrice}￦
                            </div>
                            <div className="ProductDetail_description_discounted_price">
                                {product.discountedPrice}￦
                            </div>
                        </div>
                    </div>
                    <div className="ProductDetail_sub_description_container">
                        <div className="ProductDetail_sub_description_details_wrapper">
                            {product.describe}
                        </div>
                        {/* <div className="ProductDetail_sub_description_content_container">
                            <div className="ProductDetail_sub_description_content_title_container">
                                Details &gt;
                            </div>
                            <div className="ProductDetail_sub_description_content_body_container">
                                사이즈 : 10cm x 10cm
                                <br />
                                소재 : 제품 소재
                                <br />
                                제작 : 00기 디자인팀 000
                            </div>

                        </div> */}
                    </div>
                </div>

                <div className="ProductDetial_bottom_button_wrapper">
                    <button className="ProductDetail_cart_button" onClick={addToCart}>
                        장바구니
                    </button>
                    <button className="ProductDetail_buy_button" onClick={() => {
                        navigate('/payingdirect', {
                            state: {
                                productName: product.title, productId: product.id,
                                productPrice: product.discountedPrice
                            }
                        })
                    }}>
                        구매하기
                    </button>
                </div>


            </div >
        </div >
    )
}
export default ProductDetail;