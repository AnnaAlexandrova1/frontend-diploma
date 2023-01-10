import { useSelector } from "react-redux"
import First from "./First";
import Cupe from "./Cupe"
import Platzcart from "./Platzcart";
import Seat from "./Seat";

export default function SeatsSheme({item}) {
  const typeVan = useSelector(state => state.vansParamsSlice.typeVan)

  const styleAvailable = (el) => {
    return el.available ? <li className="available-place" key={el._id}>{el.index}</li> : <li className="place_is_taken">{el.index}</li>
  }

  switch (typeVan) {
    case 'first':
      return <First item={item} styleAvailable={styleAvailable} />
    case 'second':
      return <Cupe item={item} styleAvailable={styleAvailable}/>
    case 'third':
      return <Platzcart item={item} styleAvailable={styleAvailable}/>
    case 'fourth':
      return <Seat item={item} styleAvailable={styleAvailable}/>
    default: 
      return (<div> Ошибка! Что-то пошло не так. </div>)
  }
}