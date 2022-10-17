import Image from "next/image";

function SliderImage({ src, alt }) {
  return (
    <Image src={src} alt={alt} width="100%" height="100%" objectFit="contain" />
  );
}

export default SliderImage;
