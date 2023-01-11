import './breadCrums.css'

export default function BreadCrums() {

  const styleCrum = (item) => {
    const path = window.location.pathname
    if (path.indexOf(item) !== -1) {
      return "breadcrumb breadcrumb-active"
    } 
    else {
      return "breadcrumb"
    }
  }

  return (
    <div className="breadcrumbs">
      <ul className="breadcrumbs-list">
        <li className="breadcrumb breadcrumb-active">
          <a href="#">
            <span className="breadcrumb__number-list">1</span>
            <span>Билеты</span>
          </a>
        </li>
        <li className={styleCrum('passengers')}>
          <a href="#">
            <span className="breadcrumb__number-list">2</span>
            <span>Пассажиры</span>
          </a>
        </li>
        <li className={styleCrum('payment')}>
          <a href="#">
            <span className="breadcrumb__number-list">3</span>
            <span>Оплата</span>
          </a>
        </li>
        <li className={styleCrum('confirmation')}>
          <a href="#">
            <span className="breadcrumb__number-list">4</span>
            <span>Проверка</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
