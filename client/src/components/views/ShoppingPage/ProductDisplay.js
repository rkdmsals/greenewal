import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import productTotalData from "./productsTotal.json";
import products21Data from "./products21.json";
import products22Data from "./products22.json"
import productsPastData from "./productsPast.json";
import { useDispatch } from 'react-redux';
import { auth } from '../../../_actions/user_action';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './ProductDisplay.css';

function ProductDisplay() {
    const navigate = useNavigate();

    const [currentDisplay, setCurrentDisplay] = useState(productTotalData)
    const handleButton1Click = (e) => {
        setCurrentDisplay(productTotalData)
    };

    const handleButton2Click = (e) => {
        setCurrentDisplay(products22Data)
    };

    const handleButton3Click = (e) => {
        setCurrentDisplay(products21Data)

    };

    const handleButton4Click = (e) => {
        setCurrentDisplay(productsPastData)

    };

    const handleProductClick = (productId) => {
        const clickedProduct = productTotalData.find((product) => product.id === productId);
        navigate(`/shop/product-detail/${productId}`, { state: { product: clickedProduct } });
    };

    const dispatch = useDispatch();

    return (
        <div className="ProductDisplay_background">
            <div className="ProductDisplay_main_contianer">
                <div className="ProductDisplay_main_title">
                    Previous
                    <br />
                    Goods
                </div>
                <div className="ProductDisplay_top_button_container">
                    <button className="ProductDisplay_top_button1" onClick={() => handleButton1Click("버튼 1")}>전체</button>
                    <button className="ProductDisplay_top_button2" onClick={() => handleButton2Click("버튼 2")}>2022</button>
                    <button className="ProductDisplay_top_button3" onClick={() => handleButton3Click("버튼 3")}>2021</button>
                    <button className="ProductDisplay_top_button4" onClick={() => handleButton4Click("버튼 4")}>~2020</button>
                </div>
                <div className="ProductDisplay_inner_container">
                    {currentDisplay.map((product) => (
                        <div key={product.id} className="ProductDisplay_content_container"
                            onClick={() => handleProductClick(product.id)}>
                            <div className="ProductDisplay_content_img_container">
                                <img
                                    className="product_main_img"
                                    src={`/img/ShoppingPage/productsDetail/${product.id}-1.png`}
                                />
                            </div>
                            <div className="ProductDisplay_content_detail_container">
                                <div className="ProductDisplay_content_left_container">
                                    <div className='ProductDisplay_content_title'>
                                        {product.title}
                                    </div>
                                    <div className="ProductDisplay_content_price_container">
                                        <div className='ProductDisplay_content_original_price'>
                                            {product.originalPrice}￦
                                        </div>
                                        <div className='ProductDisplay_content_discounted_price'>
                                            {product.discountedPrice}￦
                                        </div>
                                    </div>
                                </div>
                                <div className="ProductDisplay_content_right_container">
                                    <img
                                        className="product_main_img"
                                        src="/img/ShoppingPage/addButton.png"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="ProductDisplay_cart_button_container">
                    <button className="ProductDisplay_cart_button" onClick={() => {
                        dispatch(auth()).then(response => {
                            console.log(response);
                            if (response.payload.isAuth) {
                                // setUserId(response.payload.id);
                                navigate(`/cart/${response.payload.id}`);
                            } else {
                                alert('로그인 후 이용 가능합니다.');
                                navigate('/login');
                            }
                        })
                    }}>
                        장바구니 가기
                    </button>
                </div>

            </div>
        </div >)
}
export default ProductDisplay;