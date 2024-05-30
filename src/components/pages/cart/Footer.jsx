import cartActive from "../../../img/icons/cart_active.svg";
import library from "../../../img/icons/library.svg";
import profile from "../../../img/icons/profile.svg";
import home from "../../../img/icons/home.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="flex footer">
      <Link to="/" className="footer__elem">
        <div className="footer__icon">
          <img src={home} alt="" />
        </div>
        <div className="footer__text">Home</div>
      </Link>
      <Link to="/library" className="footer__elem">
        <div className="footer__icon">
          <img src={library} alt="" />
        </div>
        <div className="footer__text">Library</div>
      </Link>
      <Link to="/profile" className="footer__elem">
        <div className="footer__icon">
          <img src={profile} alt="" />
        </div>
        <div className="footer__text">Profile</div>
      </Link>
      <Link to="/cart" className="footer__elem">
        <div className="footer__icon">
          <img src={cartActive} alt="" />
        </div>
        <div className="footer__text"></div>
      </Link>
    </footer>
  );
};
