// ProductDisplay.js

import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductDetail from './ProductDetail'; // ProductDetail 컴포넌트를 가져옵니다.
import './ProductDisplay.css';

function ProductDisplay() {
    const navigate = useNavigate();

    // ... (기존 코드)

    const handleProductClick = (productId) => {
        // 클릭된 제품을 ID로 찾습니다.
        const clickedProduct = productData.find((product) => product.id === productId);

        // 선택한 제품의 세부 정보를 포함하여 ProductDetail 페이지로 이동합니다.
        navigate(`/product-detail/${productId}`, { state: { product: clickedProduct } });
    };

    return (
        <div className="ProductDisplay_background">
            <div className="ProductDisplay_main_contianer">
                {/* ... (기존 코드) */}
                <div className="ProductDisplay_inner_container">
                    {currentDisplay.map((product) => (
                        <div
                            key={product.id}
                            className="ProductDisplay_content_container"
                            onClick={() => handleProductClick(product.id)}
                        >
                            {/* ... (기존 코드) */}
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
