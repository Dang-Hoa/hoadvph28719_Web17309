import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getAllProduct, getOneProduct, deleteProduct, addProduct, updateProduct } from './api/product'
import ProductPage from './pages/Product'
import ProductDetailPage from './pages/ProductDetail'
import { IProduct } from './types/product'
import AddProductPage from './pages/admin/AddProduct'
import UpdateProductPage from './pages/admin/UpdateProductPage'
import ProductManagementPage from './pages/admin/ProductManagement'
import AdminLayout from './pages/layouts/AdminLayout'
import HomePage from './pages/HomePage'

function App() {
  const [products, setProduct] = useState<IProduct[]>([])
  useEffect(() => {
    getAllProduct().then(({ data }) => setProduct(data))
  }, [])
  const onHandle = (id: number) => {
    getOneProduct(id).then(({ data }) => { setProduct(data) })
  }
  const onHandleRemove = (id: number) => {
    deleteProduct(id).then(() => setProduct(products.filter(product => product.id !== id)))
  }
  const onHandleAdd = (product: IProduct) => {
    addProduct(product).then(() => getAllProduct().then(({ data }) => setProduct(data)))
  }
  const onHandleUpdate = (product: IProduct) => {
    updateProduct(product).then(({ data }) => setProduct(data));
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}>
          <Route path='products'>
            <Route index element={<ProductPage products={products} onGet={onHandle} />} />
            <Route path=':id' element={<ProductDetailPage products={products} />}></Route>
          </Route>
        </Route>
        <Route path='/admin' element={<AdminLayout />}>
          <Route path='products'>
            <Route index element={<ProductManagementPage onRemove={onHandleRemove} products={products} />} />
            <Route path='add' element={<AddProductPage onAdd={onHandleAdd} />} />
            <Route path=':id/update' element={<UpdateProductPage onUpdate={onHandleUpdate} products={products} />} />
          </Route>
        </Route>
      </Routes>

    </div>
  )
}

export default App