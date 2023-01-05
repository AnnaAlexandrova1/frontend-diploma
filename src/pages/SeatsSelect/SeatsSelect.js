import './seatsSelect.css'

export default function SeatsSelect() {
    return (<section class="seats-content">

         <h1 class="seats-title">Выбор мест</h1>
      <div class="seats-select_departure">
        <div class="seats-select_departure_header">
          <span class="seats_departure-vector"></span>
          <button class='change-other-train_button'>Выбрать другой поезд</button>
        </div>
        <div class="seats_train-description-wrap">
          <div class="seats_train-description">
            <span class="train-vector-small"></span>
            <div class="seats_train-route-wrap">
              <p class="seats_train-number">116С</p>
              <ul class="seats_train-route">
                <li>Адлер<span class="arrow-vector"></span></li>
                <li>Москва<span class="arrow-vector"></span></li>
                <li>Санкт-Петербург</li>
              </ul>
            </div>
          </div>
          <div class="train-travel_time-scheme-wrap">
            <div class="seats_train-shipment-scheme">
              <div class="train-departure-time-wrap">
                <span class="train-departure-time">0:10</span>
                <span class="train-departure-point">Москва</span>
                <span class="train-departure-station">Курский вокзал</span>
              </div>
              <span class="seats_travel-time-vector"></span>
              <div class="train-arrival-time">
                <span class="train-departure-time">9:52</span>
                <span class="train-departure-point">Санкт-Петербург</span>
                <span class="train-departure-station">Ладожский вокзал</span>
              </div>
            </div>
          </div>
          <div class='seats_travel-time'>
            <span class="clockworkOrange-vector"></span>
            <div class='travel-time_wrap'>
              <p class="travel-hours">9 часов</p>
              <p class="travel-minutes">42 минуты</p>
            </div>
          </div>
        </div>
         
            
             <section>
          <h2 class="ticket-count-title">Количество билетов</h2>
          <div class="ticket-count-container">
            <div class="ticket-count active-count adult">
              <div class="count-screen">
                {/* <!-- тут разместить шаблон {`Взрослых-${props.name.num}`}--> */}
                <p>Взрослых - 2</p>
              </div>
              <p class="seat-description">Можно добавить еще 3 пассажиров</p>
            </div>

            <div class="ticket-count kids">
              <div class="count-screen">
                <p>Детских - 1</p>
              </div>
              <p class="seat-description">Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%</p>
            </div>

            <div class="ticket-count kidsWithoutSeats">
              <div class="count-screen">
                <p>Детских «без места» — 0</p>
              </div>
              <p class="seat-description"></p>
            </div>

          </div>
        </section>
        <section>
          <h2 class="wagon-type-title">Тип вагона</h2>
          <ul class="wagon-types-list">
            <li class="wagon-type seat"><span class="wagon-type_vector"></span>Сидячий</li>
            <li class="wagon-type platzKarte"><span class="wagon-type_vector"></span>Плацкарт</li>
            <li class="wagon-type coupe-active"><span class="wagon-type_vector-active"></span>Купе</li>
            <li class="wagon-type luxury"><span class="wagon-type_vector"></span>Люкс</li>
          </ul>
          <div class="wagon-numbers">
            <p class="numbers-title">Вагоны</p>
            <ul class="wagon-numbers-list">
              <li class="wagon-number">07</li>
              <li class="active-wagon-number">09</li>
            </ul>
            <p class="number-disclamer">Нумерация вагонов начинается с головы поезда</p>
          </div>
          <div class="seat-select-form">

            <div class="big-wagon-num">
              <p class="big-num">07</p>
              <p>вагон</p>
            </div>
            <div class="wagon-description">
              <div class="seats-positions">
                <h3>Места <span class="available-seats">11</span></h3>
                <p class="seats-position">Верхние <span class="available-seats">3</span></p>
                  <p class="seats-position">Нижние <span class="available-seats">8</span></p>
                </div>
                <div class="seats-prices">
                  <h3>Стоимость</h3>
                  <p class="seats-price">2920<span class="rub-vector-small"></span></p>
                <p class="seats-price">3530<span class="rub-vector-small"></span></p>
              </div>
              <div class="wagon-facilities">
                <h3>Обслуживание <span class="service-company-name">ФПК</span></h3>
                <ul class="facilities-list">
                  <li data-title="Кондиционер" class="facilities-vector conditioner"></li>
                  <li data-title="Wi-Fi" class="facilities-vector wifi active wifi-active"></li>
                  <li data-title="Белье" class="facilities-vector linens included linens-included"></li>
                  <li data-title="Питание" class="facilities-vector food"></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="seats-disclamer">
            <p>11 человек выбирают места в этом поезде</p>
          </div>
          <div class="seats-scheme standart">
            <span class="scheme_wagon-number">07</span>
            <ul class="scheme_top-seats">
              <li class="place_is_taken">2</li>
              <li class="place_is_taken">4</li>
              <li class="place_is_taken">6</li>
              <li class="place_is_taken">8</li>
              <li class="place_is_taken">10</li>
              <li class="place_is_taken">12</li>
              <li class="place_is_taken">14</li>
              <li class="place_is_taken">16</li>
              <li class="available-place">18</li>
              <li class="place_is_taken">20</li>
              <li class="place_is_taken">22</li>
              <li class="place_is_taken">24</li>
              <li class="place_is_taken">26</li>
              <li class="place_is_taken">28</li>
              <li class="available-place">30</li>
              <li class="available-place">32</li>
            </ul>
            <ul class="scheme_bottom-seats">
              <li class="available-place">1</li>
              <li class="available-place">3</li>
              <li class="place_is_taken">5</li>
              <li class="place_is_taken">7</li>
              <li class="place_is_taken">9</li>
              <li class="available-place">11</li>
              <li class="available-place">13</li>
              <li class="available-place">15</li>
              <li class="place_is_taken">17</li>
              <li class="available-place">19</li>
              <li class="place_is_taken">21</li>
              <li class="place_is_taken">23</li>
              <li class="place_is_taken">25</li>
              <li class="available-place">27</li>
              <li class="place_is_taken">29</li>
              <li class="available-place">31</li>
              </ul>
                </div>
                
                </section>
              </div>
          </section>
    )
}