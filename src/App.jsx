import './App.css';
// Imports
import { Route, Routes, Link} from 'react-router-dom';
import Home from './pages/home/Home'
import Categories from './pages//categories/Categories';
import Wallet from './pages/wallet/Wallet';
import Cart from './pages/cart/Cart'
import UserProfile  from './pages/userProfile/UserProfile';
import Settings from './pages/settings/Settings';

function App() {


  return (
  <div className='App'>
    <div className='header'>
      <div className='headerContainer'>
        <h1>OnShop</h1>
    <nav className='navLinks'>
      <Link className='navLink' to='/'>Home</Link>
      <Link className='navLink' to='/categories'>Categories</Link>
      <Link className='navLink' to='/wallet'>Wallet</Link>
      <Link className='navLink' to='/cart'>Cart</Link>
      <Link className='navLink' to='/userProfile'>User Profile</Link>
      <Link className='navLink' to='/settings'>Settings</Link>
    </nav>
    </div>
    </div>

    <div className="content">
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/categories' element={<Categories />} />
      <Route path='/wallet' element={<Wallet />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/userProfile' element={<UserProfile />} />
      <Route path='/settings' element={<Settings />} />
    </Routes>
    </div>
  </div>
  );
}

export default App;
