import { drowNumber } from "../../service/dataTransform";
import { useDispatch, useSelector } from "react-redux";
import { setVanChecked, setNumVan, setFilterVansList } from "../../reducers/vansParamsSlice";

export default function VansNumbers() {
  const dispatch = useDispatch()
  const typeVan = useSelector(state => state.vansParamsSlice.typeVan)
  const filterVansList = useSelector(state => state.vansParamsSlice.filterVansList)
  const vanChecked = useSelector(state => state.vansParamsSlice.vanChecked)

  const changeCheckedVan = (index) => {
    const p = !vanChecked[index]
    dispatch(setVanChecked({ index, p }))
    dispatch(setNumVan(drowNumber(index, typeVan)))

    console.log(vanChecked)
  }

  
  const styleVanNumber = (index) => {
    return vanChecked[index] ? "active-wagon-number" : "wagon-number";
  };
  console.log('filterVansList в номерах вагонов')
  console.log(filterVansList)
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
