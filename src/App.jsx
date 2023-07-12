import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import { createBrowserRouter, ScrollRestoration, Outlet, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
import Aboutme from './pages/Aboutme'
import Categories from './pages/Categories'
import SingleProduct from './components/SingleProduct'
import Cart from './pages/Cart'
import { useSelector } from 'react-redux'


const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/product/:id',
        element: <SingleProduct />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/aboutme',
        element: <Aboutme />
      }, {
        path: '/categories',
        element: <Categories />
      }, {
        path: '/cart',
        element: <Cart />
      }
    ]
  }
])


function App() {

  const items = useSelector((state) => state.cart)

  return (
    <>
      <div className='font-bodyFont'>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
