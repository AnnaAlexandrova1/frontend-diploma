import NavHeader from "./NavHeader";
import BreadCrums from "./BreadCrums/BreadCrums";
import "./header.css";

import fromToGeo from '../../img/icons/from-to-geo.svg'
import rotate from './../../img/icons/rotate.svg'
import calendar from './../../img/icons/calendar.svg'

export default function HeaderSelectOptions() {
  return (
    <header className="header-trainselect">
      <div className="header-trainselect-image">
        <NavHeader />
        <div className="trainSelect_header-content">
          <div className="trainSelect_header-content_search-form-container">
            <form className="trainSelect_header-content_search-form">
              <div className="trainSelect__header-form__direction">
                <h2 className="ticket-form__head">Направление</h2>
                <div className="trainSelect__header-form__items">
                  <div className="train-select__header-form__item">
                    <input
                      type="text"
                      className="ticket-form__input from_search"
                      placeholder="Откуда"
                    />
                    <img
                      className="header-form__icon"
                      src={fromToGeo}
                      alt="geolocation"
                    />
                  </div>
                  <div className="rotate">
                    <img src={rotate} alt="rotate" />
                  </div>
                  <div className="train-select__header-form__item">
                    <input
                      className="ticket-form__input where_search right"
                      placeholder="Куда"
                    />
                    <img
                      className="header-form__icon"
                      src={fromToGeo}
                      alt="geolocation"
                    />
                  </div>
                </div>
              </div>
              <div className="trainSelect__header-form__date">
                <h2 className="ticket-form__head">Дата</h2>
                <div className="header-form__items">
                  <div className="train-select__header-form__item">
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
                  <div className="train-select__header-form__item">
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
                <div className="train-select__header-form__item">
                  <button className="find-tickets right">Найти билеты</button>
                </div>
              </div>
            </form>
          </div>
        </div>
          </div>
          <BreadCrums />
    </header>
  );
}
