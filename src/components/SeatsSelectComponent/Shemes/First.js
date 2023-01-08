export default function First({ item, styleAvailable }) {
  return (
    <div class="seats-scheme standart luxury-wagon">
      <span class="scheme_wagon-number">07</span>
      <ul class="scheme_bottom-seats">
        {item.seats.map((el) => {
          return styleAvailable(el);
        })}
      </ul>
    </div>
  );
}
