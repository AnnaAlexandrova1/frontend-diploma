import { useDispatch, useSelector } from "react-redux";
import { setPassInfo } from "../../reducers/seatsParamsSlice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { data } from "jquery";

export default function Passenger({ item, index }) {
  const dispatch = useDispatch();
  const seatsCheck = useSelector((state) => state.seatsParamsSlice.seats);

  const getDataForVal = (item) => {
    const arr = seatsCheck.filter(elem => elem.num === item.num)
    if (arr.length > 0) {
      return arr[0]
    }
  }

  const showDataForVal = (elem) => {
    let dataPass = getDataForVal(item)
    return dataPass[elem] ? dataPass[elem] : null
  }

  const timeDelay = (forStore) => {
    setTimeout(() => dispatch(setPassInfo(forStore)), 1500);
  };

  const onHandleToggle = (evt) => {
    if (evt.target.value === "Adult") {
      dispatch(
        setPassInfo({ itemNum: item.num, key: "Adult_Child", value: "Adult" })
      );
    }
    if (evt.target.value === "Child") {
      dispatch(
        setPassInfo({ itemNum: item.num, key: "Adult_Child", value: "Child" })
      );
    }
    if (evt.target.value === "passRF") {
      dispatch(
        setPassInfo({ itemNum: item.num, key: "passport", value: "passRF" })
      );
    } 
    if (evt.target.value === "passForeign") {
      dispatch(
        setPassInfo({ itemNum: item.num, key: "passport", value: "passForeign" })
      );
    }
  };

  const setStartDate = (date) => {
     let ddMmYear = date.getUTCDate() + "-" + date.getUTCMonth() + 1 + "-" + date.getUTCFullYear();
    // console.log(date)
    if(ddMmYear.length > 6){
      dispatch(setPassInfo({ itemNum: item.num, key: "date", value: ddMmYear }));
    }
  };

  const lowMobCheck = (evt) => {
    dispatch(setPassInfo({ itemNum: item.num, key: "lowMob", value: evt.target.checked }))
    getDataForVal(item)
  }

  //let passData = getDataForVal(item)

  return (
    <section className="passenger-data">
      <div className="passenger-data-header">
        <span className="data-skip-vector"></span>
        <h2 className="passenger-data-title">Пассажир-{index + 1}</h2>
        <span className="data-delete-vector"></span>
      </div>
      <div className="passenger-data-form">
        <select
          className="passenger-age-type-selector"
          onChange={(evt) => onHandleToggle(evt)}
        >
          <option className="age-type-option" value="Adult">
            Взрослый
          </option>
          <option className="age-type-option" value="Child">
            Детский
          </option>
        </select>
        <div className="passenger-name-selector-container">
          <div className="last-name-container">
            <h3 className="last-name_title">Фамилия</h3>
            <input
              type="text"
              value={showDataForVal('last-name_title')}
              onKeyUp={(evt) =>
                timeDelay({
                  itemNum: item.num,
                  key: "last-name_title",
                  value: evt.target.value,
                })
              }
            />
          </div>
          <div className="first-name-container">
            <h3 className="first-name_title">Имя</h3>
            <input
              type="text"
              value={showDataForVal('first-name_title')}
              onKeyUp={(evt) =>
                timeDelay({
                  itemNum: item.num,
                  key: "first-name_title",
                  value: evt.target.value,
                })
              }
            />
          </div>
          <div className="middle-name-container">
            <h3 className="middle-name_title">Отчество</h3>
            <input
              type="text"
              value={showDataForVal('middle-name_title')}
              onKeyUp={(evt) =>
                timeDelay({
                  itemNum: item.num,
                  key: "middle-name_title",
                  value: evt.target.value,
                })
              }
            />
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
                //checked
                onClick={() =>
                  dispatch(
                    setPassInfo({
                      itemNum: item.num,
                      key: "gender",
                      value: "male",
                    })
                  )
                }
              />
              <label htmlFor="switch_left">М</label>
              <input
                type="radio"
                id="switch_right"
                name="switch_2"
                value="female"
                onClick={() =>
                  dispatch(
                    setPassInfo({
                      itemNum: item.num,
                      key: "gender",
                      value: "female",
                    })
                  )
                }
              />
              <label htmlFor="switch_right">Ж</label>
            </div>
          </div>
          <div className="birthday-field">
            <h3 className="birthday-title">Дата рождения</h3>

            <DatePicker
              className="search-form_input birthday-date"
              dateFormat="dd/MM/yyyy"
              //selected={item.date}
              onChange={(date) => setStartDate(date)}
              maxDate={new Date()}
              value={showDataForVal('date')}
            />
          </div>
        </div>
        <div className="low-mobility-checkbox-container">
          <input className="low-mobility-checkbox" type="checkbox" onClick={(evt) => lowMobCheck(evt)}  />
          <p>Ограниченная подвижность</p>
        </div>
        <div className="passenger-document-selector-container">
          <div className="document-type-container">
            <h3 className="document-type_title">Тип документа</h3>
            <select className="passenger-document-type-selector" onChange={(evt) => onHandleToggle(evt)} value={{ label: showDataForVal('passport') }}>
              <option className="document-type-option" value="passRF">
                ---
              </option>
              <option className="document-type-option" value="passRF">
                Паспорт РФ
              </option>
              <option className="document-type-option" value="passForeign">
                Загранпаспорт
              </option>
            </select>
          </div>
          <div className="document-serial-container">
            <h3 className="document-type_title">Серия</h3>
            <input type="text" pattern="[0-9]{4}"
              value={showDataForVal('passSeria')}
              onKeyUp={(evt) =>
                timeDelay({
                  itemNum: item.num,
                  key: "passSeria",
                  value: evt.target.value,
                })
              }/>
          </div>
          <div className="document-num-container">
            <h3 className="document-type_title">Номер</h3>
            <input type="text"
              value={showDataForVal('passNum')}
              pattern="[0-9]{6}" onKeyUp={(evt) =>
                timeDelay({
                  itemNum: item.num,
                  key: "passNum",
                  value: evt.target.value,
                })
              }/>
          </div>
        </div>
        <div className="next-passenger_button-container">
          <button className="next-passenger_button">Следующий пассажир</button>
        </div>
      </div>
    </section>
  );
}
