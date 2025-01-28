export interface ITarotCard {
  id: string;
  name: string;
  image: any; // Type for required image assets
}

export const tarotCards: ITarotCard[] = [
  {
    id: "0",
    name: "The Fool",
    image: require("@/assets/images/tarot_cards/Ace_of_cups.jpg"),
  },
];
