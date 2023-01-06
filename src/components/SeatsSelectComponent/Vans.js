import { useState } from "react";
import VansNumbers from "./VansNumbers";
import SeatsSelectForm from "./SeatsSelectForm";
import { drowVansList } from "../../service/dataTransform";
import { useSelector } from "react-redux";

export default function Vans() {
  const filterVansList = useSelector(state => state.vansParamsSlice)
 const typeVan = useSelector(state => state.vansParamsSlice.typeVan)

  const list = drowVansList(filterVansList);

  console.log(filterVansList)
  const [vanChecked, setVanChecked] = useState(list);
  const [num, setNum] = useState('')

  const changeCheckedVan = (index, num) => {
    setVanChecked((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
    setNum(num)
  };

  if (filterVansList.length < 1) {
    return (
      <div className="wagon-numbers">
        <p className="number-disclamer"></p>Нет вагонов данного типа
      </div>
    );
  }

  return (
    <>
      <VansNumbers
        filterVansList={filterVansList}
        typeVan={typeVan}
        vanChecked={vanChecked}
        changeCheckedVan={changeCheckedVan}
      />
      <SeatsSelectForm vanChecked={vanChecked} typeVan={typeVan} />
      <div className="seats-disclamer">
        <p>11 человек выбирают места в этом поезде</p>
      </div>
    </>
  );
}
