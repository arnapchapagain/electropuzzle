export default function PedalsPage() {
  return (
    <>
      <header className="header header-page">
        <div className="container header__container header-page__container">
          <a href="index.html" className="logo header__logo">
            <img
              src="images/logo.svg"
              alt="ElectroPuzzle"
              className="logo__img header__logo-img"
            />
            <span className="logo__text header__logo-text">ElectroPuzzle</span>
          </a>
          <nav className="header__nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="index.html" className="nav__item-link">
                  Главная
                </a>
              </li>
              <li className="nav__item">
                <a href="pedals.html" className="nav__item-link">
                  Педали
                </a>
              </li>
              <li className="nav__item">
                <a href="contacts.html" className="nav__item-link">
                  Контакты
                </a>
              </li>
              <li className="nav__item">
                <a href="basket.html" className="nav__item-link">
                  <img
                    src="images/basket-icon.svg"
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

      <nav id="burger-menu" className="burger-nav">
        <div className="burger-nav__block">
          <a tabIndex={-1} href="index.html" className="logo burger-nav__logo">
            <img
              src="images/logo-black.svg"
              alt="ElectroPuzzle"
              className="logo__img burger-nav__logo-img"
            />
          </a>
          <button
            tabIndex={-1}
            id="burger-close"
            className="burger-nav__closes"
          >
            <img
              src="images/cancel.svg"
              alt=""
              className="burger-nav__closes-icon"
            />
          </button>
          <ul className="burger-nav__list">
            <li className="burger-nav__item">
              <a
                tabIndex={-1}
                href="index.html"
                className="burger-nav__item-link"
              >
                Главная
              </a>
            </li>
            <li className="burger-nav__item">
              <a
                tabIndex={-1}
                href="pedals.html"
                className="burger-nav__item-link"
              >
                Педали
              </a>
            </li>
            <li className="burger-nav__item">
              <a
                tabIndex={-1}
                href="contacts.html"
                className="burger-nav__item-link"
              >
                Контакты
              </a>
            </li>
            <li className="burger-nav__item">
              <a
                tabIndex={-1}
                href="basket.html"
                className="burger-nav__item-link"
              >
                Корзина
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <section
        className="hero-pedals"
        style={{
          background:
            "url('images/hero-pedals.webp') no-repeat center center fixed",
        }}
      >
        <div className="hero-pedals__content">
          <h1 className="hero-pedals__title">Педали</h1>
          <p className="hero-pedals__text">
            Адаптация классической схемы Dallas-Arbiter Fuzz Face, выпущенной в
            1966 году. Fuzz Face была скопирована непосредственно с Tone Bender
            Mk. 1.5
          </p>
        </div>
      </section>

      <div id="menu-filters" className="menu-filters">
        <form id="menu-form-filters" action="" className="menu-filters__form">
          <label className="menu-filters__item-btn">
            <input tabIndex={-1} type="checkbox" checked />
            <span tabIndex={-1}>Все</span>
          </label>

          <label className="menu-filters__item-btn">
            <input tabIndex={-1} type="checkbox" />
            <span tabIndex={-1}>Овердрайвы</span>
          </label>

          <label className="menu-filters__item-btn">
            <input tabIndex={-1} type="checkbox" />
            <span tabIndex={-1}>Дисторшены</span>
          </label>

          <label className="menu-filters__item-btn">
            <input tabIndex={-1} type="checkbox" />
            <span tabIndex={-1}>Фузы</span>
          </label>

          <label className="menu-filters__item-btn">
            <input tabIndex={-1} type="checkbox" />
            <span tabIndex={-1}>Компрессоры</span>
          </label>

          <label className="menu-filters__item-btn">
            <input tabIndex={-1} type="checkbox" />
            <span tabIndex={-1}>Модуляция и Дилеи</span>
          </label>

          <label className="menu-filters__item-btn">
            <input tabIndex={-1} type="checkbox" />
            <span tabIndex={-1}>Фильтрация и EQ</span>
          </label>

          <label className="menu-filters__item-btn">
            <input tabIndex={-1} type="checkbox" />
            <span tabIndex={-1}>Бустеры</span>
          </label>
          <button
            tabIndex={-1}
            id="menu-form-btn"
            type="submit"
            className="menu-filters__btn"
          >
            Применить
          </button>
        </form>
      </div>
      <div className="wrapper">
        <main className="main main-pedals">
          <div className="container pedals-container">
            <div className="btn-filters-block">
              <button tabIndex={-1} id="filters-btn" className="btn-filters">
                Фильтр
              </button>
            </div>
            <section className="content main-pedals__content">
              <aside className="filters content__filters">
                <h2 className="filters__title">Фильтр</h2>
                <div className="filters__item">
                  <h3 className="filters__item-title">
                    Категории
                    <svg
                      className="filters__item-icon"
                      width="21"
                      height="3"
                      viewBox="0 0 21 3"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        x1="0.916992"
                        y1="1.5"
                        x2="20.917"
                        y2="1.5"
                        stroke="black"
                        stroke-width="2"
                      />
                    </svg>
                  </h3>
                  <form action="" className="filters__form">
                    <label className="filters__item-btn">
                      <input type="checkbox" checked />
                      <span className="filters__item-text">
                        Все<span className="filters__item-num">115</span>
                      </span>
                    </label>

                    <label className="filters__item-btn">
                      <input type="checkbox" />
                      <span className="filters__item-text">
                        Овердрайвы<span className="filters__item-num">15</span>
                      </span>
                    </label>

                    <label className="filters__item-btn">
                      <input type="checkbox" />
                      <span className="filters__item-text">
                        Дисторшены<span className="filters__item-num">11</span>
                      </span>
                    </label>

                    <label className="filters__item-btn">
                      <input type="checkbox" />
                      <span className="filters__item-text">
                        Фузы<span className="filters__item-num">25</span>
                      </span>
                    </label>

                    <label className="filters__item-btn">
                      <input type="checkbox" />
                      <span className="filters__item-text">
                        Компрессоры<span className="filters__item-num">2</span>
                      </span>
                    </label>

                    <label className="filters__item-btn">
                      <input type="checkbox" />
                      <span className="filters__item-text">
                        Модуляция и Дилеи
                        <span className="filters__item-num">3</span>
                      </span>
                    </label>

                    <label className="filters__item-btn">
                      <input type="checkbox" />
                      <span className="filters__item-text">
                        Фильтрация и EQ
                        <span className="filters__item-num">2</span>
                      </span>
                    </label>

                    <label className="filters__item-btn">
                      <input type="checkbox" />
                      <span className="filters__item-text">
                        Бустеры<span className="filters__item-num">5</span>
                      </span>
                    </label>
                  </form>
                </div>
                <div className="filters__item">
                  <h3 className="filters__item-title">
                    Серия
                    <svg
                      className="filters__item-icon"
                      width="21"
                      height="3"
                      viewBox="0 0 21 3"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        x1="0.916992"
                        y1="1.5"
                        x2="20.917"
                        y2="1.5"
                        stroke="black"
                        stroke-width="2"
                      />
                    </svg>
                  </h3>
                  <form action="" className="filters__form">
                    <label className="filters__item-btn">
                      <input type="checkbox" />
                      <span className="filters__item-text">
                        Black series
                        <span className="filters__item-num">115</span>
                      </span>
                    </label>

                    <label className="filters__item-btn">
                      <input type="checkbox" />
                      <span className="filters__item-text">
                        Gold series<span className="filters__item-num">0</span>
                      </span>
                    </label>
                  </form>
                </div>
              </aside>
              <section className="goods content__goods">
                <a href="product.html" className="goods__item-link">
                  <div className="goods__item">
                    <img
                      src="images/wings.webp"
                      alt=""
                      className="goods__img"
                    />
                    <h3 className="goods__item-title">The Wings</h3>
                    <p className="goods__item-text">
                      Основан на: Dunlop Fuzz Face
                    </p>
                    <p className="goods__item-price">5500.00 ₽</p>
                    <p className="goods__item-presence goods__item-presence_on">
                      В наличии
                    </p>
                  </div>
                </a>
                <a href="product.html" className="goods__item-link">
                  <div className="goods__item">
                    <img
                      src="images/big-boss.webp"
                      alt=""
                      className="goods__img"
                    />
                    <h3 className="goods__item-title">Big boss</h3>
                    <p className="goods__item-text">Основан на: Big muff PI</p>
                    <p className="goods__item-price">4900.00 ₽</p>
                    <p className="goods__item-presence goods__item-presence_on">
                      В наличии
                    </p>
                  </div>
                </a>
                <a href="product.html" className="goods__item-link">
                  <div className="goods__item">
                    <img
                      src="images/dino-power.webp"
                      alt=""
                      className="goods__img"
                    />
                    <h3 className="goods__item-title">Morning coffee</h3>
                    <p className="goods__item-text">
                      Основан на: Marshall Bluesbreaker
                    </p>
                    <p className="goods__item-price">8500.00 ₽</p>
                    <p className="goods__item-presence goods__item-presence_on">
                      В наличии
                    </p>
                  </div>
                </a>
                <a href="product.html" className="goods__item-link">
                  <div className="goods__item">
                    <img
                      src="images/radio-ray.webp"
                      alt=""
                      className="goods__img"
                    />
                    <h3 className="goods__item-title">Witch fire</h3>
                    <p className="goods__item-text">
                      Основан на: Vemuram jan ray
                    </p>
                    <p className="goods__item-price">11000.00 ₽</p>
                    <p className="goods__item-presence goods__item-presence_off">
                      Нет в наличии
                    </p>
                  </div>
                </a>
                <a href="product.html" className="goods__item-link">
                  <div className="goods__item">
                    <img
                      src="images/polar-sun.webp"
                      alt=""
                      className="goods__img"
                    />
                    <h3 className="goods__item-title">Polar sun</h3>
                    <p className="goods__item-text">
                      Основан на: Try vibe pedal
                    </p>
                    <p className="goods__item-price">33000.00 ₽</p>
                    <p className="goods__item-presence goods__item-presence_on">
                      В наличии
                    </p>
                  </div>
                </a>
              </section>
            </section>
          </div>
        </main>

        <footer className="footer">
          <div className="container footer__container">
            <div className="footer__item footer__item_logo">
              <a href="index.html" className="logo footer__logo">
                <img
                  src="images/logo.svg"
                  alt="ElectroPuzzle"
                  className="logo__img footer__logo-img"
                />
                <span className="logo__text footer__logo-text">
                  ElectroPuzzle
                </span>
              </a>
              <form id="footer-form" action="" className="footer__form">
                <div className="footer__email">
                  <input
                    id="footer-input"
                    type="email"
                    className="footer__input"
                    placeholder="john@example.com"
                    required
                  />
                  <button id="footer-btn" className="footer__btn" type="submit">
                    <img
                      className="footer__btn-img"
                      src="images/email-arrow.svg"
                      alt=""
                    />
                  </button>
                </div>
              </form>
            </div>
            <div className="footer__item footer__item_pedals">
              <h2 className="footer__item-title">ПЕДАЛИ</h2>
              <ul className="footer__list footer__list_pedals">
                <li className="footer__list-item">
                  <a href="#" className="footer__list-link">
                    Дилеи
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="#" className="footer__list-link">
                    Бустеры
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="#" className="footer__list-link">
                    Овердрайвы
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="#" className="footer__list-link">
                    Дисторшены
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="#" className="footer__list-link">
                    Модуляция
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="#" className="footer__list-link">
                    Фузы
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="#" className="footer__list-link">
                    Компрессоры
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__item">
              <h2 className="footer__item-title">СТРАНИЦЫ</h2>
              <ul className="footer__list footer__list_pages">
                <li className="footer__list-item">
                  <a href="#" className="footer__list-link">
                    Главная
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="#" className="footer__list-link">
                    Педали
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="#" className="footer__list-link">
                    Контакты
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="#" className="footer__list-link">
                    Новости
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__item footer__item_img-block">
              <img
                width="264"
                height="264"
                className="footer__item-img"
                src="images/footer-pedals-img.webp"
                alt=""
              />
            </div>
          </div>
          <div className="footer__text">
            © 2023 ElectroPuzzle. Design by Kiselev Roman.
          </div>
        </footer>
      </div>

      <script>
        {`this.document
          .querySelector("#filters-btn")
          .addEventListener("click", function () {
            document
              .querySelector("#menu-filters")
              .classList.add("menu-filters-shadow");
            document
              .querySelector("#menu-form-filters")
              .classList.add("menu-filters__form-active");
            document
              .querySelector("body")
              .style.setProperty("overflow-y", "hidden");
          });
  
        this.document
          .querySelector("#menu-form-btn")
          .addEventListener("submit", function () {
            document
              .querySelector("#menu-filters")
              .classList.remove("menu-filters__form-active");
          });
  
        this.document
          .querySelector("#menu-form-btn")
          .addEventListener("click", function () {
            document
              .querySelector("#menu-filters")
              .classList.remove("menu-filters-shadow");
            document
              .querySelector("#menu-form-filters")
              .classList.remove("menu-filters__form-active");
            document
              .querySelector("body")
              .style.setProperty("overflow-y", "visible");
          });
          `}
      </script>
    </>
  );
}
