// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import AddProduct from './components/AddProduct/AddProduct';
import AllProduct from './components/AllProduct/AllProduct';
import Cart from './components/Cart/Cart';
import Profile from './components/Profile/Profile';
import Single from './components/Single/Single';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/single/:id' element={<Single />} />
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/all-product' element={<AllProduct />} />
        <Route exact path='/add-product' element={<AddProduct />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
