import { useState } from "react";
import { drowVansList } from "../../service/dataTransform";

export default function VansNumbers({ filterVansList, typeVan }) {
  const list = drowVansList(filterVansList);

  const [vanChecked, setVanChecked] = useState(list);
  const changeCheckedVan = (index) => {
    setVanChecked((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const styleVanNumber = (index) => {
    return vanChecked[index] ? "active-wagon-number" : "wagon-number";
  };

  //Поскольку номеров вагонов в API нет, нумерацию придумала сама
  const shemeNum = {
    first: 1,
    second: 6,
    third: 11,
    fourth: 16,
  };
  const drowNumber = (index, typeVan, shemeNum) => {
    return shemeNum[typeVan] + index;
  };

  return (
    <div className="wagon-numbers">
      <p className="numbers-title">Вагоны</p>
      <ul className="wagon-numbers-list">
        {filterVansList.map((item, index) => {
          return (
            <li
              className={styleVanNumber(index)}
              onClick={() => changeCheckedVan(index)}
              key={index}
            >
              {drowNumber(index, typeVan, shemeNum)}
            </li>
          );
        })}
      </ul>
      <p className="number-disclamer">
        Нумерация вагонов начинается с головы поезда
      </p>
    </div>
  );
}
