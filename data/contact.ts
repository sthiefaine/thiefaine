import { CardWithIDType } from "@/types";

export const contactData: CardWithIDType[] = [
  {
    id: 1,
    title: "Watsapp",
    url: process.env.URL_WHATSAPP,
    image: "/icons/contact/whatsapp.png",
    color: "rgb(37, 211, 102)",
  },
  {
    id: 2,
    title: "Email",
    url: process.env.URL_EMAIL,
    image: "/icons/contact/email.png",
    color: "rgb(212, 70, 56)",
  },
  {
    id: 3,
    title: "Linkedin",
    url: "https://www.linkedin.com/in/thiefainesimonnou/",
    image: "/icons/contact/linkedin.png",
    color: "rgb(10, 102, 194)",
  },
];
