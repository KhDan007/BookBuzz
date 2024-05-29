import search from "../../../img/icons/search.svg";
import '../../../css/header.css'

export const Header = () => {
  return (
    <header>
      <div className="flex">
        <div>
          <h1 className="home__title">Home</h1>
          <ul className="flex">
            <li>For you</li>
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
