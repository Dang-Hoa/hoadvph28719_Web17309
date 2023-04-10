import { useEffect, useState } from "react"
import { IProduct } from "../types/product"
import { Col, Row } from 'antd';
import { Link } from "react-router-dom";

interface IProps {
    products: IProduct[],
    onGet: (id: number) => void
}
const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };
const ProductPage = (props: IProps) => {
    const [data, setData] = useState<IProduct[]>([])
    useEffect(() => {
        setData(props.products)
    }, [props])
    const getOneProduct = (id: number) => {
        props.onGet(id);
    }
    return (
        <div>
            <div className="banner">
                <img src="../src/img/Ảnh-bia-mixishop-1-scaled.jpg" alt="" style={{ width: '100%' }} />
            </div>
            <h1 style={{ fontSize: '26px', font: 'roboto', margin: '40px', textAlign: 'center' }}>Tất cả sản phẩm</h1>
            <Row gutter={16}>
                {
                    data.map(product => {
                        return (
                            <Col className="gutter-row" span={6} style={{ border: '2px solid black', borderRadius: '5px', padding: '30px' }}>
                                <div key={product.id}>
                                    <img src={product.image} alt="" style={{ width: '250px', height: '350px' }} />
                                    <h2>{product.name}</h2>
                                    <h4 style={{ color: 'red', fontSize: '18px' }}>Giá: {product.price}$</h4>
                                    <button><Link to={`/products/${product.id}`}>Chi tiết</Link></button>
                                </div>
                            </Col>
                        )
                    })
                }
            </Row>
        </div >
    )
}
export default ProductPage