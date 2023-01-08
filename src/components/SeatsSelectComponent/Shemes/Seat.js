export default function Seat({item, styleAvailable}) {
    return(<div class="seats-scheme seat-type">
    <span class="scheme_wagon-number">07</span>
    <ul class="scheme_first_lane-seats">
        {item.seats.map((el) => {
          if (el.index % 2 === 0 && el.index < 34) {
            return styleAvailable(el);
          }
        })}
    </ul>
    <ul class="scheme_second_lane-seats">
      {item.seats.map((el) => {
          if (el.index % 2 !== 0 && el.index < 33) {
            return styleAvailable(el);
          }
        })}
    </ul>
    <ul class="scheme_third_lane-seats">
      <li></li>
       {item.seats.map((el) => {
          if (el.index % 2 === 0 && el.index >= 33) {
            return styleAvailable(el);
          }
        })}
      <li></li>
    </ul>
    <ul class="scheme_fourth_lane-seats">
      {item.seats.map((el) => {
          if (el.index % 2 !== 0 && el.index >= 33) {
            return styleAvailable(el);
          }
        })}
    </ul>
  </div>)
}