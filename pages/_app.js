import "../styles/globals.css";

// Layout
import "../styles/Header.scss";
import "../styles/Navigation.scss";
import "../styles/Hero.scss";
import "../styles/Footer.scss";

// Index
import "../styles/Feature.scss";
import "../styles/restaurants.scss";
import "../styles/ErrorPage.scss";
import "../styles/auth/auth.scss";
import "../styles/util/slider.scss";
import "../styles/restaurants/single.scss";

// Cart
import "../styles/cart/index.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
