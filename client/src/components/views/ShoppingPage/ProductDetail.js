import React from 'react';
import { useLocation } from 'react-router-dom';
import ProductDisplay from './ProductDisplay';


function ProductDetail() {

    const location = useLocation();
    const { product } = location.state;

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
        </div >
    )
}
export default ProductDetail;