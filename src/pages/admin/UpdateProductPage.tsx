import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import { IProduct } from '../../types/product';



interface IProps {
    products: IProduct[],
    onUpdate: (product: IProduct) => void
}

const UpdateProductPage = (props: IProps) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState<IProduct>() //Khơir tạo biến state Product có kiểu giữ liệu là IProduct
    useEffect(() => {       // Khi props thay đổi thì sẽ chạy useEffect này
        const currentProduct = props.products.find((product: IProduct) => product.id == Number(id)) // tìm trong mảng props.products có phần tử nào có id trùng vs id trên url ko
        setProduct(currentProduct); //nếu có thì set lại giá trị cho biến product
    }, [props])
    useEffect(() => { // khi biến product thay đổi thì sẽ chạy useEffect này
        setFields() // gọi hàm setFields để set lại giá trị cho các input
    }, [product])
    console.log(product)

    const [form] = Form.useForm();
    // khởi tạo một instance của Form và gán vào biến form
    // Instance của form là một đối tượng được tạo ra bởi Ant Design để thực hiện các chức năng của form trong React

    const setFields = () => {// hàm này để set lại giá trị cho các input
        form.setFieldsValue({ // gọi hàm setFieldsValue của instance form để set lại giá trị cho các input dựa vào giá trị của biến product
            id: product?.id,
            name: product?.name,
            price: product?.price,
            description: product?.description,
            image: product?.image
        })
    }
    const onFinish = (values: any) => {
        props.onUpdate(values);
        navigate('/admin/products')
    };

    // useEffect(() => {
    //     const currentProduct = props.find(item => item.id === Number(id))
    //     reset(currentProduct)
    // }, [props])
    // const onHandleSubmit = (data: IProduct) => {
    //     props.onUpdate(data);
    // }
    return (
        <div>
            <Form
                form={form}
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                // initialValues={{
                //     name: product?.name,
                //     image: product?.image,
                //     price: product?.price,
                //     description: product?.description,
                // }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label=""
                    name="id"
                    style={{ display: 'none' }} // ẩn input này đi
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Product name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Product price"
                    name="price"
                    rules={[{ required: true, message: 'Please input your price!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Product Image"
                    name="image"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Description"
                    name="description"
                    rules={[{ required: true, message: 'Please input your description!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default UpdateProductPage