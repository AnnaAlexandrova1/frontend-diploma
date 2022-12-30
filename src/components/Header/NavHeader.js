
export default function NavHeader() {
    return (
        <>
    <div className="header__logo container">
        <span className="header__logo__logo">Лого</span>
    </div>

    <nav className="header__navbar">
      <div className="container">
        <ul className="header__navlist">
          <li className="nav-link active">О нас</li>
          <li className="nav-link">Как это работает</li>
          <li className="nav-link">Отзывы</li>
          <li className="nav-link disabled">Контакты</li>
        </ul>
      </div>
    </nav>
        </>
    )
}