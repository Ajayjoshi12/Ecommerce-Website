// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import About from './About/About';
import Products from './Products/Products';
import Contact from './Contact/Contact';
import SingleProduct from './Single Product/SingleProduct';
import Cart from './Cart/Cart';
import ErrorPage from './Error Page/ErrorPage';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/singleproduct/:id' element={<SingleProduct />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
