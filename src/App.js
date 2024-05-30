import { Route, Routes } from 'react-router-dom';
import './css/App.css';
import { Home } from './components/pages/home/Home';
import { Library } from './components/pages/library/Library';
import { Profile } from './components/pages/profile/Profile';
import { Cart } from './components/pages/cart/Cart';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/library' element={<Library />}></Route>
      <Route path='/profile' element={<Profile />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
    </Routes>
  );
}

export default App;
