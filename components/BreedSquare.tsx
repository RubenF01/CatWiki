import Image from "next/image";
import Link from "next/link";

type Props = {
  name: string;
  image: {
    url: string;
  };
};

const BreedSquare = ({ name, image }: Props) => {
  return (
    <div>
      <div
        className={`rounded-3xl w-[220px] h-[220px] overflow-hidden relative ${
          name === "Bengal" ? "" : ""
        } `}
      >
        <Image src={image.url} alt={name} layout="fill" objectFit="cover" />
      </div>
      <Link href="#">
        <a className="block pt-5 font-semibold font-montserrat text-[#291507]">
          {name}
        </a>
      </Link>
    </div>
  );
};

export default BreedSquare;
