import Image from "next/image";

function IgImage({ url, author }) {
  return (
    <Image
      src={url}
      alt={`photo by ${author}`}
      width={300}
      height={300}
      objectFit="cover"
    />
  );
}

export default IgImage;
