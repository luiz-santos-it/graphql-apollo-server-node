import { Book, Review, Author } from "./generated/graphql";

const books: Book[] = [
  {
    id: "1",
    title: "The Awakening",
    platform: ["Print", "eBook", "Audiobook"],
  },
  {
    id: "2",
    title: "City of Glass",
    platform: ["Print", "eBook"],
  },
];

const reviews: Review[] = [
  {
    id: "1",
    rating: 5,
    content: "A captivating story with deep characters.",
  },
  {
    id: "2",
    rating: 4,
    content: "Well-written and engaging, but a bit slow in the middle.",
  },
];

const authors: Author[] = [
  {
    id: "1",
    name: "Kate Chopin",
    verified: true,
  },
  {
    id: "2",
    name: "Paul Auster",
    verified: false,
  },
];

export { books, reviews, authors };
