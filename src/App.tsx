import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Navbar from '../src/components/NavBar/Navbar'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { AuthProvider } from '../src/hooks/AuthContext'
import AuthRoute from '../src/route/AuthRoute'
import NonAuthRoute from '../src/route/NonAuthRoute'
import './index.scss'
import PageNotFound from '../src/pages/404/PageNotFound'
import Home from './components/Home/Home'
import 'react-toastify/dist/ReactToastify.css';
import Product from './pages/Product/Product'
import Cart from './pages/Cart/Cart'
import Checkout from './pages/Checkout/Checkout'
import AddAddress from './pages/Address/AddAddress'
import PaymentCards from './pages/PaymentCards/PaymentCards'
import WishList from './pages/Wishlist/Wishlist'
import OrderHistory from './components/OderHistory/OrderHistory'
import OrderDetails from './components/OderHistryID/OrderDetails'
import Menu from './components/Menu/Menu'

function App() {
  return (
    <>
      <QueryClientProvider client={new QueryClient()}>
        <AuthProvider>
          {/* <Navbar/> */}
          <BrowserRouter>
            <Switch>
              <NonAuthRoute exact path="/product/:id">
                <Product />
              </NonAuthRoute>
              <NonAuthRoute exact path="/login">
                <Navbar />
              </NonAuthRoute>
              <AuthRoute exact path="/cart">
                <Cart />
              </AuthRoute>
              <AuthRoute exact path="/checkout">
                <Checkout />
              </AuthRoute>
              <AuthRoute exact path="/wishlist">
                <WishList />
              </AuthRoute>
              <AuthRoute exact path="/add-address">
                <AddAddress />
              </AuthRoute>
              <AuthRoute exact path="/edit-payment-cards">
                <PaymentCards />
              </AuthRoute>
              <AuthRoute exact path="/orders-history">
                <OrderHistory />
              </AuthRoute>
              <AuthRoute exact path="/orders-history/:id">
                <OrderDetails />
              </AuthRoute>
              {/* <NonAuthRoute exact path="/login">
                <Login />
              </NonAuthRoute> */}
              {/* <NonAuthRoute exact path="/login">
                <Login />
              </NonAuthRoute>
              <NonAuthRoute exact path="/register">
                <SignUp />
              </NonAuthRoute>
              <Route exact path="/">
                <Login />
              </Route> */}
              <NonAuthRoute exact path="/home">
                <Home />
              </NonAuthRoute>
              <NonAuthRoute exact path="/menu">
                <Menu />
              </NonAuthRoute>
              <NonAuthRoute exact path="/">
                <Redirect to="/home" />
              </NonAuthRoute>
              <Route path="*" >
                <PageNotFound />
              </Route>
            </Switch>
          </BrowserRouter>
        </AuthProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  )
}

export default App
