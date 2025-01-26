import { ImageMasonaryGrid } from "./ImageMasonaryGrid";




const Plan = () => {
  return (
    <div
      className={"max-w-[87.5rem] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4"}
    >
      <ImageMasonaryGrid />
      <div>
        <h3 className={""}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, laboriosam enim ab quisquam consectetur autem
          distinctio quo veritatis. Consequatur iste itaque placeat id corporis
          maiores enim recusandae consectetur incidunt autem?
        </h3>
      </div>
    </div>
  );
};

export default Plan;
