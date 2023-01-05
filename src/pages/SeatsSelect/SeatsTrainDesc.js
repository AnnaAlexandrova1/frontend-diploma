import { showTime } from "../../service/dataTransform"

export default function SeatsTrainDesc({ res, item }) {
    console.log(item)
    return (
        <div className="seats_train-description-wrap">
          <div className="seats_train-description">
            <span className="train-vector-small"></span>
            <div className="seats_train-route-wrap">
              <p className="seats_train-number">116С</p>
              <ul className="seats_train-route">
                <li>Адлер<span className="arrow-vector"></span></li>
                <li>МОсква<span className="arrow-vector"></span></li>
                <li>Питер</li>
              </ul>
            </div>
          </div>
          <div className="train-travel_time-scheme-wrap">
            <div className="seats_train-shipment-scheme">
              <div className="train-departure-time-wrap">
                <span className="train-departure-time">Время</span>
                <span className="train-departure-point">Город</span>
                <span className="train-departure-station">Город</span>
              </div>
              <span className="seats_travel-time-vector"></span>
              <div className="train-arrival-time">
                <span className="train-departure-time">Время</span>
                        <span className="train-departure-point">Город</span>
                <span className="train-departure-station">Город</span>
              </div>
            </div>
          </div>
          <div className='seats_travel-time'>
            <span className="clockworkOrange-vector"></span>
            <div className='travel-time_wrap'>
              <p className="travel-hours">9 часов</p>
              <p className="travel-minutes">42 минуты</p>
            </div>
          </div>
        </div>
         
    )
}