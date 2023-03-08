import Image from "next/image";

const randomNumber = () => Math.floor(Math.random() * 122) + 1;

export function RandomFox(): JSX.Element {
  const image = `https://randomfox.ca/images/${randomNumber()}.jpg`;

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
