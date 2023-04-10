import React from 'react'
import { useParams } from 'react-router-dom'
import { IProduct } from '../types/product';
import { Col, Row } from 'antd';

interface IProps {
    products: IProduct[]
}

const ProductDetailPage = (props: IProps) => {
    const { id } = useParams();
    const currentProduct = props.products.find(item => item.id == Number(id))
    return (
        <div>
            <Row>
                <Col span={12}><img src={currentProduct?.image} alt="" style={{ width: '500px', height: '700px', border: '2px solid black', borderRadius: '5px', padding: '30px' }} /></Col>
                <Col span={12} style={{ textAlign: 'left' }}>
                    <h3 style={{ fontSize: '30px' }}>{currentProduct?.name}</h3>
                    <p style={{ marginTop: '50px', color: 'red', paddingLeft: '20px', fontSize: '20px' }}>Giá: {currentProduct?.price}$</p>
                    <button style={{ padding: '20px', border: 'none', backgroundColor: '#FF6347', color: 'white', borderRadius: '30px', fontSize: '18px' }}>Thêm vào giỏ hàng</button>
                </Col>
            </Row>
        </div>
    )
}

export default ProductDetailPage