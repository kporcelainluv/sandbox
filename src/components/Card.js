import React from "react";
import { Button } from "./Button";

export const Card = ({ description, color, date, time, hashtags }) => {
  return (
    <div className="card">
      <div className="card__color" />
      <div className="card__content">
        <p className="card__description">{description}</p>
        <div className="card__date-wrap">
          <span className="card__date">{date} </span>
          <span className="card__time">{time} </span>
          <span className="card__hashtag">{hashtags}</span>
        </div>
      </div>
      <div className="card__extra-content">
        <Button text={"Избранное"} classname="button--yellow" />
        <Button text={"Удоли"} classname="button--orange" />
      </div>
    </div>
  );
};
