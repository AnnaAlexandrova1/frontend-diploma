import { drowNumber } from "../../service/dataTransform";

export default function VansNumbers({
  filterVansList,
  typeVan,
  vanChecked,
  changeCheckedVan,
}) {
  const styleVanNumber = (index) => {
    return vanChecked[index] ? "active-wagon-number" : "wagon-number";
  };

  //Поскольку номеров вагонов в API нет, нумерацию придумала сама
  
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
              {drowNumber(index, typeVan)}
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
