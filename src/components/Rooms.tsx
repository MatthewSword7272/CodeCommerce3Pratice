import { ImageMasonaryGrid } from "./ImageMasonaryGrid";
import SideContent from "./SideContent";

const images = [
  {
    url: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    span: 1
  },
  {
    url: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    span: 2
  },
  {
    url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    span: 1
  }
];

const Rooms = () => {
  return (
    <div className="bg-blue-100 my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4">
      <div className="max-w-[1400px] h-[500px] mx-auto grid lg:grid-cols-3 gap-4">
        <div className="lg:top-20 relative lg:col-span-1 col-span-2">
          <SideContent
            title="Find Interior Rooms"
            paragraph="      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut nisi
            quisquam a reprehenderit, iste sint enim libero obcaecati illo minima
            minus consequuntur dolorum perspiciatis! Consectetur rem modi eius
            officiis praesentium."
          />
        </div>
        <ImageMasonaryGrid images={images} className="gap-2 col-span-2"/>
      </div>
    </div>
  );
};

export default Rooms;
