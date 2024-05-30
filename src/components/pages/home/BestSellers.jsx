import { useState } from "react";
import image1 from "../../../img/home/2.jpg";
import star from "../../../img/icons/star.svg";

export const BestSellers = () => {
  const [rating, setRating] = useState(4.5);

  return (
    <section className="bestsellers container">
      <div className="flex bestsellers__head">
        <h2 className="bestsellers__title">Best-sellers</h2>
        <div className="bestsellers__more">See more</div>
      </div>
      <div className="bestsellers__items">
        <div className="bestsellers__elem">
          <div className="bestsellers__image">
            <img src={image1} alt="" />
          </div>
          <div className="bestsellers__name">To Kill A Mockingbird</div>
          <div className="flex bestsellers__info">
            <div className="bestsellers__price">Free</div>
            <div className="flex bestsellers__rating">
              <div className="bestsellers__star">
                <img src={star} alt="" />
              </div>
              {rating}
            </div>
          </div>
        </div>
        <div className="bestsellers__elem">
          <div className="bestsellers__image">
            <img src={image1} alt="" />
          </div>
          <div className="bestsellers__name">To Kill A Mockingbird</div>
          <div className="flex bestsellers__info">
            <div className="bestsellers__price">Free</div>
            <div className="flex bestsellers__rating">
              <div className="bestsellers__star">
                <img src={star} alt="" />
              </div>
              {rating}
            </div>
          </div>
        </div>
        <div className="bestsellers__elem">
          <div className="bestsellers__image">
            <img src={image1} alt="" />
          </div>
          <div className="bestsellers__name">To Kill A Mockingbird</div>
          <div className="flex bestsellers__info">
            <div className="bestsellers__price">Free</div>
            <div className="flex bestsellers__rating">
              <div className="bestsellers__star">
                <img src={star} alt="" />
              </div>
              {rating}
            </div>
          </div>
        </div>
        <div className="bestsellers__elem">
          <div className="bestsellers__image">
            <img src={image1} alt="" />
          </div>
          <div className="bestsellers__name">To Kill A Mockingbird</div>
          <div className="flex bestsellers__info">
            <div className="bestsellers__price">Free</div>
            <div className="flex bestsellers__rating">
              <div className="bestsellers__star">
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
