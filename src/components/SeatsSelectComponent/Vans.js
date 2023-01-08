import VansNumbers from "./VansNumbers";
import { useSelector } from "react-redux";
import SeatsSheme from "./Shemes/SeatsSheme";
import VanItem from "./VanItem";

export default function Vans() {
  const filterVansList = useSelector(
    (state) => state.vansParamsSlice.filterVansList
  );

  if (filterVansList.length < 1 || !filterVansList) {
    return (
      <div className="wagon-numbers">
        <p className="number-disclamer">Нет вагонов данного типа</p>
      </div>
    );
  }
  console.log("filterVansList из стейта");
  console.log(filterVansList);

  return (
    <>
      <VansNumbers />
      {filterVansList.map((item) => {
        if (item.coach._id) {
          return <>
            <VanItem item={ item} />
          <div className="seats-disclamer">
            <p>11 человек выбирают места в этом поезде</p>
          </div>
          <SeatsSheme />
        </>
        } else {
          return null
        }
      })}
    </>
  );
}
