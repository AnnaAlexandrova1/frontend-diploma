import VansNumbers from "./VansNumbers";
import SeatsSelectForm from "./SeatsSelectForm";
import {  useSelector } from "react-redux";
import SeatsSheme from "./Shemes/SeatsSheme";

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
  console.log('filterVansList из стейта')
  console.log(filterVansList)

  return (
    <>
      <VansNumbers />
      <SeatsSelectForm />
      <div className="seats-disclamer">
        <p>11 человек выбирают места в этом поезде</p>
      </div>
      <SeatsSheme />
    </>
  );
}
