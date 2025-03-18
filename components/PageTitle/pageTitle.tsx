"use client";
import { Link } from "next-view-transitions";
import style from "./pageTitle.module.css";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
export default function PageTitle({ children }: { children: string }) {
  const pageName = usePathname() ?? null;
  return (
    <span className={style.container}>
      <Link href="/" className={style.link} aria-label="Page d'accueil">
        <ArrowLeft />
        <span className={style.linkText}>Retour</span>
      </Link>
      <h2 className={`${style.title} ${pageName.substring(1)}`}>{children}</h2>
    </span>
  );
}

