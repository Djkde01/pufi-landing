import Image from "next/image";

function SliderImage({ src, alt }) {
  return <Image src={src} alt={alt} layout="fill" objectFit="cover" />;
}

export default SliderImage;
