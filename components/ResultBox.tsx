import useStore from "../store/store";
import Link from "next/link";

const ResultBox = () => {
  const suggestions = useStore((state) => state.suggestions);
  const isOpen = useStore((state) => state.isOpen);
  const setIsOpen = useStore((state) => state.setIsOpen);
  const setSearchText = useStore((state) => state.setSearchText);
  const updateSearchAmount = useStore((state) => state.updateSearchAmount);

  return (
    <div
      className={`w-[395px] bg-white absolute md:left-[29px] md:top-[270px] xl:top-[410px] xl:left-[108px] rounded-3xl py-2 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="w-[385px] max-h-[220px] overflow-y-scroll rounded-3xl custom-scrollbar">
        <div className="text-lg font-montserrat space-y-[37px] pl-[24px] flex flex-col">
          {suggestions.length > 0 ? (
            suggestions.map((suggestion) => (
              <Link href={"/breeds/" + suggestion.id} key={suggestion.name}>
                <a
                  onClick={() => {
                    setIsOpen(false);
                    setSearchText("");
                    updateSearchAmount(suggestion.id);
                  }}
                >
                  {suggestion.name}
                </a>
              </Link>
            ))
          ) : (
            <p>No matches!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultBox;
