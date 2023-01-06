import fourth from "../../img/icons/fourthClass.svg";
import third from "../../img/icons/thirdClass.svg";
import second from "../../img/icons/secondClass.svg";
import first from "../../img/icons/firstClass.svg";

export default function VanType({ typeVan, changeVanType }) {
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
