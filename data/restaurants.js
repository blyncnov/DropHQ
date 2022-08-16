import ImageTwo from "../public/assets/images/res-2.jpeg";
import ImageThree from "../public/assets/images/res-3.avif";
import ImageFour from "../public/assets/images/res-4.avif";

const Restaurants = [
  {
    id: 1,
    name: "Mhunis Kitchen",
    desc: "Fried Rice and Turkey, Salad and Fine Wines",
    address:
      "1st Floor, Jalan Pahlawan, Taman Pahlawan, 50480 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur",
    phone: "03-897-9000",
    website: "https://www.mhunis.com/",
    openingHours: "11:00 AM - 11:00 PM",
    cuisine: "Asian",
    price: "$100",
    image: ImageTwo,
    rating: 4.5,
    menu: [
      {
        id: 1,
        name: "Bread",
        price: 250,
      },
      {
        id: 2,
        name: "Jollof & Rice",
        price: 100,
      },
      {
        id: 3,
        name: "Snacks",
        price: 800,
      },
      {
        id: 4,
        name: "Table Water",
        price: 100,
      },
      {
        id: 5,
        name: "Chivita",
        price: 400,
      },
      {
        id: 6,
        name: "Turkey",
        price: 1500,
      },
    ],
    reviews: [
      {
        id: 1,
        name: "John Doe",
        rating: 4,
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        id: 2,
        name: "Jane Doe",
        rating: 5,
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
    reviewsCount: 0,
    reviewsAverage: 0,
  },
  {
    id: 2,
    name: "Bamboo Kitchen",
    desc: "Fried Rice and Turkey, Salad and Fine Wines",
    address:
      "1st Floor, Jalan Pahlawan, Taman Pahlawan, 50480 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur",
    phone: "03-897-9000",
    website: "https://www.bamboo.com/",
    openingHours: "11:00 AM - 11:00 PM",
    cuisine: "Local",
    price: "$$",
    image: ImageThree,
    rating: 4.5,
    menu: [
      {
        id: 1,
        name: "Jollof & Rice",
        price: 100,
      },

      {
        id: 2,
        name: "Table Water",
        price: 100,
      },
      {
        id: 3,
        name: "Chivita",
        price: 400,
      },

      {
        id: 4,
        name: "Egg",
        price: 100,
      },
    ],
    reviews: [
      {
        id: 1,
        name: "John Doe",
        rating: 4,
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        id: 2,
        name: "Jeremy Doe",
        rating: 5,
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
    reviewsCount: 0,
    reviewsAverage: 0,
  },
  {
    id: 3,
    name: "Boripe Restaurant",
    desc: "Fried Rice and Turkey, Salad and Fine Wines",
    address:
      "1st Floor, Jalan Pahlawan, Taman Pahlawan, 50480 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur",
    phone: "03-897-9000",
    website: "https://www.mhunis.com/",
    openingHours: "11:00 AM - 11:00 PM",
    cuisine: "Asian",
    price: "$$",
    image: ImageFour,
    rating: 4.5,
    menu: [
      {
        id: 1,
        name: "Bread",
        price: 250,
      },
      {
        id: 2,
        name: "Jollof & Rice",
        price: 100,
      },
      {
        id: 3,
        name: "Snacks",
        price: 800,
      },
    ],
    reviews: [
      {
        id: 1,
        name: "John Doe",
        rating: 4,
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        id: 2,
        name: "Jane Doe",
        rating: 5,
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
    reviewsCount: 0,
    reviewsAverage: 0,
  },
  {
    id: 4,
    name: "Hands Restaurant",
    desc: "Fried Rice and Turkey, Salad and Fine Wines",
    address:
      "1st Floor, Jalan Pahlawan, Taman Pahlawan, 50480 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur",
    phone: "03-897-9000",
    website: "https://www.mhunis.com/",
    openingHours: "11:00 AM - 11:00 PM",
    cuisine: "Asian",
    price: "$$",
    image: ImageTwo,
    rating: 4.5,
    menu: [
      {
        id: 1,
        name: "Snacks",
        price: 800,
      },
    ],
    reviews: [
      {
        id: 1,
        name: "John Doe",
        rating: 4,
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        id: 2,
        name: "Jane Doe",
        rating: 5,
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
    reviewsCount: 0,
    reviewsAverage: 0,
  },
  {
    id: 5,
    name: "Madam Spicy",
    desc: "Fried Rice and Turkey, Salad and Fine Wines",
    address:
      "1st Floor, Jalan Pahlawan, Taman Pahlawan, 50480 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur",
    phone: "03-897-9000",
    website: "https://www.mhunis.com/",
    openingHours: "11:00 AM - 11:00 PM",
    cuisine: "Asian",
    price: "$$",
    image: ImageTwo,
    rating: 4.5,
    menu: [
      {
        id: 1,
        name: "Bread",
        price: 250,
      },
      {
        id: 2,
        name: "Jollof & Rice",
        price: 100,
      },

      {
        id: 3,
        name: "Salad",
        price: 150,
      },
      {
        id: 4,
        name: "Chicken",
        price: 1100,
      },
    ],
    reviews: [
      {
        id: 1,
        name: "John Doe",
        rating: 4,
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        id: 2,
        name: "Jane Doe",
        rating: 5,
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
    reviewsCount: 0,
    reviewsAverage: 0,
  },
];
export default Restaurants;
