import './App.css';
import Hompage from './components/Hompage';
import Shopnow from './components/Shopnow';
import Contact from './components/Contact';
import About from './components/About';
import Signup from './components/Signup';
import { Cart } from './components/Cart';
import Wishlist from './components/Wishlist';
import Sample from './components/Sample';
import { Turn as Hamburger } from 'hamburger-react';
import { BrowserRouter , Routes , Route , Link  } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header>
        <div className='promote'>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <a>
            <Link to="/shopnow">ShopNow</Link>
          </a>
        </div>
      </header>

      <nav className='navbar'>
        <h1>mbuy</h1>
        <div className='navlink'>
          <a>
            <Link to="/">Home</Link>
          </a>
          <a>
            <Link to="/contact">Contact</Link>
          </a>
          <a>
            <Link to="/about">About</Link>
          </a>
          <a>
            <Link to="/signup">Sign Up</Link>
          </a>
        </div>
        <div className='access'>
          <div className='input'>
            <input type='text' placeholder='What are you looking for?'/>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 17L13.2223 13.2156M15.3158 8.15789C15.3158 10.0563 14.5617 11.8769 13.2193 13.2193C11.8769 14.5617 10.0563 15.3158 8.15789 15.3158C6.2595 15.3158 4.43886 14.5617 3.0965 13.2193C1.75413 11.8769 1 10.0563 1 8.15789C1 6.2595 1.75413 4.43886 3.0965 3.0965C4.43886 1.75413 6.2595 1 8.15789 1C10.0563 1 11.8769 1.75413 13.2193 3.0965C14.5617 4.43886 15.3158 6.2595 15.3158 8.15789V8.15789Z" stroke="black" stroke-width="1.5" stroke-linecap="round"/></svg>
          </div>
          <Link to="/wishlist">
            <svg className='wishlist' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </Link>
          <Link to="/cart">
            <svg className='cart' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 5H7L10 22H26" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </Link>
          <div className='ham'>
            <Hamburger size={20} />
          </div>
        </div>
      </nav>

        <Routes>
          <Route path='/' element={<Hompage/>}/>
          <Route path='/shopnow' element={<Shopnow/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/wishlist' element={<Wishlist/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>

      {/* <Hompage/> */}
      {/* <Sample/> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
