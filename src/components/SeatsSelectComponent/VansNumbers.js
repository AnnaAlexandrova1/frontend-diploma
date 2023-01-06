export default function VansNumbers({ filterVansList, typeVan }) {
  //Поскольку номеров вагонов в API нет, нумерацию придумала сама
  const shemeNum = {
    first: 1,
    second: 6,
    third: 11,
    forth: 16,
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
            <li className="wagon-number">
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
