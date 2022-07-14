import useStore from "../store/store";
import Close from "../public/close.svg";
import Search from "../public/search.svg";

const MobileSearch = () => {
  const breeds = useStore((state) => state.breeds);
  const searchText = useStore((state) => state.searchText);
  const setSearchText = useStore((state) => state.setSearchText);
  const setSuggestions = useStore((state) => state.setSuggestions);
  const setIsMobileSearchOpen = useStore(
    (state) => state.setIsMobileSearchOpen
  );
  const isMobileSearchOpen = useStore((state) => state.isMobileSearchOpen);

  const onChangeHandler = (text: string) => {
    let matches: object[] = [];
    if (text.length > 0) {
      matches = breeds.filter((breed) => {
        const regex = new RegExp(`${text}`, "gi");
        return breed.name.match(regex);
      });
    }
    setSearchText(text);
    setSuggestions(matches);
  };

  return (
    <div
      className={`${
        isMobileSearchOpen ? "" : "hidden"
      } fixed inset-0 bg-white h-[412px] rounded-b-xl`}
    >
      <div className="w-full flex justify-end pr-[19px] pt-[7px] pb-[30px]">
        <div
          className="h-[45px] w-[45px] flex justify-center items-center bg-[#9797971a] rounded-xl"
          onClick={() => setIsMobileSearchOpen(false)}
        >
          <Close />
        </div>
      </div>
      <div className="max-w-[339px] mx-auto">
        <div className="flex items-center rounded-full max-w-[339px] h-[45px] bg-white border-black border-[1px]">
          <input
            value={searchText}
            placeholder="Enter your breed"
            onChange={(e) => onChangeHandler(e.target.value)}
            className="w-full h-full text-xs rounded-full font-montserrat focus:outline-none pl-[13px]"
            type="text"
          />
          <Search className="mr-[13px] w-[25px]" />
        </div>
      </div>
    </div>
  );
};

export default MobileSearch;
