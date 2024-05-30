import { useState } from "react";
import image1 from "../../../img/home/2.jpg";
import star from "../../../img/icons/star.svg";

export const RecentSearch = () => {
  const [rating, setRating] = useState(4.5);

  return (
    <section className="recent container">
      <h3 className="recent__subtitle">Based on Recent Search</h3>
      <div className="flex recent__head">
        <h2 className="recent__title">
          #Horror Fictions, Leo Tolstoy, Marlon James
        </h2>
        <div className="recent__more">See more</div>
      </div>
      <div className="recent__items">
        <div className="recent__elem">
          <div className="recent__image">
            <img src={image1} alt="" />
          </div>
          <div className="recent__name">To Kill A Mockingbird</div>
          <div className="flex recent__info">
            <div className="recent__price">Free</div>
            <div className="flex recent__rating">
              <div className="recent__star">
                <img src={star} alt="" />
              </div>
              {rating}
            </div>
          </div>
        </div>
        <div className="recent__elem">
          <div className="recent__image">
            <img src={image1} alt="" />
          </div>
          <div className="recent__name">To Kill A Mockingbird</div>
          <div className="flex recent__info">
            <div className="recent__price">Free</div>
            <div className="flex recent__rating">
              <div className="recent__star">
                <img src={star} alt="" />
              </div>
              {rating}
            </div>
          </div>
        </div>
        <div className="recent__elem">
          <div className="recent__image">
            <img src={image1} alt="" />
          </div>
          <div className="recent__name">To Kill A Mockingbird</div>
          <div className="flex recent__info">
            <div className="recent__price">Free</div>
            <div className="flex recent__rating">
              <div className="recent__star">
                <img src={star} alt="" />
              </div>
              {rating}
            </div>
          </div>
        </div>
        <div className="recent__elem">
          <div className="recent__image">
            <img src={image1} alt="" />
          </div>
          <div className="recent__name">To Kill A Mockingbird</div>
          <div className="flex recent__info">
            <div className="recent__price">Free</div>
            <div className="flex recent__rating">
              <div className="recent__star">
                <img src={star} alt="" />
              </div>
              {rating}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
