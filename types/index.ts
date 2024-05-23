export type CardType = {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  color?: string;
  transi?: string;
  rel?: string;
};

export type CardWithIDType = CardType & { id: number };
