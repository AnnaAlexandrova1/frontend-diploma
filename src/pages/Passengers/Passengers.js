import { useSelector } from 'react-redux'
import Passenger from '../../components/PassengerList/Passenger'
import './passengers.css'

export default function Passengers() {
  const seatsCheck = useSelector(state => state.seatsParamsSlice.seats)
  console.log(seatsCheck)
  const drowList = (seatsCheck) => {
  
    if(seatsCheck.length > 0){
          return seatsCheck.map((item, index) => {
            return <Passenger item={item} index={index} />
            })
        }
        
  }
   
    return (
        <section className="passenger-data_main-container">
        {drowList(seatsCheck)}
        
          <section className="passenger-data">
            <div className="passenger-data-header">
              <span className="data-skip-vector"></span>
              <h2 className="passenger-data-title">Пассажир-2</h2>
              <span className="data-delete-vector"></span>
            </div>
            <div className="passenger-data-form">
              <select className="passenger-age-type-selector">
                {/* <!--Тут будет активен детский-->
                <!--<option className="age-type-option" value="">Взрослый</option>--> */}
                <option className="age-type-option" value="">Детский</option>
              </select>
              <div className="passenger-name-selector-container">
                <div className="last-name-container">
                  <h3 className="last-name_title">Фамилия</h3>
                  <input type="text" />
                </div>
                <div className="first-name-container">
                  <h3 className="first-name_title">Имя</h3>
                  <input type="text" />
                </div>
                <div className="middle-name-container">
                  <h3 className="middle-name_title">Отчество</h3>
                  <input type="text" />
                </div>
              </div>
              <div className="passenger-birthdayAndGender-selector-container">
                <div className="switch-field">
                  <h3 className="switch-title">Пол</h3>
                  {/* <!-- Переключалка срабатывает на всех dom-эллементах gender-wrap, уберу условия в react--> */}
                  <div className="gender-wrap">
                    <input
                      type="radio"
                      id="switch_left"
                      name="switch_2"
                      value="male"
                      checked
                    />
                    <label for="switch_left">М</label>
                    <input
                      type="radio"
                      id="switch_right"
                      name="switch_2"
                      value="female"
                    />
                    <label for="switch_right">Ж</label>
                  </div>
                </div>
                <div className="birthday-field">
                  <h3 className="birthday-title">Дата рождения</h3>
                  {/* <!--Воткну сюда datepicker на react https://reactdatepicker.com/--> */}
                  <input type="date" className="search-form_input birthday-date" />
                </div>
              </div>
              <div className="low-mobility-checkbox-container">
                <input className="low-mobility-checkbox" type="checkbox" />
                <p>Ограниченная подвижность</p>
              </div>
              <div className="passenger-document-selector-container">
                <div className="document-type-container">
                  <h3 className="document-type_title">Тип документа</h3>
                  <select className="passenger-document-type-selector">
                    <option className="document-type-option" value=""
                      >Свидетельство о рождении</option
                    >
                    {/* <!--
                      При клике на *Детский* будут убраны
                    <option className="document-type-option" value="">Паспорт РФ</option>
                    <option className="document-type-option" value="">Загранпаспорт</option>
                    --> */}
                  </select>
                </div>
                {/* <!--
                <div className="document-serial-container">
                  <h3 className="document-type_title">Серия</h3>
                  <input type='text' pattern="[0-9]{4}">
                </div>
                Контейнер с номером паспорта для взрослого должен иметь другой тип валидации
                <div className="document-num-container">
                  <h3 className="document-type_title">Номер</h3>
                  <input type='text' pattern="[0-9]{6}">
                </div>
                --> */}
                <div className="document-num-container">
                  <h3 className="document-type_title">Номер</h3>
                  <input type="text" />
                </div>
              </div>

              <div className="next-passenger_button-container">
                <button className="next-passenger_button">
                  Следующий пассажир
                </button>
              </div>
              {/* <!--
                <div className="next-passenger_button-container noErrors">
                  <span className="noErrors-vector"></span>
                  <button className="next-passenger_button">Следующий пассажир</button>
                </div>
              -->
              <!--
                <div className="next-passenger_button-container warning">
                  <span className="error-vector"></span>
                  <div className="warning_text-block">
                    <p>Номер свидетельства о рожденни указан некорректно</p>
                    <p>Пример: VIII-УП-123456</p>
                  </div>
                </div>
              --> */}
            </div>
          </section>

          <section className="passenger-data">
            <div className="passenger-data-header">
              <span className="data-skip-vector-active"></span>
              <h2 className="passenger-data-title">Пассажир-3</h2>
              {/* <!--
                Условие, только если доступны данные пассажира. 
                <span className="data-delete-vector"></span>
              --> */}
            </div>
          </section>
          {/* <!--Данный блок будет доступен не всегда, при клике на него будет сделана переброска в меню выбора места в вагоне если таковые ещё есть--> */}
          <section className="passenger-data">
            <div className="passenger-data-header">
              <h2 className="passenger-add-title">Добавить пассажира</h2>
              <span className="data-add-vector"></span>
            </div>
          </section>
          <button className="next-button">Далее</button>
        </section>
    )
}