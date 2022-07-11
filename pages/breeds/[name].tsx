/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import useStore from "../../store/store";
import { useEffect } from "react";
import RatingContainer from "../../components/RatingContainer";

const BreedInfo: NextPage = () => {
  const getBreedData = useStore((state) => state.getBreedData);
  const breedData = useStore((state) => state.breedData);
  const router = useRouter();
  const id = router.query.name?.toString();

  useEffect(() => {
    getBreedData(id);
  }, [getBreedData]);

  console.log(breedData[0]);

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
      <div>
        <div className="grid grid-cols-2 max-w-[1248px] mx-auto">
          <img
            src={breedData[0]?.url}
            alt={breedData[0]?.breeds[0]?.name}
            className="w-[371px] h-[371px] object-cover rounded-2xl border-[1px] border-[#291507] justify-self-end mr-[115px]"
          />
          <div>
            <h1 className="text-[#291507] font-semibold text-4xl pb-[25px]">
              {breedData[0]?.breeds[0]?.name}
            </h1>
            <div className="space-y-[32px]">
              <p className="font-medium w-[601px] text-lg">
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

        <div>
          <h1>Other photos</h1>
          <div></div>
        </div>
      </div>
    </Layout>
  );
};

export default BreedInfo;