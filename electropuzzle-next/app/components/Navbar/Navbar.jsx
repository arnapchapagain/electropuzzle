export default function Navbar ({data}) {
  return (
      <>
      <header className="header">
      <div className="container header__container">
        <a href="/" className="logo header__logo">
          <img
            src="/images/logo.svg"
            alt="ElectroPuzzle"
            className="logo__img header__logo-img"
          />
          <span className="logo__text header__logo-text">ElectroPuzzle</span>
        </a>
        <nav className="header__nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="/" className="nav__item-link">
                Главная
              </a>
            </li>
            <li className="nav__item">
              <a href="/pedals" className="nav__item-link">
                Педали
              </a>
            </li>
            <li className="nav__item">
              <a href="/contacts" className="nav__item-link">
                Контакты
              </a>
            </li>
            <li className="nav__item">
              <a href="/basket" className="nav__item-link">
                <img
                  src="/images/basket-icon.svg"
                  alt=""
                  className="nav__item-icon"
                />
              </a>
            </li>
          </ul>
        </nav>
        <button tabIndex={-1} id="burger" className="header__menu">
          <svg
            width="59"
            height="59"
            viewBox="0 0 59 59"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect width="59" height="59" fill="url(#pattern0)" />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_159_14"
                  transform="scale(0.00195312)"
                />
              </pattern>
              <image
                id="image0_159_14"
                width="512"
                height="512"
                xlinkHref="data:image/png;base64,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"
              />
            </defs>
          </svg>
        </button>
      </div>
      </header>
      </>
  )
}