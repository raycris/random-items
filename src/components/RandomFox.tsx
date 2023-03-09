import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type imageProps = { image: string };

export function Lazyimage({ image }: imageProps): JSX.Element {
  const node = useRef<HTMLImageElement>(null);
  const [src, setSrc] = useState(
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
  );

  // Para hacer el Lazy loading
  useEffect(() => {
    // Nuevo observador
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSrc(image)
        }
      });
    });

    if (node.current) {
      observer.observe(node.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [image]);

  return (
    <Image
      ref={node}
      width={320}
      height={300}
      src={src}
      alt="Fox"
      className="mx-auto rounded-md bg-gray-300"
    />
  );
}
