/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Layout from "../components/Layout";
import Logo from "../public/CatwikiLogo.svg";
import Search from "../public/search.svg";
import ResultBox from "../components/ResultBox";
import ArrowForward from "../public/arrow-forward.svg";

const Home: NextPage = () => {
  return (
    <Layout title="CatWiki">
      <div>
        {/* Breed search */}
        <div className="max-w-[1248px] h-[538px] rounded-t-3xl mx-auto relative">
          <img className="rounded-t-3xl" src="/HeroImagelg.png" alt="hero" />

          <div className="absolute inset-0 left-[108px] top-[116px]">
            <Logo fill="#FFFFFF" height="87px" />
            <h1 className="text-2xl max-w-[371px] text-white font-montserrat leading-7 pt-3">
              Get to know more about your cat breed
            </h1>
            <div className="flex items-center rounded-full h-[70px] max-w-[395px] bg-white mt-[52px]">
              <input
                className="w-full h-full text-lg rounded-full font-montserrat focus:outline-none pl-7"
                type="text"
              />
              <Search className="mr-6" />
            </div>
          </div>

          <ResultBox />
        </div>

        {/* Breed showcase */}
        <div className="max-w-[1248px] h-[636px] rounded-b-3xl mx-auto bg-[#E3E1DC]">
          <div className="max-w-[537px] ml-[108px] pr-10 pt-[111px]">
            <h1 className="font-montserrat font-black text-[48px] leading-[59px] cursor-default">
              66+ Breeds For you to discover
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-2 max-w-[1032px] mx-auto">
          <div className="font-montserrat">
            <div className="h-[3px] w-[59px] bg-[#4D270C] rounded-full mb-5 mt-44" />
            <h1 className="w-[455px] text-5xl font-bold pb-[41px]">
              Why should you have a cat?
            </h1>
            <p className="text-lg w-[395px] font-medium pb-11">
              Having a cat around you can actually trigger the release of
              calming chemicals in your body which lower your stress and anxiety
              levels
            </p>
            <p className="flex items-center text-lg uppercase text-[#29150799] font-bold">
              read more{" "}
              <span>
                <ArrowForward fill="#29150799" />
              </span>
            </p>
          </div>

          <div className="grid grid-cols-2">
            <div>
              <img
                className="h-[167px] w-[273px]"
                src="/image-2.png"
                alt="cat image 2"
              />
              <img
                className="h-[293px] w-[195px]"
                src="/image-1.png"
                alt="cat image 1"
              />
            </div>
            <div>
              <img
                className="h-[386px] w-[238px]"
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
