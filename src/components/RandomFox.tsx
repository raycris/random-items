import Image from "next/image";

type imageProps = { image: string };

export function RandomFox({ image }: imageProps): JSX.Element {
  return (
    <Image
      width={320}
      height={300}
      src={image}
      alt="Fox"
      className="mx-auto rounded-md bg-gray-300"
    />
  );
}
