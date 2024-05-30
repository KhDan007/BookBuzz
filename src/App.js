import { Route, Routes } from "react-router-dom";
import "./css/App.css";
import { Home } from "./components/pages/home/Home";
import { Library } from "./components/pages/library/Library";
import { Profile } from "./components/pages/profile/Profile";
import { Cart } from "./components/pages/cart/Cart";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import { Search } from "./components/Search";

function App() {
  const [acitvePage, setActivePage] = useState("home");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/library" element={<Library />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/search" element={<Search />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
