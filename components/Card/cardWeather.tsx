/* eslint-disable react/no-unescaped-entities */

import style from "./card.module.css";
import { CardType } from "@/types";

export function CardWeather({
  title,
  description,
  emoji,
}: CardType & { emoji: string }) {
  return (
    <>
      <section
        className={style.container}
        style={{
          margin: "20px",
          width: "90%",
        }}
      >
        {emoji && (
          <span
            style={{
              fontSize: "42px",
              margin: "0 10px",
              padding: "5px 0",
              width: "80px",
              height: "80px",
            }}
          >
            {emoji}
          </span>
        )}
        <span className={style.informations}>
          <h1 className={`${style.title}`}>{title}</h1>
          {description && <p className={style.text}>{description}</p>}
        </span>
      </section>
    </>
  );
}
