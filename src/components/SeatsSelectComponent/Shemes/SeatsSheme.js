import { useSelector } from "react-redux"
import Cupe from "./Cupe"

export default function SeatsSheme() {
  const typeVan = useSelector(state => state.vansParamsSlice.typeVan)
  const filterVansList = useSelector(
    (state) => state.vansParamsSlice.filterVansList
  );

  switch (typeVan) {
    case 'second':
      return (<Cupe />)
    default: 
      return (<div> Ошибка! Что-то пошло не так. </div>)
  }
    
    
}