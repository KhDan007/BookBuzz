import search from "../../../img/icons/search.svg";
import '../../../css/header.css'

export const Header = () => {
  return (
    <header>
      <div className="header">
        <div>
          <h1 className="header__title">Home</h1>
          <ul className="header__list">
            <li className="active">For you</li>
            <li>e-Books</li>
          </ul>
        </div>
        <div>
          <div className="header__image">
            <img src={search} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};
