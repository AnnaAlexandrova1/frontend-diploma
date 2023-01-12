import { useDispatch, useSelector } from "react-redux"
import { setPassInfo } from "../../reducers/seatsParamsSlice"

export default function Passenger({ item, index }) {
   const dispatch = useDispatch()
    const seatsCheck = useSelector(state => state.seatsParamsSlice.seats)
    
    //let arr = seatsCheck


    console.log(seatsCheck)
    
    // const setPassInfo = (key, value) => {
    //     return arr.map(elem => {
    //         if (elem.num === item.num) {
    //            return {
    //                 ...elem,
    //                 [key]: value
    //             }
    //         } else {
    //             return elem
    //         }
    //     })
    // }
    // console.log(setPassInfo('sex', 'female'))
    
    return (
        <section className="passenger-data">
            <div className="passenger-data-header">
              <span className="data-skip-vector"></span>
              <h2 className="passenger-data-title">Пассажир-{index+1}</h2>
              <span className="data-delete-vector"></span>
            </div>
            <div className="passenger-data-form">
              <select className="passenger-age-type-selector">
                <option className="age-type-option" value="">Взрослый</option>
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
                  <div className="gender-wrap">
                    <input
                      type="radio"
                      id="switch_left"
                      name="switch_2"
                      value="male"
                      checked
                    />
                    <label htmlFor="switch_left">М</label>
                    <input
                      type="radio"
                      id="switch_right"
                      name="switch_2"
                            value="female"
                            onClick={() => dispatch(setPassInfo({itemNum: 5, key: 'gender', value: 'Male'}))}
                    />
                    <label htmlFor="switch_right">Ж</label>
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
                      >Паспорт РФ</option
                    >
                    <option className="document-type-option" value=""
                      >Загранпаспорт</option
                    >
                  </select>
                </div>
                <div className="document-serial-container">
                  <h3 className="document-type_title">Серия</h3>
                  <input type="text" pattern="[0-9]{4}" />
                </div>
                <div className="document-num-container">
                  <h3 className="document-type_title">Номер</h3>
                  <input type="text" pattern="[0-9]{6}" />
                </div>
              </div>
              <div className="next-passenger_button-container">
                <button className="next-passenger_button">
                  Следующий пассажир
                </button>
              </div>
            </div>
          </section>
    )
}