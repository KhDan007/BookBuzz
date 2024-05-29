import search from "../../../img/icons/search.svg";

export const Header = () => {
  return (
    <header>
      <div className="flex">
        <div>
          <h1>Home</h1>
          <ul className="flex">
            <li>For you</li>
            <li>e-Books</li>
          </ul>
        </div>
        <div>
          <div className="">
            <img src={search} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};
