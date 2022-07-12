import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Watch } from "react-loader-spinner";
import useStore from "../store/store";

const LoadingOverlay = () => {
  const loading = useStore((state) => state.loading);
  return (
    <div
      className={`inset-0 flex items-center justify-center ${
        loading ? "fixed" : "hidden"
      }`}
    >
      <Watch height={80} width={80} color="#E13C19" />
      <div className="bg-[rgba(41,21,7,0.2)] absolute inset-0" />
    </div>
  );
};

export default LoadingOverlay;
