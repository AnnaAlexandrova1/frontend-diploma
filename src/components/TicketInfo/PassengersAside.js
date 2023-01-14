import { useSelector } from "react-redux"

export default function PassengersAside() {
  const seatsCheck = useSelector((state) => state.seatsParamsSlice.seats)
  
    return (
        <div className="passengers-count-container">
              <div className="travel-details_title-container">
                <h2 className="travel-details-main_title">
                  <span className="passenger-vector"></span>Пассажиры
                    </h2>
                    <span className="closeUP-vector"></span>
                  </div>
                  <div className="count-list-wrap">
                    <div className="passengers-count-total">
                      <p>2 Взрослых</p>
                      <p>1 Ребенок</p>
                    </div>
                    <div className="passengers-price-total">
                      <p>5840<span className="rub-vector-small"></span></p>
                      <p>1920<span className="rub-vector-small"></span></p>
                    </div>
                  </div>
                  <div className="total">
                    <p>Итог</p>
                    <span className="total-price">7760<span className="rub-vector"></span
                ></span>
                  </div>
                </div>
    )
}