// import ImageOne from "../public/assets/brand/ScootScoot.svg";
// import ImageTwo from "../public/assets/brand/Storefront.svg";
// import ImageThree from "../public/assets/brand/iphone.svg";

import ImageOne from "../public/assets/brand/ScootScoot.svg";
import ImageTwo from "../public/assets/svg/Shop.svg";
import ImageThree from "../public/assets/svg/phone.svg";

export const Features = [
  {
    id: 1,
    icon: ImageOne,
    title: "Become a DropHQ Rider.",
    description:
      "As a delivery driver & dispatcher , you'll make reliable money—working anytime, anywhere.",
    link: "Start making money",
    url: "access/rider",
  },
  {
    id: 2,
    icon: ImageTwo,
    title: "Partner with DropHQ.",
    description:
      "Grow your business and reach new customers by partnering with us.",
    link: "Sign up your restaurant",
    url: "auth/signup",
  },
  {
    id: 3,
    icon: ImageThree,
    title: "Try DropHQ App.",
    description:
      "Experience the best your neighborhood has to offer, all in one app.",
    link: "Download our app",
    url: "https://play.google.com/store/games/details?id=com.drop.dropapp",
  },
];

export default Features;
