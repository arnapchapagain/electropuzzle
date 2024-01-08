export default function Home() {
  return (
    <>
      <header className="header">
        <div className="container header__container">
          <a href="index.html" className="logo header__logo">
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

      <nav id="burger-menu" className="burger-nav">
        <div className="burger-nav__block">
          <a tabIndex={-1} href="index.html" className="logo burger-nav__logo">
            <img
              src="/images/logo-black.svg"
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
              src="/images/cancel.svg"
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

      <section className="hero">
        <div className="swiper hero__swiper">
          <div className="swiper-wrapper hero__swiper-wrapper">
            <div className="swiper-slide hero__swiper-slide">
              <div
                style={{
                  background: `url('/images/hero-img.webp') no-repeat center center`,
                  backgroundSize: `cover`,
                }}
                className="hero__background"
              ></div>
            </div>
            <div className="swiper-slide hero__swiper-slide">
              <div
                style={{
                  background:
                    'url("/images/professionally-work.webp") no-repeat center center cover', // Fix the syntax errors by enclosing the url value in quotes and adding a comma after the background property
                }}
                className="hero__background"
              ></div>
            </div>
            <div className="swiper-slide hero__swiper-slide">
              <div
                style={{
                  background:
                    "url('/images/main-photo.webp') no-repeat center center cover",
                }}
                className="hero__background"
              ></div>
            </div>
          </div>
        </div>
      </section>

      <div className="wrapper">
        <main className="main">
          <section className="projects">
            <div className="projects__head">
              <img
                src="/images/projects-icon.svg"
                alt=""
                className="projects__icon"
                width="46px"
                height="53px"
              />
              <h2 className="projects__title">НОВЫЕ ПРОЕКТЫ.</h2>
            </div>
            <div className="projects__content">
              <a href="#" className="projects__item-link">
                <div className="projects__item">
                  <figure>
                    <img
                      className="projects__item-img"
                      src="/images/big-boss.webp"
                      alt=""
                    />
                    <figcaption>Big boss</figcaption>
                  </figure>
                </div>
              </a>

              <a href="#" className="projects__item-link">
                <div className="projects__item">
                  <figure>
                    <img
                      className="projects__item-img"
                      src="/images/wings.webp"
                      alt=""
                    />
                    <figcaption>The wings</figcaption>
                  </figure>
                </div>
              </a>

              <a href="#" className="projects__item-link">
                <div className="projects__item">
                  <figure>
                    <img
                      className="projects__item-img"
                      src="/images/dino-power.webp"
                      alt=""
                    />
                    <figcaption>Dino power</figcaption>
                  </figure>
                </div>
              </a>

              <a href="404.html" className="projects__item-link">
                <div className="projects__item">
                  <figure>
                    <img
                      className="projects__item-img"
                      src="/images/radio-ray.webp"
                      alt=""
                    />
                    <figcaption>Radio ray</figcaption>
                  </figure>
                </div>
              </a>
            </div>

            <div className="swiper projects__swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <a href="#" className="projects__item-link">
                    <div className="projects__item">
                      <figure>
                        <img src="/images/big-boss.webp" alt="" />
                        <figcaption>Big boss</figcaption>
                      </figure>
                    </div>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#" className="projects__item-link">
                    <div className="projects__item">
                      <figure>
                        <img src="/images/wings.webp" alt="" />
                        <figcaption>The wings</figcaption>
                      </figure>
                    </div>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#" className="projects__item-link">
                    <div className="projects__item">
                      <figure>
                        <img src="/images/dino-power.webp" alt="" />
                        <figcaption>Dino power</figcaption>
                      </figure>
                    </div>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="404.html" className="projects__item-link">
                    <div className="projects__item">
                      <figure>
                        <img src="/images/radio-ray.webp" alt="" />
                        <figcaption>Radio ray</figcaption>
                      </figure>
                    </div>
                  </a>
                </div>
              </div>

              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>
          </section>

          <section className="offers">
            <div className="offers__grid-block grid sm:grid-rows-4 grid-cols-4 gap-[8px]">
              <div className="sm:row-span-2 sm:col-span-2 minh-[58rem]">
                <a href="#" className="offers__item-link">
                  <div className="offers__item">
                    <h3 className="offers__title">OVERDRIVE</h3>
                    <div className="offers__block-img">
                      <img
                        src="/images/overdrive.webp"
                        alt=""
                        className="offers__img h-[40rem] w-[50rem]"
                      />
                    </div>
                  </div>
                </a>
              </div>
              <div className="xl:col-span-1 sm:col-span-2 minh-[30rem]">
                <a href="#" className="offers__item-link">
                  <div className="offers__item">
                    <h3 className="offers__title">DISTORTION</h3>
                    <div className="offers__block-img">
                      <img
                        src="/images/distortion.webp"
                        alt=""
                        className="offers__img h-[16rem] w-[17rem]"
                      />
                    </div>
                  </div>
                </a>
              </div>
              <div className="xl:col-span-1 sm:col-span-2 minh-[30rem]">
                <a href="#" className="offers__item-link">
                  <div className="offers__item">
                    <h3 className="offers__title">COMPRESSION</h3>
                    <div className="offers__block-img">
                      <img
                        src="/images/compression.webp"
                        alt=""
                        className="offers__img h-[16rem] w-[17rem]"
                      />
                    </div>
                  </div>
                </a>
              </div>
              <div
                id="offers__extra"
                className="xl:row-span-2 xl:col-span-2 minh-[58rem]"
              >
                <div className="offers__extra">
                  <div className="offers__extra-block">
                    <h3 className="offers__extra-title">
                      Профессиональная работа со звуком
                    </h3>
                    <p className="offers__extra-text">
                      Адаптация классической схемы Dallas-Arbiter Fuzz Face,
                      выпущенной в 1966 году. Fuzz Face была скопирована
                      непосредственно с Tone Bender Mk. 1.5
                    </p>
                    <div className="offers__extra-block-img">
                      <img
                        src="/images/professionally-work.webp"
                        alt=""
                        className="offers__extra-img"
                      />
                    </div>
                    <a href="#" className="offers__extra-btn">
                      ПОДРОБНЕЕ
                    </a>
                  </div>
                </div>
              </div>
              <div className="xl:col-span-1 sm:col-span-2 minh-[30rem]">
                <a href="#" className="offers__item-link">
                  <div className="offers__item">
                    <h3 className="offers__title">BOOST</h3>
                    <div className="offers__block-img">
                      <img
                        src="/images/boost.webp"
                        alt=""
                        className="offers__img h-[17rem] w-[17rem]"
                      />
                    </div>
                  </div>
                </a>
              </div>
              <div className="xl:col-span-1 sm:col-span-2 minh-[30rem]">
                <a href="#" className="offers__item-link">
                  <div className="offers__item">
                    <h3 className="offers__title">FUZZ</h3>
                    <div className="offers__block-img">
                      <img
                        src="/images/fuzz.webp"
                        alt=""
                        className="offers__img h-[17rem] w-[18rem]"
                      />
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-span-2 minh-[30rem]">
                <a href="#" className="offers__item-link">
                  <div className="offers__item">
                    <h3 className="offers__title">MODULATION AND DELAY</h3>
                    <div className="offers__block-img">
                      <img
                        src="/images/delay.webp"
                        alt=""
                        className="offers__img h-[17rem] w-[19rem]"
                      />
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-span-2 minh-[30rem]">
                <a href="#" className="offers__item-link">
                  <div className="offers__item">
                    <h3 className="offers__title">FILTERS AND EQ</h3>
                    <div className="offers__block-img">
                      <img
                        src="/images/filters.webp"
                        alt=""
                        className="offers__img h-[17rem] w-[20rem]"
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="offers__grid">
              <a href="#" className="offers__item-link offers__item-link-grid">
                <div className="offers__item">
                  <h3 className="offers__title">COMPRESSION</h3>
                  <div className="offers__block-img">
                    <img
                      src="/images/compression.webp"
                      alt=""
                      className="offers__img"
                    />
                  </div>
                </div>
              </a>
              <a href="#" className="offers__item-link offers__item-link-grid">
                <div className="offers__item">
                  <h3 className="offers__title">DISTORTION</h3>
                  <div className="offers__block-img">
                    <img
                      src="/images/distortion.webp"
                      alt=""
                      className="offers__img"
                    />
                  </div>
                </div>
              </a>
              <a href="#" className="offers__item-link offers__item-link-grid">
                <div className="offers__item">
                  <h3 className="offers__title">OVERDRIVE</h3>
                  <div className="offers__block-img">
                    <img
                      src="/images/overdrive-mobile.webp"
                      alt=""
                      className="offers__img"
                    />
                  </div>
                </div>
              </a>
              <a href="#" className="offers__item-link offers__item-link-grid">
                <div className="offers__item">
                  <h3 className="offers__title">BOOST</h3>
                  <div className="offers__block-img">
                    <img
                      src="/images/boost.webp"
                      alt=""
                      className="offers__img"
                    />
                  </div>
                </div>
              </a>
              <a href="#" className="offers__item-link offers__item-link-grid">
                <div className="offers__item">
                  <h3 className="offers__title">FUZZ</h3>
                  <div className="offers__block-img">
                    <img
                      src="/images/fuzz.webp"
                      alt=""
                      className="offers__img"
                    />
                  </div>
                </div>
              </a>
              <a href="#" className="offers__item-link offers__item-link-grid">
                <div className="offers__item">
                  <h3 className="offers__title">MODULATION AND DELAY</h3>
                  <div className="offers__block-img">
                    <img
                      src="/images/delay.webp"
                      alt=""
                      className="offers__img"
                    />
                  </div>
                </div>
              </a>
              <a href="#" className="offers__item-link offers__item-link-grid">
                <div className="offers__item">
                  <h3 className="offers__title">FILTERS AND EQ</h3>
                  <div className="offers__block-img">
                    <img
                      src="/images/filters.webp"
                      alt=""
                      className="offers__img"
                    />
                  </div>
                </div>
              </a>
            </div>
          </section>

          <section className="photo">
            <div
              style={{
                background:
                  "url('/images/main-photo.webp') no-repeat; background-size: 100%",
                width: "100vw",
                height: "35rem",
              }}
              className="photo__block photo__block_desk"
            ></div>
            <div
              style={{
                background:
                  "url('/images/main-photo-mobile.webp') no-repeat; display: none;background-size: 100%",
                width: "100vw",
                height: "35rem",
              }}
              className="photo__block photo__block_mob"
            ></div>
          </section>
        </main>

        <footer className="footer">
          <div className="container footer__container">
            <div className="footer__item footer__item_logo">
              <a href="index.html" className="logo footer__logo">
                <img
                  src="/images/logo.svg"
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
                      src="/images/email-arrow.svg"
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

            <div className="footer__item footer__item_social">
              <h2 className="footer__item-title footer__item-title_social">
                ПОДПИСЫВАЙСЯ
              </h2>
              <ul className="footer__list footer__social">
                <li className="footer__list-social">
                  <a
                    href="#"
                    className="footer__list-link footer__list-link_social"
                  >
                    <img
                      className="footer__list-img"
                      src="/images/vk.svg"
                      alt=""
                    />
                  </a>
                </li>
                <li className="footer__list-social">
                  <a
                    href="#"
                    className="footer__list-link footer__list-link_social"
                  >
                    <img
                      className="footer__list-img"
                      src="/images/youtube.svg"
                      alt=""
                    />
                  </a>
                </li>
                <li className="footer__list-social">
                  <a
                    href="#"
                    className="footer__list-link footer__list-link_social"
                  >
                    <img
                      className="footer__list-img"
                      src="/images/dzen.svg"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__text">
            © 2023 ElectroPuzzle. Design by Kiselev Roman.
          </div>
        </footer>
      </div>
    </>
  );
}
