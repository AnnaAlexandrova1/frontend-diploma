import { setTypeVan } from "../../reducers/vansParamsSlice";

import fourth from "../../img/icons/fourthClass.svg";
import third from "../../img/icons/thirdClass.svg";
import second from "../../img/icons/secondClass.svg";
import first from "../../img/icons/firstClass.svg";
import { useDispatch, useSelector } from "react-redux";

export default function VanType() {
  const dispatch = useDispatch()
  let typeVan = useSelector(state => state.vansParamsSlice.typeVan)
  const changeVanType = (type) => {
       dispatch(setTypeVan(type))
  }

  const styleWagonType = (type, range) => {
    return type === typeVan
      ? `wagon-type ${range}-active`
      : `wagon-type ${range}`;
  };

  const styleWagonTypeVector = (type) => {
    return type === typeVan ? "wagon-type_vector-active" : "wagon-type_vector";
  };

  return (
    <>
      <h2 className="wagon-type-title">Тип вагона</h2>
      <ul className="wagon-types-list">
        <li
          className={styleWagonType("fourth", "seat")}
          onClick={() => changeVanType("fourth")}
        >
          <span className={styleWagonTypeVector("fourth")}>
            <img src={fourth} alt={"seat"} />
          </span>
          Сидячий
        </li>
        <li
          className={styleWagonType("third", "platzKarte")}
          onClick={() => changeVanType("third")}
        >
          <span className={styleWagonTypeVector("third")}>
            <img src={third} alt={"platzKarte"} />
          </span>
          Плацкарт
        </li>
        <li
          className={styleWagonType("second", "coupe")}
          onClick={() => changeVanType("second")}
        >
          <span className={styleWagonTypeVector("second")}>
            <img src={second} alt={"coupe"} />
          </span>
          Купе
        </li>
        <li
          className={styleWagonType("first", "luxury")}
          onClick={() => changeVanType("first")}
        >
          <span className={styleWagonTypeVector("first")}>
            <img src={first} alt={"coupe"} />
          </span>
          Люкс
        </li>
      </ul>
    </>
  );
}
