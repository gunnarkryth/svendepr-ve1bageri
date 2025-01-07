import { About } from "../components/about/About";
import { Carousel } from "../components/carousel/Carousel";
import { Newsletter } from "../components/newsletter/Newsletter";

export const Home = () => {
  return (
    <div>
      <Carousel />
      <About />
      <Newsletter/>
    </div>
  );
};
