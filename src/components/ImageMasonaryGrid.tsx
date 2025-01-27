interface ImageMasonaryGridProps {
  images: {
    url: string;
    span: number;
  }[];
  className?: string;
}

export function ImageMasonaryGrid({
  images,
  className,
}: ImageMasonaryGridProps) {
  return (
    <div className={"grid grid-cols-2 " + className}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.url}
          alt=""
          className={`row-span-${image.span} object-cover w-full h-full p-2`}
        />
      ))}
    </div>
  );
}
