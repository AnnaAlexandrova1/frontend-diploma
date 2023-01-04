import { useGetLastRoutesQuery } from "../../api/api";
import LastTrainsList from "./LastTrainsList";
import IsLoading from "../IsLoading/IsLoading";
import Error from "../Error/Error";

export default function OverLooked() {
    const {currentData: result, isError, isFetching} = useGetLastRoutesQuery()
  if (isFetching && !result) return <IsLoading />
  if (isError) return <Error />
  if (result) {
    return <LastTrainsList list={result} />
  }

  return (
    <section className="overlooked-tickets">
      <h2>Последние билеты</h2>

      {/* 
       

        <li className="overlooked-ticket">
          <div className="departure-point">
            <span className="point-name">Москва</span>
            <span className="point-station">Курский вокзал</span>
          </div>
          <div className="arrival-point">
            <span className="point-name">Казань</span>
            <span className="point-station">Московский вокзал</span>
          </div>
          <div className="train-comfort-props">
            <span className="comfort-props_vector"></span>
          </div>
          <div className="overlooked-ticket-price">
            oт <span className="ticket-price">3500</span>
            <span className="rub-vector"></span>
          </div>
        </li>

        <li className="overlooked-ticket">
          <div className="departure-point">
            <span className="point-name">Казань</span>
            <span className="point-station">Курский вокзал</span>
          </div>
          <div className="arrival-point">
            <span className="point-name">Нижний-Новгород</span>
            <span className="point-station">Московский вокзал</span>
          </div>
          <div className="train-comfort-props">
            <span className="comfort-props_vector"></span>
          </div>
          <div className="overlooked-ticket-price">
            oт <span className="ticket-price">3500</span>
            <span className="rub-vector"></span>
          </div>
        </li>
       */}
    </section>
  );
}
