import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ImageSlider from "./components/ImageSlider";
import NavBar from "./components/NavBar";
import Offers from "./components/Offers";
import Plan from "./components/Plan";
import Rooms from "./components/Rooms";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Offers/>
      <Plan/>
      <Rooms/>
      <ImageSlider/>
      <Footer></Footer>
    </>
  );
}

export default App;
