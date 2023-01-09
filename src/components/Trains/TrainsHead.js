import { useDispatch } from "react-redux";
import {
  setSortByTimeTrains,
  setSortByPriceTrains,
  setSortByDurationTrains,
} from "../../reducers/trainsParamsSlise";

export default function TrainsHead({ count }) {
  const dispatch = useDispatch();

  const onHandleSort = (evt) => {
    if (0 <= evt.target.selectedIndex <= 3) {
      if (evt.target.value === "time") {
        dispatch(setSortByTimeTrains());
      }
      if (evt.target.value === "price") {
        dispatch(setSortByPriceTrains());
      }
      if (evt.target.value === "duration") {
        dispatch(setSortByDurationTrains());
      }
    }
  };
  return (
    <section className="trains_head">
      <div className="trains-list_section-title">
        <p className="section-name">Найдено: </p>
        <span className="trains-amount">{count}</span>
      </div>
      <div className="trains-list_sort-by">
        <p className="sort-by">Сортировать по:</p>
        <select
          className="sorting"
          name=""
          onChange={(evt) => onHandleSort(evt)}
        >
          <option value="time">времени</option>
          <option value="price">стоимости</option>
          <option value="duration">длительности</option>
        </select>
      </div>
      <div className="trains-list_show-by">
        <p className="show-by">Показывать по:</p>
        <ul className="show-by-list">
          <li>5</li>
          <li>10</li>
          <li>20</li>
        </ul>
      </div>
    </section>
  );
}
