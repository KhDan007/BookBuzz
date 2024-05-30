import search from "../../../img/icons/search.svg";

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
        <div className="header__search">
          <div className="header__image">
            <img src={search} alt="" />
          </div>
        </div>
        <div className="header__image2">
          <img src={search} alt="" />
        </div>
      </div>
    </header>
  );
};
