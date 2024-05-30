import { useState } from "react";
import image1 from "../../../img/home/2.jpg";
import star from "../../../img/icons/star.svg";

export const Arrivals = () => {
  const [rating, setRating] = useState(4.5);

  return (
    <section className="arrivals container">
      <div className="flex arrivals__head">
        <h2 className="arrivals__title">New Arrivals</h2>
        <div className="arrivals__more">See more</div>
      </div>
      <div className="arrivals__items">
        <div className="arrivals__elem">
          <div className="arrivals__image">
            <img src={image1} alt="" />
          </div>
          <div className="arrivals__name">To Kill A Mockingbird</div>
          <div className="flex arrivals__info">
            <div className="arrivals__price">Free</div>
            <div className="flex arrivals__rating">
              <div className="arrivals__star">
                <img src={star} alt="" />
              </div>
              {rating}
            </div>
          </div>
        </div>
        <div className="arrivals__elem">
          <div className="arrivals__image">
            <img src={image1} alt="" />
          </div>
          <div className="arrivals__name">To Kill A Mockingbird</div>
          <div className="flex arrivals__info">
            <div className="arrivals__price">Free</div>
            <div className="flex arrivals__rating">
              <div className="arrivals__star">
                <img src={star} alt="" />
              </div>
              {rating}
            </div>
          </div>
        </div>
        <div className="arrivals__elem">
          <div className="arrivals__image">
            <img src={image1} alt="" />
          </div>
          <div className="arrivals__name">To Kill A Mockingbird</div>
          <div className="flex arrivals__info">
            <div className="arrivals__price">Free</div>
            <div className="flex arrivals__rating">
              <div className="arrivals__star">
                <img src={star} alt="" />
              </div>
              {rating}
            </div>
          </div>
        </div>
        <div className="arrivals__elem">
          <div className="arrivals__image">
            <img src={image1} alt="" />
          </div>
          <div className="arrivals__name">To Kill A Mockingbird</div>
          <div className="flex arrivals__info">
            <div className="arrivals__price">Free</div>
            <div className="flex arrivals__rating">
              <div className="arrivals__star">
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
