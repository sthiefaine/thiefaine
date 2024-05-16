"use client";
import style from "./pageTitle.module.css";
import { usePathname } from "next/navigation";
export default function PageTitle({ children }: { children: string }) {
  const pageName = usePathname() ?? null;
  return (
    <span className={style.container}>
      <h2 className={`${style.title} ${pageName.substring(1)}`}>{children}</h2>
    </span>
  );
}
