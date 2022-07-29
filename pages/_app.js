import "../styles/globals.css";
import "../styles/Header.scss";
import "../styles/Navigation.scss";
import "../styles/Hero.scss";
import "../styles/Feature.scss";
import "../styles/About.scss";
import "../styles/auth/auth.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
