import React, { useState } from 'react'
import { IProduct } from "../../types/product"
import { Button, Upload, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

interface IProps {
    onAdd: (product: IProduct) => void
}
interface IFormInput {
    id: number,
    name: string,
    price: number,
    image: string,
    description: string
}

const AddProductPage = (props: IProps) => {
    // const { register, handleSubmit } = useForm<IFormInput>()
    // //register là hàm dể đăng ký các trường dữ liệu trong form
    // //handleSubmit là hàm dể xử lý khi submit form
    // const onHandleSubmit: SubmitHandler<IFormInput> = (data) => {
    //     props.onAdd(data);
    // }
    const navigate = useNavigate();


    const onFinish = (values: any) => {
        const newProduct = {
            id: values.id,
            name: values.name,
            price: values.price,
            image: values.image,
            description: values.description
        }
        props.onAdd(newProduct);
        navigate("/admin/products")
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>

            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Product name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your product!' }]}
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
                    label="description"
                    name="description"
                    rules={[{ required: true, message: 'Please input your description!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" >
                        Add product
                    </Button>
                </Form.Item>
            </Form >

        </div >

        // <div>
        //     <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
        //         <input type="text" {...register("name")} />
        //         <input type="number" {...register("price")} />
        //         <button type='submit'>Add New Product</button>
        //     </form>
        // </div>
    )
}

export default AddProductPage