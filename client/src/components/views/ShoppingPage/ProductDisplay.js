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
import { useEffect } from 'react';
import './ProductDisplay.css';

function ProductDisplay() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [userId, setUserId] = useState("");

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

    useEffect(() => {
        dispatch(auth()).then(response => {
            // console.log(response);

            if (response.payload.isAuth) {
                setUserId(response.payload.id);
                // console.log(response.payload.id);
                return
            }
        })
    }, []);
    // const addDirectCart = (productInfo) => {
    //     if (!userId) {
    //         alert('로그인 후 이용 가능합니다.');
    //         // navigate('/login');
    //         return;
    //     }
    //     // console.log(productInfo);
    //     // console.log('userid: ' + userId + ' product: ' + product.id);
    //     axios.post('/api/addToCart/add', {
    //         userId: userId,
    //         productId: productInfo.id,
    //         quantity: 1, // 장바구니에 추가하는 상품의 수량
    //         title: productInfo.title,
    //         price: productInfo.discountedPrice
    //     })
    //         .then(response => {
    //             if (response.status === 200) {
    //                 alert('장바구니에 상품이 추가되었습니다.');
    //                 // navigate(`/cart/${userId}`);  // 장바구니로 이동
    //             } else {
    //                 console.error('장바구니에 상품을 추가하는 데 실패했습니다.');
    //             }
    //         })
    //         .catch(error => {
    //             console.error('장바구니 요청 중 오류 발생:', error);
    //         });
    //     // {
    //     //     product_info = {
    //     //         productId: product.id,
    //     //         title: product.title,
    //     //         price: product.price
    //     //     };
    //     //     setProductInfo(product_info);
    //     // }

    // };
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

                        < div className="ProductDisplay_content_container"
                            key={product.id} >

                            <div className="ProductDisplay_content_img_container">
                                <img
                                    className="product_main_img"
                                    src={`/img/ShoppingPage/productsDetail/${product.id}-1.png`}
                                    onClick={() => handleProductClick(product.id)}
                                />
                            </div>
                            <div className="ProductDisplay_content_detail_container">
                                <div className="ProductDisplay_content_left_container" onClick={() => handleProductClick(product.id)}>
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
                                        onClick={() => {
                                            alert("부스가 종료되어 주문이 불가합니다!")
                                            // addDirectCart(product);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="ProductDisplay_cart_button_container">
                    <button className="ProductDisplay_cart_button" onClick={
                        alert("부스가 종료되어 주문이 불가합니다!")
                        // if (userId) {
                        //     // setUserId(response.payload.id);
                        //     navigate(`/cart/${userId}`);
                        // } else {
                        //     alert('로그인 후 이용 가능합니다.');
                        //     // navigate('/login');
                        // }

                    }>
                        장바구니 가기
                    </button>
                </div>

            </div>
        </div >)
}
export default ProductDisplay;