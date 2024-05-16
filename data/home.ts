import { CardWithIDType } from "@/types";

export const cardList: CardWithIDType[] = [
  {
    id: 1,
    image: "./icons/categories/Contact us-bro.svg",
    title: "Contact",
    url: "/contact",
    description: "Email, WhatsApp, LinkedIn.",
    tr: "contact",
  },
  {
    id: 2,
    image: "./icons/categories/Storyboard-bro.svg",
    title: "Projets",
    url: "/projects",
    description: "Réalisations en développement web.",
    tr: "projects",
  },
  {
    id: 3,
    image: "./icons/categories/Resume-bro.svg",
    title: "CV",
    url: "/cv",
    description: "Afficher et télécharger",
    tr: "cv",
  },
];
