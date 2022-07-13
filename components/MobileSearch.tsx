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
      } fixed inset-0 bg-red-600 h-[412px] rounded-b-xl`}
    >
      <div className="max-w-[339px] mx-auto flex justify-end pt-3">
        <div onClick={() => setIsMobileSearchOpen(false)}>
          <Close />
        </div>
      </div>
      <div>
        <div className="flex items-center rounded-full max-w-[91px] h-[30px] bg-white mt-[18px]">
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
