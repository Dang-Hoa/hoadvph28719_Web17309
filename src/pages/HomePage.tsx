import React from 'react';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const items1: MenuProps['items'] = ['Home', 'Danh Mục', 'Thông Báo'].map((key) => ({
    key,
    label: `${key}`,
}));

const HomePage = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>products</Breadcrumb.Item>
                </Breadcrumb>
                <Layout style={{ padding: '24px 0', background: colorBgContainer }}>
                    <Content style={{ padding: '0 24px', minHeight: 580 }}>
                        <Outlet />
                    </Content>
                </Layout>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
    );
};

export default HomePage;