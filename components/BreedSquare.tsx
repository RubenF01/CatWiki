/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

type Props = {
  name?: string;
  image?: {
    url?: string;
  };
  id?: string;
};

const BreedSquare = ({ name, image, id }: Props) => {
  return (
    <div>
      <Link href={"/breeds/" + id}>
        {image ? (
          <img
            src={image.url}
            alt={name}
            className="object-cover rounded-3xl w-[135px] h-[135px] md:w-[170px] md:h-[170px] xl:w-[220px] xl:h-[220px] overflow-hidden"
          />
        ) : (
          <div></div>
        )}
      </Link>
      <Link href={"/breeds/" + id}>
        <a className="block pt-5 font-semibold font-montserrat text-[#291507]">
          {name}
        </a>
      </Link>
    </div>
  );
};

export default BreedSquare;
