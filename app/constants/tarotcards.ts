export interface ITarotCard {
  id: string;
  name: string;
  description: string;
  image: any; // Type for required image assets
}

export const tarotCards: ITarotCard[] = [
  {
    id: "0",
    name: "The Fool",
    description: "New beginnings, innocence, spontaneity, and free spirit",
    image: require("@/assets/images/tarot_cards/Ace_of_cups.jpg"),
  },
];
