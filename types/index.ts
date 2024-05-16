export type CardType = {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  color?: string;
  tr?: string;
  rel?: string;
};

export type CardWithIDType = CardType & { id: number };
