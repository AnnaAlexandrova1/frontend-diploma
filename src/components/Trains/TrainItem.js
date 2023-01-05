
export default function TrainItem({ item }) {
    const showPrice = (arg) => {
        console.log(arg)
        if (!arg) {
            return
        }
    //   return arg ? arg : '';
    }

    const showSeats = (arg) => {
       return arg > 0 ? arg : 0;
    }

    return (
        <li className="train">
          <div className="train-description-wrap">
            <div className="train-description">
              <span className="train-vector"></span>
              <p className="train-number">116С</p>
              <ul className="train-route">
                <li>
                    {item.departure.from.city.name}<span className="arrow-vector"></span>
                </li>
                <li>
                    { item.departure.from.city.name}<span className="arrow-vector"></span>
                </li>
                <li>{ item.departure.to.city.name}</li>
              </ul>
            </div>
          </div>
          <div className="train-travel_time-scheme-wrap">
            <div className="train-shipment-scheme">
              <div className="train-departure-time-wrap">
                        <span className="train-departure-time">{ item.departure.from.datetime}</span>
                        <span className="train-departure-point">{ item.departure.from.city.name}</span>
                        <span className="train-departure-station">{ item.departure.from.railway_station_name}</span>
              </div>
              <div className="travel-time-wrap">
                        <span className="travel-time">{ item.departure.duration }</span>
                <span className="travel-time-vector"></span>
              </div>
              <div className="train-arrival-time">
                        <span className="train-departure-time">{item.departure.to.datetime}</span>
                <span className="train-departure-point">{item.departure.to.city.name}</span>
                <span className="train-departure-station">
                            {item.departure.to.railway_station_name}
                </span>
              </div>
            </div>
            <div className="train-shipment-reverse-scheme">
              <div className="train-departure-time-wrap">
                <span className="train-departure-time">0:10</span>
                <span className="train-departure-point">Москва</span>
                <span className="train-departure-station">Курский вокзал</span>
              </div>
              <div className="travel-time-wrap">
                <span className="travel-time">9:42</span>
                <span className="travel-time-vector-reverse"></span>
              </div>
              <div className="train-arrival-time">
                <span className="train-departure-time">9:52</span>
                <span className="train-departure-point">Санкт-Петербург</span>
                <span className="train-departure-station">
                  Ладожский вокзал
                </span>
              </div>
            </div>
          </div>
          <div className="train-place-prices">
            <ul>
              <li>
                <span className="type">Сидячий</span>
                        <span className="seats">{
                             showSeats(item.available_seats_info.forth)
                        }</span>oт{" "}
                <span className="place-ticket-price">
                            {
                                // showPrice(item.departure.price_info.forth.bottom_price)
                            }<span className="rub-vector-small"></span>
                </span>
              </li>
              <li>
                <span className="type">Плацкарт</span>{" "}
                        <span className="seats">{
                            showSeats(item.available_seats_info.third)
                        }</span>oт{" "}
                <span className="place-ticket-price">
                            {
                                // showPrice(item.departure.price_info.third.bottom_price)
                            }<span className="rub-vector-small"></span>
                </span>
              </li>
              <li>
                <span className="type">Купе</span>{" "}
                        <span className="seats">{showSeats(item.available_seats_info.second)}</span>oт{" "}
                <span className="place-ticket-price">
                            {/* {showPrice(item.departure.price_info.second.bottom_price) */
                            }<span className="rub-vector-small"></span>
                </span>
              </li>
              <li>
                        <span className="type">Люкс</span>
                <span className="seats">{showSeats(item.available_seats_info.first)}</span>oт{" "}
                <span className="place-ticket-price">
                            {
                                // showPrice(item.departure.price_info.first.bottom_price)
                            }<span className="rub-vector-small"></span>
                </span>
              </li>
            </ul>
            <div className="train-comfort-available-props">
              <span className="comfort-props_vector"></span>
            </div>
            <button className="select-seats">Выбрать места</button>
          </div>
        </li>
    )
}