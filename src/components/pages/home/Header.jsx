import { useNavigate } from 'react-router-dom';
import search from "../../../img/icons/search.svg";

export const Header = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();

  return (
    <header>
      <div className="header">
        <div>
          <h1 className="header__title">BookBuzz</h1>
          <ul className="header__list">
            <li
              className={activeTab === "forYou" ? "active" : ""}
              onClick={() => setActiveTab("forYou")}
            >
              For you
            </li>
            <li
              className={activeTab === "eBooks" ? "active" : ""}
              onClick={() => setActiveTab("eBooks")}
            >
              e-Books
            </li>
          </ul>
        </div>
        {/* <button className="header__search">
          <div className="header__image">
            <img src={search} alt="search icon" />
          </div>
        </button> */}
        <div onClick={() => navigate('/search')} className="header__image2">
          <img src={search} alt="search icon" />
        </div>
      </div>
    </header>
  );
};
