import { ImageMasonaryGrid } from "./ImageMasonaryGrid";
import SideContent from "./SideContent";

const images = [
  "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1368&q=80",
  "https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80",
  "https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1673&q=80",
];
const imageSpans = [
  { url: images[0], span: 3 },
  { url: images[1], span: 2 },
  { url: images[2], span: 2 },
  { url: images[3], span: 3 },
  { url: images[4], span: 2 },
];

const Plan = () => {
  return (
    <div
      className={"max-w-[87.5rem] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4 items-center"}
    >
      <ImageMasonaryGrid images={imageSpans} className="grid-rows-6 h-[80vh]"/>

      {/* Passing Title, Paragraph and Buttons */}
      <SideContent title="Plan Your Next Trip" paragraph={` Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, laboriosam enim ab quisquam consectetur autem
          distinctio quo veritatis. Consequatur iste itaque placeat id corporis
          maiores enim recusandae consectetur incidunt autem?`}>
            {/* Buttons go here */}
        <button className="border-black">Learn More</button>
        <button className="bg-black text-white">Book Your Trip</button>
      </SideContent>
    </div>
  );
};

export default Plan;
