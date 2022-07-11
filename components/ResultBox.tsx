import useStore from "../store/store";
import Link from "next/link";

const ResultBox = () => {
  const suggestions = useStore((state) => state.suggestions);
  const isOpen = useStore((state) => state.isOpen);
  const setIsOpen = useStore((state) => state.setIsOpen);
  const setSearchText = useStore((state) => state.setSearchText);

  return (
    <div
      className={`w-[395px] bg-white absolute top-[410px] left-[108px] rounded-3xl py-2 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="w-[385px] max-h-[220px] overflow-y-scroll rounded-3xl custom-scrollbar">
        <div className="text-lg font-montserrat space-y-[37px] pl-[24px] flex flex-col">
          {suggestions.map((suggestion) => (
            <Link href={"/breeds/" + suggestion.id} key={suggestion.name}>
              <a
                onClick={() => {
                  setIsOpen(false);
                  setSearchText("");
                }}
              >
                {suggestion.name}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultBox;
