export default function TrainsList() {
  return (
    <section className="trains-list-container">
      <ul className="trains-list">
        <li className="train">
          <div className="train-description-wrap">
            <div className="train-description">
              <span className="train-vector"></span>
              <p className="train-number">116С</p>
              <ul className="train-route">
                <li>
                  Адлер<span className="arrow-vector"></span>
                </li>
                <li>
                  Москва<span className="arrow-vector"></span>
                </li>
                <li>Санкт-Петербург</li>
              </ul>
            </div>
          </div>
          <div className="train-travel_time-scheme-wrap">
            <div className="train-shipment-scheme">
              <div className="train-departure-time-wrap">
                <span className="train-departure-time">0:10</span>
                <span className="train-departure-point">Москва</span>
                <span className="train-departure-station">Курский вокзал</span>
              </div>
              <div className="travel-time-wrap">
                <span className="travel-time">9:42</span>
                <span className="travel-time-vector"></span>
              </div>
              <div className="train-arrival-time">
                <span className="train-departure-time">9:52</span>
                <span className="train-departure-point">Санкт-Петербург</span>
                <span className="train-departure-station">
                  Ладожский вокзал
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
                <span className="seats">88</span>oт{" "}
                <span className="place-ticket-price">
                  1920<span className="rub-vector-small"></span>
                </span>
              </li>
              <li>
                <span className="type">Плацкарт</span>{" "}
                <span className="seats">52</span>oт{" "}
                <span className="place-ticket-price">
                  2530<span className="rub-vector-small"></span>
                </span>
              </li>
              <li>
                <span className="type">Купе</span>{" "}
                <span className="seats">24</span>oт{" "}
                <span className="place-ticket-price">
                  3820<span className="rub-vector-small"></span>
                </span>
              </li>
              <li>
                <span className="type">Люкс</span>
                <span className="seats">15</span>oт{" "}
                <span className="place-ticket-price">
                  4950<span className="rub-vector-small"></span>
                </span>
              </li>
            </ul>
            <div className="train-comfort-available-props">
              <span className="comfort-props_vector"></span>
            </div>
            <button className="select-seats">Выбрать места</button>
          </div>
        </li>

        <li className="train">
          <div className="train-description-wrap">
            <div className="train-description">
              <span className="train-vector"></span>
              <p className="train-number">116С</p>
              <ul className="train-route">
                <li>
                  Москва<span className="arrow-vector"></span>
                </li>
                <li>Санкт-Петербург «Мегаполис»</li>
              </ul>
            </div>
          </div>
          <div className="train-travel_time-scheme-wrap">
            <div className="train-shipment-scheme">
              <div className="train-departure-time-wrap">
                <span className="train-departure-time">0:20</span>
                <span className="train-departure-point">Москва</span>
                <span className="train-departure-station">
                  Ленинградский вокзал
                </span>
              </div>
              <div className="travel-time-wrap">
                <span className="travel-time">8:39</span>
                <span className="travel-time-vector"></span>
              </div>
              <div className="train-arrival-time">
                <span className="train-departure-time">8:59</span>
                <span className="train-departure-point">Санкт-Петербург</span>
                <span className="train-departure-station">
                  Московский вокзал
                </span>
              </div>
            </div>
          </div>
          <div className="train-place-prices">
            <ul>
              <li>
                <span className="type">Купе</span>{" "}
                <span className="seats">24</span>oт{" "}
                <span className="place-ticket-price">
                  3820<span className="rub-vector-small"></span>
                </span>
              </li>
              <li>
                <span className="type">Люкс</span>
                <span className="seats">15</span>oт{" "}
                <span className="place-ticket-price">
                  4950<span className="rub-vector-small"></span>
                </span>
              </li>
            </ul>
            <div className="train-comfort-available-props">
              <span className="comfort-props_vector"></span>
            </div>
            <button className="select-seats">Выбрать места</button>
          </div>
        </li>
        <li className="train">
          <div className="train-description-wrap">
            <div className="train-description">
              <span className="train-vector"></span>
              <p className="train-number">116С</p>
              <ul className="train-route">
                <li>
                  Нижний Новгород<span className="arrow-vector"></span>
                </li>
                <li>
                  Москва<span className="arrow-vector"></span>
                </li>
                <li>Санкт-Петербург «Волга»</li>
              </ul>
            </div>
          </div>
          <div className="train-travel_time-scheme-wrap">
            <div className="train-shipment-scheme">
              <div className="train-departure-time-wrap">
                <span className="train-departure-time">0:10</span>
                <span className="train-departure-point">Москва</span>
                <span className="train-departure-station">Курский вокзал</span>
              </div>

              <div className="travel-time-wrap">
                <span className="travel-time">9:42</span>
                <span className="travel-time-vector"></span>
              </div>

              <div className="train-arrival-time">
                <span className="train-departure-time">9:52</span>
                <span className="train-departure-point">Санкт-Петербург</span>
                <span className="train-departure-station">
                  Ладожский вокзал
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
                <span className="type">Плацкарт</span>{" "}
                <span className="seats">52</span>oт{" "}
                <span className="place-ticket-price">
                  2530<span className="rub-vector-small"></span>
                </span>
              </li>
              <li>
                <span className="type">Купе</span>{" "}
                <span className="seats">24</span>oт{" "}
                <span className="place-ticket-price">
                  3820<span className="rub-vector-small"></span>
                </span>
              </li>
              <li>
                <span className="type">Люкс</span>
                <span className="seats">15</span>oт{" "}
                <span className="place-ticket-price">
                  4950<span className="rub-vector-small"></span>
                </span>
              </li>
            </ul>
            <div className="train-comfort-available-props">
              <span className="comfort-props_vector"></span>
            </div>
            <button className="select-seats">Выбрать места</button>
          </div>
        </li>
        <li className="train">
          <div className="train-description-wrap">
            <div className="train-description">
              <span className="train-vector"></span>
              <p className="train-number">116С</p>
              <ul className="train-route">
                <li>
                  Адлер<span className="arrow-vector"></span>
                </li>
                <li>
                  Москва<span className="arrow-vector"></span>
                </li>
                <li>Санкт-Петербург</li>
              </ul>
            </div>
          </div>
          <div className="train-travel_time-scheme-wrap">
            <div className="train-shipment-scheme">
              <div className="train-departure-time-wrap">
                <span className="train-departure-time">0:10</span>
                <span className="train-departure-point">Москва</span>
                <span className="train-departure-station">Курский вокзал</span>
              </div>

              <div className="travel-time-wrap">
                <span className="travel-time">9:42</span>
                <span className="travel-time-vector"></span>
              </div>

              <div className="train-arrival-time">
                <span className="train-departure-time">9:52</span>
                <span className="train-departure-point">Санкт-Петербург</span>
                <span className="train-departure-station">
                  Ладожский вокзал
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
                <span className="seats">88</span>oт{" "}
                <span className="place-ticket-price">
                  1920<span className="rub-vector-small"></span>
                </span>
              </li>
              <li>
                <span className="type">Плацкарт</span>{" "}
                <span className="seats">52</span>oт{" "}
                <span className="place-ticket-price">
                  2530<span className="rub-vector-small"></span>
                </span>
              </li>
              <li>
                <span className="type">Купе</span>{" "}
                <span className="seats">24</span>oт{" "}
                <span className="place-ticket-price">
                  3820<span className="rub-vector-small"></span>
                </span>
              </li>
              <li>
                <span className="type">Люкс</span>
                <span className="seats">15</span>oт{" "}
                <span className="place-ticket-price">
                  4950<span className="rub-vector-small"></span>
                </span>
              </li>
            </ul>
            <div className="train-comfort-available-props">
              <span className="comfort-props_vector"></span>
            </div>
            <button className="select-seats">Выбрать места</button>
          </div>
        </li>
        </ul>
        {/* <li className="train">
          <div className="train-description-wrap">
            <div className="train-description">
              <span className="train-vector"></span>
              <p className="train-number">116С</p>
              <ul className="train-route">
                <li>
                  Адлер<span className="arrow-vector"></span>
                </li>
                <li>
                  Москва<span className="arrow-vector"></span>
                </li>
                <li>Санкт-Петербург</li>
              </ul>
            </div>
          </div>
        </li> */}
      


      {/* <div className="train-travel_time-scheme-wrap">
        <div className="train-shipment-scheme">
          <div className="train-departure-time-wrap">
            <span className="train-departure-time">0:10</span>
            <span className="train-departure-point">Москва</span>
            <span className="train-departure-station">Курский вокзал</span>
          </div>

          <div className="travel-time-wrap">
            <span className="travel-time">9:42</span>
            <span className="travel-time-vector"></span>
          </div>

          <div className="train-arrival-time">
            <span className="train-departure-time">9:52</span>
            <span className="train-departure-point">Санкт-Петербург</span>
            <span className="train-departure-station">Ладожский вокзал</span>
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
            <span className="train-departure-station">Ладожский вокзал</span>
          </div>
        </div>
      </div> */}

      {/* <div className="train-place-prices">
        <ul>
          <li>
            <span className="type">Сидячий</span>
            <span className="seats">88</span>oт{" "}
            <span className="place-ticket-price">
              1920<span className="rub-vector-small"></span>
            </span>
          </li>
          <li>
            <span className="type">Плацкарт</span>{" "}
            <span className="seats">52</span>oт{" "}
            <span className="place-ticket-price">
              2530<span className="rub-vector-small"></span>
            </span>
          </li>
          <li>
            <span className="type">Купе</span> <span className="seats">24</span>
            oт{" "}
            <span className="place-ticket-price">
              3820<span className="rub-vector-small"></span>
            </span>
          </li>
          <li>
            <span className="type">Люкс</span>
            <span className="seats">15</span>oт{" "}
            <span className="place-ticket-price">
              4950<span className="rub-vector-small"></span>
            </span>
          </li>
        </ul>
        <div className="train-comfort-available-props">
          <span className="comfort-props_vector"></span>
        </div>
        <button className="select-seats">Выбрать места</button>
      </div> */}
    </section>
  );
}
