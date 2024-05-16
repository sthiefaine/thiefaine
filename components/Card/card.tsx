/* eslint-disable react/no-unescaped-entities */

import { Link } from "next-view-transitions";
import Image from "next/image";
import style from "./card.module.css";
import { rgbToRgba } from "@/helpers/colors";
import { CardType } from "@/types";

export function Card({
  title,
  description,
  image,
  url,
  color,
  children,
  tr,
  rel,
}: CardType & { children?: React.ReactNode }) {
  return (
    <>
      <Link href={url ?? "/"} className={style.link} rel={rel}>
        <section
          className={style.container}
          style={
            color
              ? {
                  border: `2px solid ${color}`,
                  backgroundColor: rgbToRgba(color, 0.8),
                }
              : {}
          }
        >
          {image && (
            <Image
              className={style.image}
              src={image}
              width="80"
              height="80"
              priority={true}
              quality={100}
              loading="eager"
              alt={title}
            />
          )}
          {children ?? null}
          <span className={style.informations}>
            <h1 className={`${style.title} ${tr ?? null}`}>{title}</h1>
            {description && <p className={style.text}>{description}</p>}
          </span>
        </section>{" "}
      </Link>
    </>
  );
}
