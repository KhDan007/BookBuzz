import home from '../img/icons/home.svg'
import homeActive from '../img/icons/home_active.svg'
import library from '../img/icons/library.svg'
import libraryActive from '../img/icons/library_active.svg'
import profile from '../img/icons/profile.svg'
import profileActive from '../img/icons/profile_active.svg'
import cart from '../img/icons/cart.svg'
import cartActive from '../img/icons/cart_active.svg'

export const Footer = ({activePage, setActivePage}) => {
  return <footer className="flex footer">
    <div onClick={() => setActivePage("home")} className="footer__elem">
      <div className="footer__icon">
        <img src={activePage === "home" ? homeActive : home} alt="" />
      </div>
      <div className="footer__text">
        {activePage === "home" ? "" : "Home"}
      </div>
    </div>
    <div onClick={() => setActivePage("library")} className="footer__elem">
      <div className="footer__icon">
        <img src={activePage === "library" ? libraryActive : library} alt="" />
      </div>
      <div className="footer__text">
        {activePage === "library" ? "" : "Library"}
      </div>
    </div>
    <div onClick={() => setActivePage("profile")} className="footer__elem">
      <div className="footer__icon">
        <img src={activePage === "profile" ? profileActive : profile} alt="" />
      </div>
      <div className="footer__text">
        {activePage === "profile" ? "" : "Profile"}
      </div>
    </div>
    <div onClick={() => setActivePage("cart")} className="footer__elem">
      <div className="footer__icon">
        <img src={activePage === "cart" ? cartActive : cart} alt="" />
      </div>
      <div className="footer__text">
        {activePage === "cart" ? "" : "Cart"}
      </div>
    </div>
  </footer>
}