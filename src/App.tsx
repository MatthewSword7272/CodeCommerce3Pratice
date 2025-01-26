import Hero from "./components/Hero";
import ImageSlider from "./components/ImageSlider";
import NavBar from "./components/NavBar";
import Offers from "./components/Offers";
import Plan from "./components/Plan";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Offers/>
      <Plan/>
      <ImageSlider/>
    </>
  );
}

export default App;
