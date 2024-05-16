import Link from "next/link";
import Image from "next/image";

import style from "./tech.module.css";

import techList from "../../data/tech.json";

export function Tech() {
  const prefixURL = "./icons/tech/";
  const suffixURL = "-colored.svg";

  return (
    <div className={style.container}>
      <div>
        {techList.map((tech) => (
          <Link
            inert
            className={style.link}
            key={tech.id}
            href={tech.url}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className={style.image}
              src={`${prefixURL}${tech.id}${suffixURL}`}
              width="36"
              height="36"
              alt={tech.name}
            />
          </Link>
        ))}
      </div>
      <div>
        {techList.map((tech) => (
          <Link
            inert
            className={style.link}
            key={tech.id}
            href={tech.url}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className={style.image}
              src={`${prefixURL}${tech.id}${suffixURL}`}
              width="36"
              height="36"
              alt={tech.name}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
