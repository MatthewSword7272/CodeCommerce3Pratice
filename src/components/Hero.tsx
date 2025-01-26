import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <div className={"w-full h-screen"}>
      <img
        src="https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg"
        alt=""
        className={"object-cover w-full h-full"}
      />
      <HeroContent />
    </div>
  );
};

export default Hero;


