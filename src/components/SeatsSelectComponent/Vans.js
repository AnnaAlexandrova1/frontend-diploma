import VansNumbers from "./VansNumbers";
import SeatsSelectForm from "./SeatsSelectForm";
import {  useSelector } from "react-redux";

export default function Vans() {
  const filterVansList = useSelector(
    (state) => state.vansParamsSlice.filterVansList
  );

  //   setVanChecked((prevState) => ({
  //     ...prevState,
  //     [index]: !prevState[index],
  //   }));
  //   setNum(num)
  // };

  if (filterVansList.length < 1) {
    return (
      <div className="wagon-numbers">
        <p className="number-disclamer">Нет вагонов данного типа</p>
      </div>
    );
  }

  return (
    <>
      <VansNumbers />
      <SeatsSelectForm />
      <div className="seats-disclamer">
        <p>11 человек выбирают места в этом поезде</p>
      </div>
    </>
  );
}
