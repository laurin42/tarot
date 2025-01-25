export interface TarotCard {
  id: string;
  name: string;
  description: string;
}

export const tarotCards: TarotCard[] = [
  {
    name: "The Fool",
    image: require("@/assets/images/tarot/the-fool.jpg"),
  },
];
