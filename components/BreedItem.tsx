/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

type Props = {
  name: string;
  description: string;
  image: { url: string };
  index: number;
  id: string;
};

const BreedItem = (props: Props) => {
  return (
    <div className="flex space-x-[46px]">
      <img
        className="w-[170px] h-[170px] rounded-3xl object-cover"
        src={props.image.url}
        alt={props.name}
      />
      <div className="space-y-[24px] text-[#291507]">
        <Link href={"/breeds/" + props.id}>
          <h1 className="text-4xl font-semibold cursor-pointer">
            <span>{props.index + 1}.</span> {props.name}
          </h1>
        </Link>
        <p className="text-lg font-medium w-[888px] cursor-default">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default BreedItem;
