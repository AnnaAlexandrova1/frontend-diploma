import Draggable from "react-draggable";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOneParam } from "../../reducers/routesParamsSlice";

export function DepartureFilter() {
  const dispatch = useDispatch();

  const start_departure_hour_from = useSelector(
    (state) => state.routesParamsSlice.start_departure_hour_from
  );
  const start_departure_hour_to = useSelector(
    (state) => state.routesParamsSlice.start_departure_hour_to
  );
  const start_arrival_hour_from = useSelector(
    (state) => state.routesParamsSlice.start_arrival_hour_from
  );
  const start_arrival_hour_to = useSelector(
    (state) => state.routesParamsSlice.start_arrival_hour_to
  );

  const [timeDeparture, setTimeDeparture] = useState({
    from: 0,
    to: 24,
    pozFrom: 0,
    pozTo: 281,
  });
  const [timeArrival, setTimeArrival] = useState({
    from: 0,
    to: 24,
    pozFrom: 0,
    pozTo: 281,
  });

  const handleTimeDeparture = (e, data) => {
    setTimeDeparture({
      ...timeDeparture,
      pozFrom: timeDeparture.pozFrom + data.deltaX,
      from: Math.floor((timeDeparture.pozFrom / 281) * 24)
      
    })
  };
  const handleTimeDepartureTo = (e, data) => {
    setTimeDeparture({
      ...timeDeparture,
      pozTo: timeDeparture.pozTo + data.deltaX,
      to: Math.floor((timeDeparture.pozTo / 281) * 24),
    });
    };
    
const handleTimeArrival = (e, data) => {
    setTimeArrival({
      ...timeArrival,
      pozFrom: timeArrival.pozFrom + data.deltaX,
      from: Math.floor((timeArrival.pozFrom / 281) * 24),
    });
    };
    
     const handleTimeArrivalTo = (e, data) => {
    setTimeArrival({
      ...timeArrival,
      pozTo: timeArrival.pozTo + data.deltaX,
      to: Math.floor((timeArrival.pozTo / 281) * 24),
    });
    };

  return (
    <div className="time-filter">
      <div className="departure_time-filters_container">
        <div className="time-filter_title-container">
          <h2 className="time-filter-main_title">
            <span className="departure-vector">
              <p style={{ marginLeft: 40 }}>Туда</p>
            </span>
          </h2>
          <span className="closeUP-vector"></span>
        </div>
        <div className="departure-time">
          <h3 className="time-filter-title">Время отбытия</h3>
          <div className="circle-container time-container">
            <Draggable
              axis="x"
              bounds={{ left: 0, right: 281 }}
              onDrag={handleTimeDeparture}
            >
              <div
                className="time-circle-1"
                //style={{ left: "0px" }}
              ></div>
            </Draggable>
            <div className="timeline-gray "></div>
            {/* <div
                  className="timeline-colored"
                  style={{ left: "2px", right: "128px" }}
                        ></div> */}
            <Draggable
              axis="x"
              bounds={{ left: -281, right: 0 }}
              onDrag={handleTimeDepartureTo}
            >
              <div
                className="time-circle-2"
                //   style={{ left: "155px" }}
              ></div>
            </Draggable>
          </div>
          <div className="cost-container time-container">
            <div className="start-cost" style={{ left: timeDeparture.pozFrom }}>
              {timeDeparture.from}:00
            </div>
            <div className="limit-cost" style={{ left: timeDeparture.pozTo -50 }}>
              {timeDeparture.to}:00
            </div>
            {/* <div className="max-cost">24:00</div> */}
          </div>
        </div>

        <div className="arrival-time">
          <h3 className="time-filter-title arrival-title">Время прибытия</h3>
                  <div className="circle-container time-container">
            <Draggable
              axis="x"
              bounds={{ left: 0, right: 281 }}
              onDrag={handleTimeArrival}
            >
            <div
              className="time-circle-1"
            ></div></Draggable>
            <div className="timeline-gray"></div>
            {/* <div
              className="timeline-colored"
              style={{ left: "52px", right: "136px" }}
                      ></div> */}
                      <Draggable
              axis="x"
              bounds={{ left: -281, right: 0 }}
              onDrag={handleTimeArrivalTo}
            >
            <div
              className="time-circle-2"
            ></div></Draggable>
          </div>
          <div className="cost-container time-container">
            <div className="start-cost" style={{ left: timeArrival.pozFrom }}>
              {timeArrival.from}:00
            </div>
            <div className="limit-cost" style={{ left: timeArrival.pozTo - 50 }}>
              {timeArrival.to}:00
            </div>
            {/* <div className="max-cost">24:00</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
