
import './styles/app.scss';
import "./styles/app.scss";
import { BrowserRouter as Router, Routes, Route, useFetcher } from 'react-router-dom'
import Header from './components/layout/Header';
import Home from './components/home/Home';
import Footer from './components/layout/Footer';
import Contact from './components/contact/Contact';
import Cart from './components/Cart/Cart';
import Shipping from './components/Cart/Shipping';
import ConfirmOrder from './components/Cart/ConfirmOrder';
import PaymentSuccess from './components/Cart/PaymentSuccess';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';
import MyOrders from './components/myOrders/MyOrders';
import OrderDetails from './components/myOrders/OrderDetails';
import Dashboard from './components/admin/Dashboard';
import Users from './components/admin/Users';
import Orders from './components/admin/Orders';
import About from './components/about/About';
import NotFound from './components/layout/NotFound';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './redux/actions/user';
import toast, { Toaster } from 'react-hot-toast';
import { ProtectedRoute } from "protected-route-react";

function App() {
  const dispatch = useDispatch();
  const { error, message, user, isAuthenticated } = useSelector((state) => state.auth)

  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" })
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" })
    }
  }, [dispatch, error, message])
  return <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/paymentsuccess' element={<PaymentSuccess />} />
      <Route
        path="/login"
        element={
          <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/me">
            <Login />
          </ProtectedRoute>
        }
      />
      <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />} >
        <Route path='/me' element={<Profile />} />
        <Route path='/myorders' element={<MyOrders />} />
        <Route path="/order/:id" element={<OrderDetails />} />
        <Route path='/shipping' element={<Shipping />} />
        <Route path='/confirmOrder' element={<ConfirmOrder />} />
      </Route>
      <Route element={
        <ProtectedRoute
          isAuthenticated={isAuthenticated}
          adminRoute={true}
          isAdmin={user && user.role === "admin"}
          redirectAdmin="/me"
        />
      }>
        <Route path='/admin/dashboard' element={<Dashboard />} />
        <Route path='/admin/users' element={<Users />} />
        <Route path='/admin/orders' element={<Orders />} />
      </Route>
      <Route path='/about' element={<About />} />
      <Route path='*' element={<NotFound />} />

    </Routes>
    <Toaster />
    <Footer />
  </Router>
}

export default App;
