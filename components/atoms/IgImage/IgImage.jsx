import Image from "next/image";

function IgImage() {
  return (
    <Image
      src="https://picsum.photos/200"
      alt="Random image"
      width={200}
      height={200}
      className="igimage"
    />
  );
}

export default IgImage;
