import { useSelector } from "react-redux";
import VanItem from "./VanItem";

export default function SeatsSelectForm() {
  const filterVansList = useSelector(
    (state) => state.vansParamsSlice.filterVansList
  );

  
  if (filterVansList) {
    return (
      <>
        {filterVansList.map((item) => {
            return <VanItem item={item} />;
        })}
      </>
    );
  }
}
