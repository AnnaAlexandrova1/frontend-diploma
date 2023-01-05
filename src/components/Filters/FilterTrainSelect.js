
export default function FilterTrainSelect() {
    return (
        <section className="filters">
        <div className="filters-container">
          <div className="dateFilter">
            <div className="dateFilter_departure">
              <h2>Дата поездки</h2>
              <input type="date" className="dateFilter_input filter_departure-date" placeholder="ДД/ММ/ГГ"/>
            </div>
            <div className="dateFilter_departure-back">
              <h2>Дата возвращения</h2>
              <input type="date" className="dateFilter_input filter_departure-date-back" placeholder="ДД/ММ/ГГ"/>
            </div>
          </div>
          <div className="options">
            <ul className="options-list">
              <li>
                <span className="coupe-vector"></span>
                <p>Купе</p>
                <div>
                  <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                  </label>
                </div>
              </li>
              <li>
                <span className="platzKarte-vector"></span>
                <p>Плацкарт</p>
                <div>
                  <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                  </label>
                </div>
              </li>
              <li>
                <span className="seat-vector"></span>
                <p>Сидячий</p>
                <div>
                  <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                  </label>
                </div>
              </li>
              <li>
                <span className="luxury-vector"></span>
                <p>Люкс</p>
                <div>
                  <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                  </label>
                </div>
              </li>
              <li>
                <span className="wifi-vector"></span>
                <p>Wi-Fi</p>
                <div>
                  <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                  </label>
                </div>
              </li>
              <li>
                <span className="express-vector"></span>
                <p>Экспресс</p>
                <div>
                  <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <div className="price-filter">
            <h2 className="price-filter-title">Cтоимость</h2>
            <span className="start-cost-title">От</span>
            <span className="max-cost-title">До</span>
            <div className="circle-container">
              <div className="circle-1" draggable="true" style={{left: "0px"}}></div>
              <div className="line-gray "></div>
              <div className="line-colored" style={{left: "12px", right: "135px"}}></div>
              <div className="circle-2" draggable="true" style={{left: "147px"}}></div>
            </div>
            <div className="cost-container">
              <div className="start-cost" style={{left: "0px"}}>1920</div>
              <div className="limit-cost" style={{left: "103px"}}>4500</div>
              <div className="max-cost">7000</div>
            </div>
          </div>
          <div className="time-filter">
            <div className="departure_time-filters_container">
              <div className="time-filter_title-container">
                <h2 className="time-filter-main_title"><span className="departure-vector">Туда</span></h2>
                <span className="closeUP-vector"></span>
              </div>
              <div className="departure-time">
                <h3 className="time-filter-title">Время отбытия</h3>
                <div className="circle-container time-container">
                  <div className="time-circle-1" draggable="true" style={{left: "0px"}}></div>
                  <div className="timeline-gray "></div>
                  <div className="timeline-colored" style={{left: "2px", right: "128px"}}></div>
                  <div className="time-circle-2" draggable="true" style={{left: "155px"}}></div>
                </div>
                <div className="cost-container time-container">
                  <div className="start-cost" style={{left: "0px"}}>0:00</div>
                  <div className="limit-cost" style={{left: "103px"}}>11:00</div>
                  <div className="max-cost">24:00</div>
                </div>
              </div>
              <div className="arrival-time">
                <h3 className="time-filter-title arrival-title">Время прибытия</h3>
                <div className="circle-container time-container">
                  <div className="time-circle-1" draggable="true" style={{left: "50px"}}></div>
                  <div className="timeline-gray"></div>
                  <div className="timeline-colored" style={{left: "52px", right: "136px"}}></div>
                  <div className="time-circle-2" draggable="true" style={{left: "155px"}}></div>
                </div>
                <div className="cost-container time-container">
                  <div className="start-cost" style={{left: "50px"}}>5:00</div>
                  <div className="limit-cost" style={{left: "103px"}}>11:00</div>
                  <div className="max-cost">24:00</div>
                </div>
              </div>
            </div>
            <div className="departure-back_time-filters_container">
              <div className="time-filter_title-container">
                <h2 className="time-filter-main_title"><span className="arrival-vector"></span>Обратно</h2>
                <span className="closeUP-vector"></span>
              </div>
              <div className="departure-time">
                <h3 className="time-filter-title">Время отбытия</h3>
                <div className="circle-container time-container">
                  <div className="time-circle-1" draggable="true" style={{left: "0px"}}></div>
                  <div className="timeline-gray"></div>
                  <div className="timeline-colored" style={{left: "2px", right: "128px"}}></div>
                  <div className="time-circle-2" draggable="true" style={{left: "155px"}}></div>
                </div>
                <div className="cost-container time-container">
                  <div className="start-cost" style={{left: "0px"}}>0:00</div>
                  <div className="limit-cost" style={{left: "103px"}}>11:00</div>
                  <div className="max-cost">24:00</div>
                </div>
              </div>
              <div className="arrival-time">
                <h3 className="time-filter-title arrival-title">Время прибытия</h3>
                <div className="circle-container time-container">
                  <div className="time-circle-1" draggable="true" style={{left: "50px"}}></div>
                  <div className="timeline-gray"></div>
                  <div className="timeline-colored" style={{left: "52px", right: "128px"}}></div>
                  <div className="time-circle-2" draggable="true" style={{left: "155px"}}></div>
                </div>
                <div className="cost-container time-container">
                  <div className="start-cost" style={{left: "50px"}}>5:00</div>
                  <div className="limit-cost" style={{left: "103px"}}>11:00</div>
                  <div className="max-cost">24:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}