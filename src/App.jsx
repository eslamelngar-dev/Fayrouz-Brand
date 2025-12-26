import {Route , Routes} from 'react-router-dom'
import HomePage from './pages/homePage/HomePage'
import ProductsPage from './pages/ProductsPage/ProductsPage'
import ProductPage from './pages/ProductPage/ProductPage'
import ContactPage from './pages/ContactPage/ContactPage'
import CartPage from './pages/Cartpage/Cartpage'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/products' element={<ProductsPage/>}/>
      <Route path='/products/:id' element={<ProductPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/cart' element={<CartPage/>}/>
    </Routes>
    </>
  )
}

export default App
