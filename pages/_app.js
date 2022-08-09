import "../styles/globals.css";

// Layout
import "../styles/Header.scss";
import "../styles/Navigation.scss";
import "../styles/Footer.scss";

// Index
import "../styles/Feature.scss";
import "../styles/Hero.scss";

// 404 Page
import "../styles/ErrorPage.scss";

// Authentication
import "../styles/auth/auth.scss";

// Slider
import "../styles/util/slider.scss";

// Restaurant
import "../styles/restaurants.scss";
import "../styles/restaurants/single.scss";
import "../styles/restaurants/index.scss";

// Cart
import "../styles/cart/index.scss";
import "../styles/cart/OrderDesc.scss";

// Redux
import store from "../redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
