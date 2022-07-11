import create from "zustand";
import axios from "axios";
import { supabase } from "../utils/supabaseClient";

interface State {
  breeds: {
    name: string;
    image: {
      url: string;
    };
  }[];
  searchText: string;
  suggestions: {
    name?: string;
    id?: string;
  }[];
  isOpen: boolean;
  breedData: {
    url?: string;
    breeds: {
      name?: string;
      description?: string;
      temperament?: string;
      origin?: string;
      life_span?: string;
      adaptability?: number;
      affection_level?: number;
      child_friendly?: number;
      grooming?: number;
      intelligence?: number;
      health_issues?: number;
      social_needs?: number;
      stranger_friendly?: number;
    }[];
  }[];
  images: {
    url?: string;
  }[];
  topTenSearches: any[] | null;
  setIsOpen: (isOpen: boolean) => void;
  setSuggestions: (suggestions: object[]) => void;
  setSearchText: (searchText: string) => void;
  getBreeds: () => void;
  getBreedData: (id: string | undefined) => void;
  getImages: (id: string | undefined) => void;
  updateSearchAmount: (breed: string | undefined) => void;
  getTopTen: () => void;
}

const useStore = create<State>()((set) => ({
  breeds: [],
  searchText: "",
  suggestions: [],
  isOpen: false,
  breedData: [],
  images: [],
  topTenSearches: [],
  setIsOpen: (isOpen: boolean) => set((state) => ({ isOpen })),
  setSuggestions: (suggestions: object[]) => set((state) => ({ suggestions })),
  setSearchText: (searchText: string) => set((state) => ({ searchText })),
  getBreeds: async () => {
    try {
      const response = await axios.get("/api/breed");
      set({ breeds: response.data });
    } catch (err) {
      console.log(err);
    }
  },
  getBreedData: async (id: string | undefined) => {
    try {
      const response = await axios.get("/api/breedData", {
        params: {
          id,
        },
      });
      set({ breedData: response.data });
    } catch (err) {
      console.log(err);
    }
  },
  getImages: async (id: string | undefined) => {
    try {
      const response = await axios.get("/api/images", {
        params: {
          id,
        },
      });
      set({ images: response.data });
    } catch (error) {
      console.log(error);
    }
  },
  updateSearchAmount: async (breed: string | undefined) => {
    try {
      const { data: dataSelect, error: errorSelect } = await supabase
        .from("searchedBreeds")
        .select()
        .eq("breed", breed);

      if (dataSelect!.length === 0) {
        const { data, error } = await supabase
          .from("searchedBreeds")
          .insert([{ breed, search_amount: 1 }]);
      }

      const { data: dataUpdate, error: errorUpdate } = await supabase
        .from("searchedBreeds")
        .update({ search_amount: dataSelect![0].search_amount + 1 })
        .eq("breed", breed);
    } catch (err) {
      console.log(err);
    }
  },
  getTopTen: async () => {
    try {
      const topTenArr = [];
      const { data, error } = await supabase.from("searchedBreeds").select();

      const sortedData = data?.reduce(
        (obj, item) => ({ ...obj, [item.breed]: item.search_amount }),
        {}
      );

      // sortedData type is object

      for (const breed in sortedData) {
        topTenArr.push(sortedData[breed]);
      }

      const values = Object.values(sortedData).sort((a, b) => b - a);

      console.log(sortedData);
      // console.log(topTenArr);

      // const values = data
      //   ?.map(({ search_amount }) => search_amount)
      //   .sort((a, b) => b - a)
      //   .slice(0, 9);

      // const topTen = data?.filter(({ search_amount }) =>
      //   values?.includes(search_amount)
      // );

      // const
      // array = [{ name: "Tim", score: 76 }, { name: "Lucy", score: 23 }, { name: "Jeremy", score: 44 }, { name: "Burns", score: 66 }, { name: "Mike", score: 86 }],
      // values = array
      //     .map(({ score }) => score)
      //     .sort((a, b) => b - a)
      //     .slice(0, 3),
      // top3 = array.filter(({ score }) => values.includes(score));

      // set({ breedSearchAmount: data });
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useStore;
