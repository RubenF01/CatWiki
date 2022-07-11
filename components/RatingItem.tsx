type Props = {
  color: string;
};

const RatingItem = ({ color }: Props) => {
  return <div className={`${color} w-[60px] h-3 rounded-xl`} />;
};

export default RatingItem;
