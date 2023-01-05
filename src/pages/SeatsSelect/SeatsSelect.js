import { useGetSeatsQuery } from '../../api/api'
import { useSelector } from 'react-redux'
import SeatsTrainDesc from './SeatsTrainDesc'
import './seatsSelect.css'

export default function SeatsSelect() {
    const args = useSelector(state => state.seatsParamsSlice)
    //console.log(args.req)
    const { currentData: result, isError, isFetching } = useGetSeatsQuery(args.req)
    if (result) {
        console.log(args.data)

        return (<section className="seats-content">

            <h1 className="seats-title">Выбор мест</h1>
            <div className="seats-select_departure">
                <div className="seats-select_departure_header">
                    <span className="seats_departure-vector"></span>
                    <button className='change-other-train_button'>Выбрать другой поезд</button>
                </div>
            
                <SeatsTrainDesc res={result} item={args.data} />
            
                <section>
                    <h2 className="ticket-count-title">Количество билетов</h2>
                    <div className="ticket-count-container">
                        <div className="ticket-count active-count adult">
                            <div className="count-screen">
                                {/* <!-- тут разместить шаблон {`Взрослых-${props.name.num}`}--> */}
                                <p>Взрослых - 2</p>
                            </div>
                            <p className="seat-description">Можно добавить еще 3 пассажиров</p>
                        </div>

                        <div className="ticket-count kids">
                            <div className="count-screen">
                                <p>Детских - 1</p>
                            </div>
                            <p className="seat-description">Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%</p>
                        </div>

                        <div className="ticket-count kidsWithoutSeats">
                            <div className="count-screen">
                                <p>Детских «без места» — 0</p>
                            </div>
                            <p className="seat-description"></p>
                        </div>

                    </div>
                </section>
                <section>
                    <h2 className="wagon-type-title">Тип вагона</h2>
                    <ul className="wagon-types-list">
                        <li className="wagon-type seat"><span className="wagon-type_vector"></span>Сидячий</li>
                        <li className="wagon-type platzKarte"><span className="wagon-type_vector"></span>Плацкарт</li>
                        <li className="wagon-type coupe-active"><span className="wagon-type_vector-active"></span>Купе</li>
                        <li className="wagon-type luxury"><span className="wagon-type_vector"></span>Люкс</li>
                    </ul>
                    <div className="wagon-numbers">
                        <p className="numbers-title">Вагоны</p>
                        <ul className="wagon-numbers-list">
                            <li className="wagon-number">07</li>
                            <li className="active-wagon-number">09</li>
                        </ul>
                        <p className="number-disclamer">Нумерация вагонов начинается с головы поезда</p>
                    </div>
                    <div className="seat-select-form">

                        <div className="big-wagon-num">
                            <p className="big-num">07</p>
                            <p>вагон</p>
                        </div>
                        <div className="wagon-description">
                            <div className="seats-positions">
                                <h3>Места <span className="available-seats">11</span></h3>
                                <p className="seats-position">Верхние <span className="available-seats">3</span></p>
                                <p className="seats-position">Нижние <span className="available-seats">8</span></p>
                            </div>
                            <div className="seats-prices">
                                <h3>Стоимость</h3>
                                <p className="seats-price">2920<span className="rub-vector-small"></span></p>
                                <p className="seats-price">3530<span className="rub-vector-small"></span></p>
                            </div>
                            <div className="wagon-facilities">
                                <h3>Обслуживание <span className="service-company-name">ФПК</span></h3>
                                <ul className="facilities-list">
                                    <li data-title="Кондиционер" className="facilities-vector conditioner"></li>
                                    <li data-title="Wi-Fi" className="facilities-vector wifi active wifi-active"></li>
                                    <li data-title="Белье" className="facilities-vector linens included linens-included"></li>
                                    <li data-title="Питание" className="facilities-vector food"></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="seats-disclamer">
                        <p>11 человек выбирают места в этом поезде</p>
                    </div>
                    <div className="seats-scheme standart">
                        <span className="scheme_wagon-number">07</span>
                        <ul className="scheme_top-seats">
                            <li className="place_is_taken">2</li>
                            <li className="place_is_taken">4</li>
                            <li className="place_is_taken">6</li>
                            <li className="place_is_taken">8</li>
                            <li className="place_is_taken">10</li>
                            <li className="place_is_taken">12</li>
                            <li className="place_is_taken">14</li>
                            <li className="place_is_taken">16</li>
                            <li className="available-place">18</li>
                            <li className="place_is_taken">20</li>
                            <li className="place_is_taken">22</li>
                            <li className="place_is_taken">24</li>
                            <li className="place_is_taken">26</li>
                            <li className="place_is_taken">28</li>
                            <li className="available-place">30</li>
                            <li className="available-place">32</li>
                        </ul>
                        <ul className="scheme_bottom-seats">
                            <li className="available-place">1</li>
                            <li className="available-place">3</li>
                            <li className="place_is_taken">5</li>
                            <li className="place_is_taken">7</li>
                            <li className="place_is_taken">9</li>
                            <li className="available-place">11</li>
                            <li className="available-place">13</li>
                            <li className="available-place">15</li>
                            <li className="place_is_taken">17</li>
                            <li className="available-place">19</li>
                            <li className="place_is_taken">21</li>
                            <li className="place_is_taken">23</li>
                            <li className="place_is_taken">25</li>
                            <li className="available-place">27</li>
                            <li className="place_is_taken">29</li>
                            <li className="available-place">31</li>
                        </ul>
                    </div>
                
                </section>
            </div>
        </section>
        )
    }
}