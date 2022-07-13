import create from "zustand";
import axios from "axios";
import { supabase } from "../utils/supabaseClient";

interface State {
  breeds: {
    name: string;
    id: string;
    image: {
      url: string;
    };
    description: string;
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
  loading: boolean;
  isMobileSearchOpen: boolean;
  setIsMobileSearchOpen: (isMobileSearchOpen: boolean) => void;
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
  loading: false,
  isMobileSearchOpen: true,
  setIsMobileSearchOpen: (isMobileSearchOpen: boolean) =>
    set((state) => ({ isMobileSearchOpen })),
  setIsOpen: (isOpen: boolean) => set((state) => ({ isOpen })),
  setSuggestions: (suggestions: object[]) => set((state) => ({ suggestions })),
  setSearchText: (searchText: string) => set((state) => ({ searchText })),
  getBreeds: async () => {
    try {
      set({ loading: true });
      const response = await axios.get("/api/breed");
      set({ loading: false });
      set({ breeds: response.data });
    } catch (err) {
      console.log(err);
    }
  },
  getBreedData: async (id: string | undefined) => {
    try {
      set({ loading: true });
      const response = await axios.get("/api/breedData", {
        params: {
          id,
        },
      });
      set({ loading: false });
      set({ breedData: response.data });
    } catch (err) {
      console.log(err);
    }
  },
  getImages: async (id: string | undefined) => {
    try {
      set({ loading: true });
      const response = await axios.get("/api/images", {
        params: {
          id,
        },
      });
      set({ loading: false });
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
      set({ loading: true });
      const { data, error } = await supabase
        .from("searchedBreeds")
        .select("breed")
        .limit(10)
        .order("search_amount", { ascending: false });
      set({ loading: false });

      const topTenBreeds: string[] | undefined = data?.map(
        ({ breed }) => breed
      );

      set({ topTenSearches: topTenBreeds });
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useStore;
