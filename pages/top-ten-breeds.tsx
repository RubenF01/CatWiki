import type { NextPage } from "next";
import Layout from "../components/Layout";
import BreedItem from "../components/BreedItem";
import useStore from "../store/store";
import { useEffect } from "react";

const TopTenBreeds: NextPage = () => {
  const breeds = useStore((state) => state.breeds);
  const topTenSearches = useStore((state) => state.topTenSearches);
  const getBreeds = useStore((state) => state.getBreeds);
  const getTopTen = useStore((state) => state.getTopTen);

  useEffect(() => {
    getBreeds();
    getTopTen();
  }, [getBreeds, getTopTen]);

  return (
    <Layout title="Top Ten Breeds">
      <div className="font-montserrat max-w-[300px] md:max-w-[650px] xl:max-w-[1248px] mx-auto pb-[106px]">
        <h1 className="text-4xl font-bold pb-[52px]">
          Top 10 most searched breeds
        </h1>
        <div className="flex flex-col gap-y-[55px]">
          {breeds
            .filter((breed) => topTenSearches?.includes(breed.id))
            .map((breed, index) => (
              <BreedItem key={breed.id} {...breed} index={index} />
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default TopTenBreeds;
