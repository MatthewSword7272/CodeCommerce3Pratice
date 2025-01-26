export default function HeroContent() {
  return (
    <div className={"bg-black/30 absolute top-0 left-0 w-full h-full"}>
      <div
        className={
          "text-white absolute top-0 md:left-[10%] max-w-[68.75rem] h-full flex flex-col justify-center m-auto p-4"
        }
      >
        <p>All Inclusive</p>
        <h1>Private Beaches & Gateways</h1>
        <p className={"max-w-[37.5rem] drop-shadow-2xl "}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim culpa
          unde tempora repellat, porro praesentium maxime consequatur
          voluptatum, laudantium aut possimus iste nulla saepe, in sit fugit
          dolorum eveniet vero.
        </p>
        <button className={"w-fit bg-white text-black"}>Reserve Now</button>
      </div>
    </div>
  );
}
