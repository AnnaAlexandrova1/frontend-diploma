export default function TrainsHead() {
    return (
        <section className="trains_head">
        <div className="trains-list_section-title">
          <p className="section-name">Найдено: </p><span className="trains-amount">20</span>
        </div>
        <div className="trains-list_sort-by">
          <p className="sort-by">Сортировать по:</p>
          <select className="sorting" name="">
            <option value="">времени</option>
            <option value="">стоимости</option>
            <option value="">длительности</option>
          </select>
        </div>
        <div className="trains-list_show-by">
          <p className="show-by">Показывать по:</p>
          <ul className="show-by-list">
            <li>5</li>
            <li>10</li>
            <li>20</li>
          </ul>
        </div>
      </section>
    )
}