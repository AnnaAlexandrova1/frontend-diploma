import VansNumbers from "./VansNumbers";
import SeatsSelectForm from "./SeatsSelectForm";

export default function Vans({ filterVansList, typeVan }) {
  if (filterVansList.length < 1) {
    return (
      <div className="wagon-numbers">
        <p className="number-disclamer"></p>Нет вагонов данного типа
      </div>
    );
    }
    
  return (
    <>
      <VansNumbers filterVansList={ filterVansList}  typeVan={ typeVan} />
      <SeatsSelectForm />
      <div className="seats-disclamer">
        <p>11 человек выбирают места в этом поезде</p>
      </div>
    </>
  );
}
