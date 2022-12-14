import React from "react";
import style from "../HeroItem/HeroItem.module.scss";
import { Link } from "react-router-dom";
export default function HeroItem({ nickname, img_hero, _id }) {
  return (
    <div className={style.hero_item}>
      <Link to={`/hero/${_id}`}>
        <h2>{nickname}</h2>
        <img src={`${process.env.REACT_APP_API_URL}/${img_hero}`} alt='' />
      </Link>
    </div>
  );
}
