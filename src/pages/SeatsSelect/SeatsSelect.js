import { useGetSeatsQuery } from "../../api/api";
import { useDispatch, useSelector } from "react-redux";
import { setFilterVansList, setResult } from "../../reducers/vansParamsSlice";
import { filterVans } from "../../service/dataTransform";
import SeatsTrainDesc from "../../components/SeatsSelectComponent/SeatsTrainDesc";
import SeatsTicketQty from "../../components/SeatsSelectComponent/SeatsTicketQty";
import Error from "../../components/Error/Error";
import IsLoading from "../../components/IsLoading/IsLoading";
import VanType from "../../components/SeatsSelectComponent/VanType";
import Vans from "../../components/SeatsSelectComponent/Vans";
import "./seatsSelect.css";

export default function SeatsSelect() {
  const dispatch = useDispatch()

  const typeVan = useSelector(state => state.vansParamsSlice.typeVan)
 // const filterVansList = useSelector(state => state.vansParamsSlice.filterVansList)

  const args = useSelector((state) => state.seatsParamsSlice);
  console.log('args.req')
  console.log(args.req)
  const {
    currentData: result,
    isError,
    isFetching,
  } = useGetSeatsQuery(args.req);
  if (isError) {
    return <Error />;
  }
  if (isFetching) {
    return <IsLoading />;
  }
  

  if (result) {
    console.log(`вагоны в поезде`)
    console.log(result)
    dispatch(setResult(result))
   
    //const filterVansList = filterVans();

  
    return (
      <section className="seats-content">
        <h1 className="seats-title">Выбор мест</h1>
        <div className="seats-select_departure">
          <div className="seats-select_departure_header">
            <span className="seats_departure-vector"></span>
            <button className="change-other-train_button">
              Выбрать другой поезд
            </button>
          </div>
          <SeatsTrainDesc item={args.data.item} />
          <SeatsTicketQty data={result} />
          <section>
            <VanType/>
                    {typeVan !== "" ? <Vans/> : null}

          </section>
        </div>
      </section>
    );
  }
}
