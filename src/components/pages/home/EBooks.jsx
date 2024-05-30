import { useState } from "react";
import image1 from "../../../img/home/2.jpg";
import star from "../../../img/icons/star.svg";

export const EBooks = () => {
  const [sortBy, setSortBy] = useState("");
  const [filters, setFilters] = useState({ genre: "", language: "" });
  const [data, setData] = useState([
    {
      id: 1,
      name: "Black Leopard Red Wolf 1",
      price: 1,
      author: "Marlon James",
      rating: 4.5,
      genre: "sci-fi",
      language: "russian",
    },
    {
      id: 2,
      name: "Black Leopard Red Wolf 2",
      price: 4,
      author: "Marlon James",
      rating: 4.5,
      genre: "fiction",
      language: "english",
    },
    {
      id: 3,
      name: "Black Leopard Red Wolf 3",
      price: 2,
      author: "Marlon James",
      rating: 4.5,
      genre: "fiction",
      language: "japanese",
    },
    {
      id: 4,
      name: "Black Leopard Red Wolf 4",
      price: 0,
      author: "Marlon James",
      rating: 4.5,
      genre: "fiction",
      language: "english",
    },
  ]);

  const sortData = (data, criteria) => {
    switch (criteria) {
      case "name":
        return [...data].sort((a, b) => a.name.localeCompare(b.name));
      case "rating":
        return [...data].sort((a, b) => b.rating - a.rating);
      case "price":
        return [...data].sort((a, b) => a.price - b.price);
      case "author":
        return [...data].sort((a, b) => a.author.localeCompare(b.author));
      default:
        return data;
    }
  };

  const filterData = (data, filters) => {
    return data.filter((item) => {
      return (
        (filters.genre ? item.genre === filters.genre : true) &&
        (filters.language ? item.language === filters.language : true)
      );
    });
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSortChange = (criteria) => {
    setSortBy(criteria);
  };

  const filteredData = filterData(data, filters);
  const sortedData = sortData(filteredData, sortBy);

  return (
    <div className="ebooks container">
      <div className="ebooks__filters flex">
        <select
          className="ebooks__select"
          value={sortBy}
          onChange={(e) => handleSortChange(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="rating">Rating</option>
          <option value="price">Price</option>
          <option value="author">Author</option>
        </select>
        <select
          className="ebooks__select"
          name="genre"
          value={filters.genre}
          onChange={handleFilterChange}
        >
          <option value="">All Genres</option>
          <option value="sci-fi">Sci-fi</option>
          <option value="fiction">Fiction</option>
        </select>
        <select
          className="ebooks__select"
          name="language"
          value={filters.language}
          onChange={handleFilterChange}
        >
          <option value="">All Languages</option>
          <option value="english">English</option>
          <option value="russian">Russian</option>
          <option value="japanese">Japanese</option>
        </select>
      </div>
      <ul className="ebooks__content flex">
        {sortedData.map((item) => (
          <li className="ebooks__elem" key={item.id}>
            <div className="ebooks__image">
              <img src={image1} alt="" />
              <div className="flex ebooks__rating">
                <img src={star} alt="" />
                <span>{item.rating}</span>
              </div>
            </div>
            <div className="ebooks__name">{item.name}</div>
            <div className="ebooks__author">{item.author}</div>
            <div className="ebooks__price">
              {item.price === 0 ? "Free" : "$" + item.price}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
