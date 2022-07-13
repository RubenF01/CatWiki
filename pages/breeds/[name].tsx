/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import useStore from "../../store/store";
import { useEffect } from "react";
import RatingContainer from "../../components/RatingContainer";

const BreedInfo: NextPage = () => {
  const router = useRouter();
  const getBreedData = useStore((state) => state.getBreedData);
  const breedData = useStore((state) => state.breedData);
  const getImages = useStore((state) => state.getImages);
  const images = useStore((state) => state.images);
  const id = router.query.name?.toString();

  useEffect(() => {
    getBreedData(id);
    getImages(id);
  }, [getBreedData, getImages]);

  const ratingArr = [
    {
      title: "Adaptability",
      value: breedData[0]?.breeds[0]?.adaptability,
    },
    {
      title: "Affection Level",
      value: breedData[0]?.breeds[0]?.affection_level,
    },
    {
      title: "Child Friendly",
      value: breedData[0]?.breeds[0]?.child_friendly,
    },
    {
      title: "Grooming",
      value: breedData[0]?.breeds[0]?.grooming,
    },
    {
      title: "Intelligence",
      value: breedData[0]?.breeds[0]?.intelligence,
    },
    {
      title: "Health Issues",
      value: breedData[0]?.breeds[0]?.health_issues,
    },
    {
      title: "Social Needs",
      value: breedData[0]?.breeds[0]?.social_needs,
    },
    {
      title: "Stranger Friendly",
      value: breedData[0]?.breeds[0]?.stranger_friendly,
    },
  ];

  return (
    <Layout title={breedData[0]?.breeds[0]?.name}>
      <div className="font-montserrat">
        <div className="grid xl:grid-cols-2 max-w-[339px] md:max-w-[650px] xl:max-w-[1248px] mx-auto">
          <img
            src={breedData[0]?.url}
            alt={breedData[0]?.breeds[0]?.name}
            className="w-[371px] h-[371px] object-cover rounded-2xl border-[1px] border-[#291507] justify-self-center xl:justify-self-end xl:mr-[115px] mb-10 xl:mb-0"
          />
          <div>
            <h1 className="text-[#291507] font-semibold text-4xl pb-[25px]">
              {breedData[0]?.breeds[0]?.name}
            </h1>
            <div className="space-y-[32px] text-sm md:text-base">
              <p className="font-medium w-[339px] md:w-[601px] text-lg">
                {breedData[0]?.breeds[0]?.description}
              </p>
              <h2 className="font-bold">
                Temperament:{" "}
                <span className="font-medium">
                  {breedData[0]?.breeds[0]?.temperament}
                </span>
              </h2>
              <h2 className="font-bold">
                Origin:{" "}
                <span className="font-medium">
                  {breedData[0]?.breeds[0]?.origin}
                </span>
              </h2>
              <h2 className="font-bold">
                Life Span:{" "}
                <span className="font-medium">
                  {breedData[0]?.breeds[0]?.life_span} years
                </span>
              </h2>
              {ratingArr.map((item, index) => (
                <RatingContainer key={index} {...item} />
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-[339px] md:max-w-[700px] xl:max-w-[1248px] mx-auto pb-[22px] xl:pb-[177px] pt-20">
          <h1 className="pb-10 text-4xl font-semibold">Other photos</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-[30px] md:gap-y-[51px] justify-items-center">
            {images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={breedData[0]?.breeds[0]?.name}
                className="w-[278px] h-[278px] object-cover rounded-3xl"
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BreedInfo;
