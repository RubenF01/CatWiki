/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useEffect } from "react";
import useStore from "../store/store";
import Layout from "../components/Layout";
import Logo from "../public/CatwikiLogo.svg";
import LogoMobile from "../public/CatwikiLogoMobile.svg";
import Search from "../public/search.svg";
import ResultBox from "../components/ResultBox";
import ArrowForward from "../public/arrow-forward.svg";
import BreedSquare from "../components/BreedSquare";
import Link from "next/link";
import { useMedia } from "react-use";

const Home: NextPage = () => {
  const breeds = useStore((state) => state.breeds);
  const getBreeds = useStore((state) => state.getBreeds);
  const searchText = useStore((state) => state.searchText);
  const setSearchText = useStore((state) => state.setSearchText);
  const setSuggestions = useStore((state) => state.setSuggestions);
  const setIsOpen = useStore((state) => state.setIsOpen);
  const getTopTen = useStore((state) => state.getTopTen);
  const topTenSearches = useStore((state) => state.topTenSearches);
  const isWide = useMedia("(min-width: 1440px)", false);
  const isTablet = useMedia("(min-width: 768px)", false);

  useEffect(() => {
    getBreeds();
    getTopTen();
  }, [getBreeds, getTopTen]);

  const onChangeHandler = (text: string) => {
    let matches: object[] = [];
    if (text.length > 0) {
      setIsOpen(true);
      matches = breeds.filter((breed) => {
        const regex = new RegExp(`${text}`, "gi");
        return breed.name.match(regex);
      });
    } else {
      setIsOpen(false);
    }
    setSearchText(text);
    setSuggestions(matches);
  };

  const heroImageSelector = () => {
    if (isWide) return "/HeroImagelg.png";
    if (isTablet) return "/HeroImagemd.png";
    return "/HeroImagesm.png";
  };

  return (
    <Layout title="CatWiki">
      <div>
        {/* Breed search */}
        <div className="max-w-[339px] h-[146px] md:max-w-[700px] md:h-[301px] xl:max-w-[1248px] xl:h-[538px] rounded-t-3xl mx-auto relative">
          <img className="rounded-t-3xl" src={heroImageSelector()} alt="hero" />

          <div className="absolute inset-0 top-[21px] left-[29px] xl:left-[108px] xl:top-[116px]">
            {isWide ? (
              <Logo fill="#FFFFFF" className="h-[25px] md:h-[87px]" />
            ) : (
              <LogoMobile className="h-[25px] md:h-[87px]" />
            )}
            <h1 className="text-[10px] md:text-2xl max-w-[135px] md:max-w-[371px] text-white font-montserrat leading-3 md:leading-7 pt-[7px] md:pt-3">
              Get to know more about your cat breed
            </h1>
            <div className="flex items-center rounded-full max-w-[91px] h-[30px] md:max-w-[395px] md:h-[70px] bg-white mt-[18px] md:mt-[52px]">
              <input
                value={searchText}
                placeholder={isTablet ? "Enter your breed" : "Search"}
                onChange={(e) => onChangeHandler(e.target.value)}
                className="w-full h-full text-xs rounded-full md:text-lg font-montserrat focus:outline-none pl-[13px] md:pl-7"
                type="text"
              />
              <Search className="mr-[13px] md:mr-6 w-[25px]" />
            </div>
          </div>

          <ResultBox />
        </div>

        {/* Breed showcase */}
        <div className="max-w-[339px] h-[523px] md:max-w-[700px] md:h-[800px] xl:max-w-[1248px] xl:h-[636px] rounded-b-3xl mx-auto bg-[#E3E1DC]">
          <div className="flex flex-col justify-between md:flex-row">
            {isWide ? null : (
              <div className="font-montserrat pl-[29px] pt-[18px] text-[#291507]">
                <Link href="/top-ten-breeds">
                  <a className="block text-xs font-medium">
                    Most Searched Breeds
                  </a>
                </Link>
                <div className="bg-[#4D270C] h-[3px] w-[41px] rounded-full mt-[5px]" />
              </div>
            )}

            <div className="max-w-[537px] ml-[29px] md:ml-[108px] pr-10 pt-[17px] md:pt-[111px]">
              <h1 className="font-montserrat font-black text-lg md:text-[48px] leading-[22px] md:leading-[59px] cursor-default">
                66+ Breeds For you to discover
              </h1>
            </div>

            {isWide ? (
              <div className="pr-[108px] pt-[195px]">
                <Link href="/top-ten-breeds">
                  <p className="flex items-center text-lg uppercase text-[#29150799] font-bold cursor-pointer">
                    see more{" "}
                    <span className="pl-[14px]">
                      <ArrowForward fill="#29150799" />
                    </span>
                  </p>
                </Link>
              </div>
            ) : null}
          </div>

          <div className="grid grid-cols-2 gap-y-[18px] md:gap-y-0 xl:flex mt-[26px] md:mt-[46px] ml-[29px] md:ml-[108px] xl:space-x-[51px]">
            {breeds
              .filter((breed) => topTenSearches?.slice(0, 4).includes(breed.id))
              .map((breed) => (
                <BreedSquare key={breed.id} {...breed} />
              ))}
          </div>
        </div>

        {/* Why have a cat */}
        <div className="grid xl:grid-cols-2 justify-center md:max-w-[700px] xl:max-w-[1032px] mx-auto mb-[22px] md:mb-[100px]">
          <div className="font-montserrat ml-[18px] md:ml-0">
            <div className="h-[3px] w-[50px] md:w-[59px] bg-[#4D270C] rounded-full mb-5 mt-[63px] md:mt-44" />
            <h1 className="w-[310px] md:w-[455px] text-[40px] md:text-5xl font-bold pb-[41px] cursor-default text-[#291507]">
              Why should you have a cat?
            </h1>
            <p className="text-lg w-[339px] md:w-[395px] font-medium pb-[27px] md:pb-11 cursor-default text-[#291507]">
              Having a cat around you can actually trigger the release of
              calming chemicals in your body which lower your stress and anxiety
              levels
            </p>
            <Link href="https://en.wikipedia.org/wiki/Cat">
              <a
                target="_blank"
                className="flex items-center text-lg uppercase text-[#29150799] font-bold cursor-pointer"
              >
                read more{" "}
                <span className="pl-[14px]">
                  <ArrowForward fill="#29150799" />
                </span>
              </a>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:gap-x-7 mt-[63px] md:mt-[100px] ml-[10px] md:ml-0">
            <div className="space-y-[17px] md:space-y-[28px]">
              <img
                className="h-[105px] w-[172px] md:h-[167px] md:w-[273px]"
                src="/image-2.png"
                alt="cat image 2"
              />
              <img
                className="h-[184px] w-[123px] md:h-[293px] md:w-[195px] translate-x-[49px]"
                src="/image-1.png"
                alt="cat image 1"
              />
            </div>
            <div>
              <img
                className="h-[242px] w-[150px] md:h-[386px] md:w-[238px] ml-4 md:ml-0"
                src="/image-3.png"
                alt="cat image 3"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
