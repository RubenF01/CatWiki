import RatingItem from "./RatingItem";

type Props = {
  title?: string;
  value?: number;
};

const RatingContainer = ({ title, value }: Props) => {
  const ratingQuantity = (rating: number | undefined) => {
    if (rating === undefined) {
      return null;
    }
    const fullItems = rating;
    const ratings = new Array(5).fill(undefined);

    return ratings.map((item, index) => (
      <RatingItem
        key={index}
        color={index + 1 > fullItems ? "bg-[#E0E0E0]" : "bg-[#544439]"}
      />
    ));
  };
  return (
    <div className="flex items-center w-[330px] md:w-[500px] justify-between">
      <h2 className="font-bold">{title}:</h2>
      <div className={`flex items-center gap-x-2`}>{ratingQuantity(value)}</div>
    </div>
  );
};

export default RatingContainer;
