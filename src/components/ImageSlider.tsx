import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Slider from "react-slick";

const slides = [
  {
    url: "https://images.unsplash.com/photo-1464093515883-ec948246accb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2659&q=80",
    title: "Lobster",
  },
  {
    url: "https://images.unsplash.com/photo-1512132411229-c30391241dd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    title: "Sushi",
  },
  {
    url: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    title: "Pasta",
  },
  {
    url: "https://images.unsplash.com/photo-1539136788836-5699e78bfc75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    title: "Salmon",
  },
];

interface ArrowProps {
  onClick?: () => void;
}

function PrevArrow(props: ArrowProps) {
  const { onClick } = props;

  return (
    <div
      className="absolute top-1/2 left-2 -translate-y-1/2 z-10 cursor-pointer bg-black/20 rounded-full p-2 hover:bg-black/40 transition-colors"
      onClick={onClick}
    >
      <BsChevronCompactLeft size={24} color="white" />
    </div>
  );
}

function NextArrow(props: ArrowProps) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-2 -translate-y-1/2 z-10 cursor-pointer bg-black/20 rounded-full p-2 hover:bg-black/40 transition-colors"
      onClick={onClick}
    >
      <BsChevronCompactRight size={24} color="white" />
    </div>
  );
}

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    fade: true,
  };

  return (
    <div
      className={
        "relative max-w-[75rem] h-[36.25rem] w-full m-auto mb-32 py-16 px-4"
      }
    >
      <Slider className={""} {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="h-1/2">
            <img
              src={slide.url}
              alt={slide.title}
              className="rounded-2xl object-cover aspect-[21/9]"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
