import { MouseEventHandler, useState } from "react";

import { Lazyimage } from "@/components/Lazyimage";

import Head from "next/head";

import { random } from "lodash";


const randomNumber = () => random(1, 123);

// generate simple unique id
const generateId = () => Math.random().toString(36).substring(2, 9);

export default function Home() {
  const [images, setImages] = useState<Array<IFoxImageItems>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = () => {
    const newImageItem: IFoxImageItems = {
      id: generateId(),
      url: `https://randomfox.ca/images/${randomNumber()}.jpg`,
    };
    setImages([...images, newImageItem]);
    window.plausible("add_fox")
  };

  return (
    <>
      <Head>
        <title>Radom fox</title>
        <meta name="description" content="Generated by Radom fox" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
      </Head>
      <main>
        <h1 className="text-3xl font-bold underline">
          Republica Dominicana Campeón
        </h1>
        <button onClick={addNewFox}>Add new Fox</button>
        {images.map((item, index) => (
          <div className="p-4" key={item.id}>
            <Lazyimage
              src={item.url}
              width={320}
              height={320}
              className="mx-auto rounded-md bg-gray-300"
              onClick={() => console.log("loco")}
              onLazyLoad={(img) => {
                console.log(`Image #${index + 1} cargada. Nodo:`, img);
              }}
            />
          </div>
        ))}
      </main>
    </>
  );
}
