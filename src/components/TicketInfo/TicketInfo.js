import './ticketInfo.css'

export default function TicketInfo() {

    return (
      <section className="travel-details">
        <h2 className="travel-details-title">Детали поездки</h2>
        <div className="travel-details-departure">
          <div className="travel-details_title-container">
            <h2 className="travel-details-main_title">
                  <span className="departure-vector"></span>Туда<span
                    className="travel-details-date"
                    >30.08.2018</span
                  >
                </h2>
            <span className="closeUP-vector"></span>
          </div>
          <p className="sidebar-train-number">
            <span className="sidebar-train-number-title">№ Поезда</span>116C
          </p>
          <div className="sidebar-train-name">
            <span className="sidebar-train-name-title">Название</span>
            <ul className="sidebar-train-name-list">
              <li>Адлер</li>
              <li>Санкт-Петербург</li>
            </ul>
          </div>
          <div className="sidebar-train-shipment-scheme">
            <div className="sidebar-train-time-wrap">
              <div className="sidebar-train-shipment-scheme_departure-date">
                <span className="sidebar-train-departure-time">0:10</span>
                <span className="travel-details_departure-day">30.08.2018</span>
              </div>
              <div className="travel-time-wrap">
                <span className="travel-time">9:42</span>
                <span className="travel-time-vector"></span>
              </div>
              <div className="sidebar-train-shipment-scheme_arrival-date">
                <span className="sidebar-train-departure-time">9:52</span>
                <span className="travel-details_arrival-day">31.08.2018</span>
              </div>
            </div>
            <div className="sidebar-train-departure-wrap">
              <div className="sidebar-departure-point-wrap">
                <span className="sidebar-train-departure-point">Москва</span>
                <span className="sidebar-train-departure-station">Курский вокзал</span
                    >
                  </div>
                  <div className="arrival-point-wrap">
                    <span className="sidebar-train-departure-point"
                      >Санкт-Петербург</span
                    >
                    <span className="sidebar-train-departure-station"
                      >Ладожский вокзал</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div className="travel-details-departure_back">
              <div className="travel-details_title-container">
                <h2 className="travel-details-main_title">
                  <span className="departure-vector"></span>Обратно<span className="travel-details-date">09.09.2018</span
                  >
                </h2>
                <span className="closeUP-vector"></span>
              </div>
              <p className="sidebar-train-number">
                <span className="sidebar-train-number-title">№ Поезда</span>116C
              </p>
              <div className="sidebar-train-name">
                <span className="sidebar-train-name-title">Название</span>
                <ul className="sidebar-train-name-list">
                  <li>Адлер</li>
                  <li>Санкт-Петербург</li>
                </ul>
              </div>
              <div className="sidebar-train-shipment-scheme">
                <div className="sidebar-train-time-wrap">
                  <div className="sidebar-train-shipment-scheme_departure-date">
                    <span className="sidebar-train-departure-time">0:10</span>
                    <span className="travel-details_departure-day">09.09.2018</span>
                  </div>
                  <div className="travel-time-wrap">
                    <span className="travel-time">9:42</span>
                    <span className="travel-time-vector-reverse"></span>
                  </div>
                  <div className="sidebar-train-shipment-scheme_arrival-date">
                    <span className="sidebar-train-departure-time">9:52</span>
                    <span className="travel-details_arrival-day">08.09.2018</span>
                  </div>
                </div>
                <div className="sidebar-train-departure-wrap">
                  <div className="departure-point-wrap">
                    <span className="sidebar-train-departure-point">Москва</span>
                    <span className="sidebar-train-departure-station">Курский вокзал</span
                    >
                  </div>
                  <div className="arrival-point-wrap">
                    <span className="sidebar-train-departure-point"
                      >Санкт-Петербург</span
                    >
                    <span className="sidebar-train-departure-station"
                      >Ладожский вокзал</span
                    >
                  </div>
                </div>
              </div>
            </div>
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
      </section>
    )
}