export default function Platzcart({ item, styleAvailable }) {
  return (
    <div class="seats-scheme standart platzKarte-wagon">
      <span class="scheme_wagon-number">{`0${item.coach._id.slice(-1)}`}</span>
      <ul class="scheme_top-seats">
        {item.seats.map((el) => {
          if (el.index % 2 === 0 && el.index < 33) {
            return styleAvailable(el);
          }
        })}
      </ul>
      <ul class="scheme_bottom-seats">
        {item.seats.map((el) => {
          if (el.index % 2 !== 0 && el.index < 33) {
            return styleAvailable(el);
          }
        })}
      </ul>

      <ul class="scheme_side-seats">
        {item.seats.map((el) => {
          if (el.index >= 33) {
            return styleAvailable(el);
          }
        })}
      </ul>
    </div>
  );
}
