import { useState, useEffect } from "react";

import NavHeader from "./NavHeader";
import { GetCity} from '../../api/getRequest'
import './header.css'

import rotate from "../../img/icons/rotate.svg";
import fromToGeo from "../../img/icons/from-to-geo.svg";
import calendar from "../../img/icons/calendar.svg";
import Datalist from "./Datalist";

let getCity = new GetCity()

export default function MainHeader() {
  const [valueFrom, setValueFrom] = useState('');
  const [cities, setCities] = useState([])
  const [valueTo, setValueTo] = useState('')
  const [citiesTo, setCitiesTo] = useState([])

  const handleChangeFrom = (evt) => {
    setValueFrom(evt.target.value) 
  }

  useEffect(() => {
    getCity.getVariants(valueFrom).then((res) => setCities(res)).catch((err) => { return; })
  }, [valueFrom])
  
  const handleChangeTo = (evt) => {
    setValueTo(evt.target.value) 
  }

  useEffect(() => {
    getCity.getVariants(valueTo).then((res) => setCitiesTo(res)).catch((err) => { return; })
    }, [valueTo])


  
  
  return (
    <header className="header">
      <NavHeader />

      <div className="header-container container">
        <div className="header__slogan">
          <h1>
            Вся жизнь - <b>путешествие!</b>
          </h1>
        </div>

        <div className="ticket">
          <form className="ticket-form">
            <div className="header-form__direction">
              <h2 className="ticket-form__head">Направление</h2>
              <div className="header-form__items">
                <div className="header-form__item">
                  <input
                    type="text"
                    className="ticket-form__input from_search"
                    placeholder="Откуда"
                    list='cities'
                    name='cities'
                    autoсomplete="off"
                    value={valueFrom}
                    onChange={handleChangeFrom}
                  />
                  <datalist id="cities">
                    { <Datalist cities={cities} /> }
                  </datalist>
                  <img
                    className="header-form__icon"
                    src={fromToGeo}
                    alt="geolocation"
                  />
                </div>
                <div className="rotate">
                  <img src={rotate} alt="rotate" />
                </div>
                <div className="header-form__item">
                  <input
                    type="text"
                    className="ticket-form__input where_search right"
                    placeholder="Куда"
                    list='citiesTo'
                    name='citiesTo'
                    autoсomplete="off"
                    value={valueTo}
                    onChange={handleChangeTo}
                  />
                  <datalist id="citiesTo">
                    { <Datalist cities={citiesTo} /> }
                  </datalist>
                  <img
                    className="header-form__icon"
                    src={fromToGeo}
                    alt="geolocation"
                  />
                </div>
              </div>
            </div>
            <div className="header-form__date">
              <h2 className="ticket-form__head">Дата</h2>
              <div className="header-form__items">
                <div className="header-form__item">
                  <div className="datepicker">
                    <input
                      type="date"
                      className="ticket-form__input departure-date"
                      placeholder="ДД/ММ/ГГ"
                    />
                    <div
                      className="datepicker__wrapper"
                      style={{
                        zIndex: 9999,
                        position: "absolute",
                        display: "none",
                      }}
                    ></div>
                  </div>
                  <img
                    className="header-form__icon"
                    src={calendar}
                    alt="calendar"
                  />
                </div>
                <div className="rotate"></div>
                <div className="header-form__item">
                  <div className="datepicker">
                    <input
                      type="date"
                      className="ticket-form__input departure-date-back right"
                      placeholder="ДД/ММ/ГГ"
                    />
                    <div
                      className="datepicker__wrapper"
                      style={{
                        zIndex: 9999,
                        position: "absolute",
                        display: "none",
                      }}
                    ></div>
                  </div>
                  <img
                    className="header-form__icon"
                    src={calendar}
                    alt="calendar"
                  />
                </div>
              </div>
            </div>

            <div className="header-form__submit">
              <div className="header-form__item">
                <button className="find-tickets right">Найти билеты</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}
