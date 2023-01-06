import { useGetSeatsQuery } from "../../api/api";
import { useDispatch, useSelector } from "react-redux";
import { setTypeVan, setFilterVansList } from "../../reducers/vansParamsSlice";
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

  const args = useSelector((state) => state.seatsParamsSlice);
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
      const filterVans = () => {
      return result.filter((item) => item.coach.class_type === typeVan);
    };
    dispatch(setFilterVansList(filterVans()))
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
            <div className="seats-scheme standart">
              <span className="scheme_wagon-number">07</span>
              <ul className="scheme_top-seats">
                <li className="place_is_taken">2</li>
                <li className="place_is_taken">4</li>
                <li className="place_is_taken">6</li>
                <li className="place_is_taken">8</li>
                <li className="place_is_taken">10</li>
                <li className="place_is_taken">12</li>
                <li className="place_is_taken">14</li>
                <li className="place_is_taken">16</li>
                <li className="available-place">18</li>
                <li className="place_is_taken">20</li>
                <li className="place_is_taken">22</li>
                <li className="place_is_taken">24</li>
                <li className="place_is_taken">26</li>
                <li className="place_is_taken">28</li>
                <li className="available-place">30</li>
                <li className="available-place">32</li>
              </ul>
              <ul className="scheme_bottom-seats">
                <li className="available-place">1</li>
                <li className="available-place">3</li>
                <li className="place_is_taken">5</li>
                <li className="place_is_taken">7</li>
                <li className="place_is_taken">9</li>
                <li className="available-place">11</li>
                <li className="available-place">13</li>
                <li className="available-place">15</li>
                <li className="place_is_taken">17</li>
                <li className="available-place">19</li>
                <li className="place_is_taken">21</li>
                <li className="place_is_taken">23</li>
                <li className="place_is_taken">25</li>
                <li className="available-place">27</li>
                <li className="place_is_taken">29</li>
                <li className="available-place">31</li>
              </ul>
            </div>
          </section>
        </div>
      </section>
    );
  }
}
