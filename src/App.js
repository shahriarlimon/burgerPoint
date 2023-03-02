
import './styles/app.scss';
import "./styles/app.scss";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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

function App() {
  return <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/shipping' element={<Shipping />} />
      <Route path='/confirmOrder' element={<ConfirmOrder />} />
      <Route path='/paymentsuccess' element={<PaymentSuccess />} />
      <Route path='/login' element={<Login />} />
      <Route path='/me' element={<Profile />} />
      <Route path='/myorders' element={<MyOrders />} />
      <Route path="/order/:id" element={<OrderDetails />} />

    </Routes>
    <Footer />
  </Router>
}

export default App;
