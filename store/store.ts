import create from "zustand";
import axios from "axios";

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
  setIsOpen: (isOpen: boolean) => void;
  setSuggestions: (suggestions: object[]) => void;
  setSearchText: (searchText: string) => void;
  getBreeds: () => void;
  getBreedData: (id: string | undefined) => void;
}

const useStore = create<State>()((set) => ({
  breeds: [],
  searchText: "",
  suggestions: [],
  isOpen: false,
  breedData: [],
  images: [],
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
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useStore;
