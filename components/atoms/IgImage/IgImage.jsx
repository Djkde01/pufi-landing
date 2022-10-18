import Image from "next/image";

function IgImage({ url, author }) {
  return (
    <Image
      src={url}
      alt={`photo by ${author}`}
      width={200}
      height={200}
      objectFit="cover"
    />
  );
}

export default IgImage;
