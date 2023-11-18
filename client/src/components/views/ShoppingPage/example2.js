// ProductDisplay.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductDetail from './ProductDetail'; // ProductDetail 컴포넌트 import 추가

function ProductDisplay() {
    const navigate = useNavigate();

    // ... (이하 생략)

    const handleProductClick = (productId) => {
        const clickedProduct = productData.find((product) => product.id === productId);
        navigate(`/shop/product-detail/${productId}`, { state: { product: clickedProduct } });
    };

    return (
        <div className="ProductDisplay_background">
            <div className="ProductDisplay_main_contianer">
                {/* ... (이하 생략) */}
                <div className="ProductDisplay_inner_container">
                    {currentDisplay.map((product) => (
                        <div key={product.id} className="ProductDisplay_content_container" onClick={() => handleProductClick(product.id)}>
                            <div className="ProductDisplay_content_img_container">
                                임시이미지
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
                                    {/* ProductDetail 컴포넌트 추가 */}
                                    <ProductDetail product={product} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="ProductDisplay_cart_button_container">
                    <button className="ProductDisplay_cart_button" onClick={() => navigate('/cart')}>
                        장바구니 가기
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductDisplay;
