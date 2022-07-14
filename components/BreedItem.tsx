/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

type Props = {
  name?: string;
  description?: string;
  image?: { url?: string };
  index: number;
  id?: string;
};

const BreedItem = (props: Props) => {
  return (
    <div className="flex flex-col items-center md:items-start md:flex-row md:space-x-[46px]">
      <img
        className="w-[170px] h-[170px] rounded-3xl object-cover mb-4 md:mb-0"
        src={props.image?.url}
        alt={props.name}
      />
      <div className="space-y-[24px] text-[#291507]">
        <Link href={"/breeds/" + props.id}>
          <h1 className="text-4xl font-semibold text-center cursor-pointer md:text-left">
            <span>{props.index + 1}.</span> {props.name}
          </h1>
        </Link>
        <p className="text-xs xl:text-lg font-medium w-[300px] md:w-[400px] xl:w-[888px] leading-relaxed xl:leading-normal cursor-default text-[#291507]">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default BreedItem;
