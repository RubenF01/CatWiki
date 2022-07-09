import create from "zustand";
import axios from "axios";

interface State {
  // type array of objects
  //   breeds: Array<{}>;
  breeds: {
    name: string;
    image: {
      url: string;
    };
  }[];
  //   breeds: object[];
  getBreeds: () => void;
}

const useStore = create<State>()((set) => ({
  breeds: [],
  //   setBreeds: (breeds: Array<object>) => set((state) => ({ ...state, breeds })),
  getBreeds: async () => {
    try {
      const response = await axios.get("/api/breed");
      set({ breeds: response.data });
    } catch (err) {
      console.log(err);
    }
  },
}));

export default useStore;
