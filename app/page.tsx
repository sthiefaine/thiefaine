"use server";
import { Tech } from "@/components/Tech/tech";
import { Card } from "@/components/Card/card";
import { cardList } from "@/data/home";
import { Weather } from "@/components/(server)/weather/weather";

export default async function Home() {
  return (
    <>
      <Tech />
      <main>
        {cardList.map((card) => (
          <Card key={card.id + card.title} {...card} />
        ))}
        <Weather />
      </main>
      <a
        style={{
          position: "fixed",
          bottom: "2px",
          marginLeft: "20%",
        }}
        href="https://storyset.com/business"
      >
        Business illustrations by Storyset
      </a>
    </>
  );
}
