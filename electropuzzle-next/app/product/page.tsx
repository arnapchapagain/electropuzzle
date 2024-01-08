import Script from "next/script";

export default function ProductPage() {
    return(
        <>
            

    <header className="header header-page header-basket">
      <div
        className="container header__container header-page__container header-basket__container"
      >
        <a href="index.html" className="logo header__logo"
          ><img
            src="images/logo.svg"
            alt="ElectroPuzzle"
            className="logo__img header__logo-img"
          /><span className="logo__text header__logo-text">ElectroPuzzle</span></a
        >
        <nav className="header__nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="index.html" className="nav__item-link">Главная</a>
            </li>
            <li className="nav__item">
              <a href="pedals.html" className="nav__item-link">Педали</a>
            </li>
            <li className="nav__item">
              <a href="contacts.html" className="nav__item-link">Контакты</a>
            </li>
            <li className="nav__item">
              <a href="basket.html" className="nav__item-link"
                ><img
                  src="images/basket-icon.svg"
                  alt=""
                  className="nav__item-icon"
              /></a>
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
        <a tabIndex={-1} href="index.html" className="logo burger-nav__logo"
          ><img
            src="images/logo-black.svg"
            alt="ElectroPuzzle"
            className="logo__img burger-nav__logo-img"
        /></a>
        <button tabIndex={-1} id="burger-close" className="burger-nav__closes">
          <img src="images/cancel.svg" alt="" className="burger-nav__closes-icon" />
        </button>
        <ul className="burger-nav__list">
          <li className="burger-nav__item">
            <a tabIndex={-1} href="index.html" className="burger-nav__item-link"
              >Главная</a
            >
          </li>
          <li className="burger-nav__item">
            <a tabIndex={-1} href="pedals.html" className="burger-nav__item-link"
              >Педали</a
            >
          </li>
          <li className="burger-nav__item">
            <a tabIndex={-1} href="contacts.html" className="burger-nav__item-link"
              >Контакты</a
            >
          </li>
          <li className="burger-nav__item">
            <a tabIndex={-1} href="basket.html" className="burger-nav__item-link"
              >Корзина</a
            >
          </li>
        </ul>
      </div>
    </nav>

    <div className="wrapper">
      <main className="main main-product">
        <div className="container product-container">
          <div className="product-content">
            <section className="product-item product-content__item">
              <h3 className="product-content__main-title">Morning coffee</h3>
              <p className="product-content__main-subtitle">
                Основан на: Marshall Bluesbreaker
              </p>
              <div className="product-item__img-block">
                <div className="product-item__img-main">
                  <img
                    src="images/product-main.webp"
                    alt=""
                    className="product-item__img-m"
                    id="product-main-img"
                  />
                </div>
                <div className="product-item__img-little">
                  <img
                    src="images/product-little-one.webp"
                    alt=""
                    className="product-item__img-l"
                    onClick={() => changeImage('images/product-main.webp')}
                  />
                  <img
                    src="images/product-little-two.webp"
                    alt=""
                    className="product-item__img-l"
                    onClick={() => changeImage('images/product-little-two-4x.webp')}
                  />
                  <img
                    src="images/product-little-three.webp"
                    alt=""
                    className="product-item__img-l"
                    onClick={() => changeImage('images/product-little-three-4x.webp')}
                  />
                  <img
                    src="images/product-little-vour.webp"
                    alt=""
                    className="product-item__img-l"
                    onClick={() => changeImage('images/product-little-vour-4x.webp')}
                  />
                </div>
              </div>

              <Script>
                {`function changeImage(imageSrc) {
                  var mainImage = document.getElementById("product-main-img");
                  mainImage.src = imageSrc;
                }`}
              </Script>

              <div className="product-item__info">
                <h3 className="product-content__title product-item__title">
                  Morning coffee
                </h3>
                <p className="product-item__subtitle">
                  Основан на: Marshall Bluesbreaker
                </p>
                <p className="product-item__price">11000.00 ₽</p>
                <div className="product-item__sum">
                  <form id="form-sum" className="product-item__form" action="">
                    <div className="counter">
                      <button type="button" id="decrease">-</button>
                      <input type="text" id="count" value="1" name="sum" />
                      <button type="button" id="increase">+</button>
                    </div>
                  </form>
                  <Script>
                    {`const countInput = document.getElementById("count");
                    const decreaseButton = document.getElementById("decrease");
                    const increaseButton = document.getElementById("increase");

                    decreaseButton.addEventListener("click", function () {
                      let count = parseInt(countInput.value);
                      if (count > 1) {
                        countInput.value = count - 1;
                      }
                    });

                    increaseButton.addEventListener("click", function () {
                      let count = parseInt(countInput.value);
                      countInput.value = count + 1;
                    });`}
                  </Script>
                  <p className="product-item__text">Осталось 4 штуки</p>
                </div>
                <div className="product-item__btn-block">
                  <button
                    id="showPopup"
                    className="btn-green product-item__btn-buy"
                  >
                    Купить в один клик
                  </button>
                  <button className="product-item__btn-basket">
                    Добавить в корзину
                  </button>
                </div>
                <p className="product-item__text">
                  DIRTY JOE Fuzz - это один из вариантов Catalinbread Karma
                  Suture германиевая версия Оригинальный Karma Suture был
                  выпущен в 2014 году. Он был основан на Interfax Harmonic
                  Percolator, но с несколькими изменениями схемы, чтобы сделать
                  его собственным эффектом, а не прямым клоном. Большинство
                  значений были изменены по сравнению с исходными, и были
                  добавлены элементы управления «Плотность» и «Диоды».
                </p>
                <p className="product-item__text">
                  Силиконовая версия последовала в 2016 году, снова с некоторыми
                  частичными изменениями по сравнению с германиевой версией.
                  Хотя структура схемы почти идентична, силиконовая версия
                  звучит совершенно иначе, и на самом деле это две разные
                  педали.
                </p>
                <p className="product-item__text">
                  Плата DIRTY JOE разработана для использования Русских
                  германиевых транзисторов (как в оригинале) также как
                  альтернатива можно использовать китайские ac128
                </p>
              </div>
            </section>
            <h3
              className="product-content__title product-description__title"
              style={{marginBottom: "32px"}}
            >
              Описание
            </h3>
            <section className="product-description">
              <div className="product-description__char">
                <table className="product-description__table">
                  <caption className="product-description__info-title">
                    Характеристики
                  </caption>
                  <tbody>
                    <tr>
                      <td>Размеры</td>
                      <td>121 x 64 x 57 mm</td>
                    </tr>
                    <tr>
                      <td>Питание</td>
                      <td>+9V</td>
                    </tr>
                    <tr>
                      <td>Нагрузка питания</td>
                      <td>100 mA</td>
                    </tr>
                    <tr>
                      <td>Входное сопротивление</td>
                      <td>1 MΩ</td>
                    </tr>
                    <tr>
                      <td>Выходное сопротивление</td>
                      <td>500 Ω</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="product-description__special">
                <h3 className="product-description__info-title">Особенности</h3>
                <p className="product-description__text">
                  DIRTY JOE Fuzz - это один из вариантов Catalinbread Karma
                  Suture германиевая версия Оригинальный Karma Suture был
                  выпущен в 2014 году. Он был основан на Interfax Harmonic
                  Percolator, но с несколькими изменениями схемы, чтобы сделать
                  его собственным эффектом, а не прямым клоном. Большинство
                  значений были изменены по сравнению с исходными, и были
                  добавлены элементы управления «Плотность» и «Диоды».
                </p>
              </div>
            </section>
            <h3 className="product-content__title" style={{marginBottom: "15px"}}>
              Видео
            </h3>
            <section className="product-video">
              <div
                onClick={() => openVideo('videos/video-one.mp4')}
                className="product-video__item"
              >
                <img src="images/video-one.webp" alt="" />
              </div>
              <div
                onClick={() => openVideo('videos/video-one.mp4')}
                className="product-video__item"
              >
                <img src="images/video-two.webp" alt="" />
              </div>
              <div
                onClick={() => openVideo('videos/video-one.mp4')}
                className="product-video__item"
              >
                <img src="images/video-three.webp" alt="" />
              </div>
              <div
                onClick={() => openVideo('videos/video-one.mp4')}
                className="product-video__item"
              >
                <img src="images/video-vour.webp" alt="" />
              </div>
              <div
                onClick={() => openVideo('videos/video-one.mp4')}
                className="product-video__item"
              >
                <img src="images/video-five.webp" alt="" />
              </div>
              <div
                onClick={() => openVideo('videos/video-one.mp4')}
                className="product-video__item"
              >
                <img src="images/video-six.webp" alt="" />
              </div>
            </section>
            <div id="video-modal" className="video-window-modal">
              <span c() => lassName="close" onClick={closeVideo()">&times;</span}
              <video id="modal-video" controls></video>
            </div>

            <script>
              {`function openVideo(videoSrc) {
                var modal = document.getElementById("video-modal");
                var video = document.getElementById("modal-video");
                video.src = videoSrc;
                modal.style.display = "flex";

                modal.o() => nClick { function (event) }
                  if (event.target === modal) {
                    closeVideo();
                  }
                };
              }

              function closeVideo() {
                var modal = document.getElementById("video-modal");
                var video = document.getElementById("modal-video");
                video.src = "";
                modal.style.display = "none";
                modal.o() => nClick { null}
              }`}
            </script>

            <h3 className="product-content__title" style={{marginBottom: "30px"}}>
              Управление
            </h3>
            <section className="product-control">
              <ol className="product-control__list">
                <div className="product-control__list-column">
                  <li className="product-control__list-item">
                    Неквантованный:
                    <span
                      >плавный, неквантованный отклик во всем рабочем
                      диапазоне.</span
                    >
                  </li>
                  <li className="product-control__list-item">
                    Неквантованный с нарастанием:
                    <span
                      >плавный, неквантованный отклик во всем рабочем диапазоне,
                      но с музыкальным нарастанием, напоминающим поворот ручки
                      вариспида на старинной британской ленточной задержке.
                      «Перетаскивание» будет отставать от изменения ручки или
                      CV, но затем быстро догонит.</span
                    >
                  </li>
                  <li className="product-control__list-item">
                    Неквантованный вольт/октава:
                    <span
                      >плавный и неквантованный, но масштабируемый для
                      выравнивания с кривой 1 В/октава, чтобы обеспечить
                      мелодическую модуляцию звука в буфере или управлять
                      частотой автоколебаний, как генератор, управляемый
                      напряжением.</span
                    >
                  </li>
                  <li className="product-control__list-item">
                    Хроматическая гамма:
                    <span>квантование 1 В/октаву до хроматической гаммы.</span>
                  </li>
                </div>
                <div className="product-control__list-column">
                  <li className="product-control__list-item">
                    Минорная гамма:
                    <span>квантование 1 В/октаву до минорной гаммы.</span>
                  </li>
                  <li className="product-control__list-item">
                    Мажорная гамма (лидийская):
                    <span
                      >квантование 1v/октавы до мажорной гаммы
                      (лидийская).</span
                    >
                  </li>
                  <li className="product-control__list-item">
                    Пентатоника:
                    <span>квантование 1v/октавы до пентатоники.</span>
                  </li>
                  <li className="product-control__list-item">
                    Октавы и квинты:
                    <span
                      >квантованная 1v/октава, чтобы исключить все, кроме октав
                      и квинт.</span
                    >
                  </li>
                  <li className="product-control__list-item">
                    Октавы:
                    <span
                      >квантование по 1 В/октаву, чтобы исключить все, кроме
                      октав.</span
                    >
                  </li>
                </div>
              </ol>
            </section>
          </div>
        
      </main>
      <section className="projects product-projects">
        <div className="container">
          <div className="projects__head">
            <img
              src="images/projects-icon.svg"
              alt=""
              className="projects__icon"
              width="46px"
              height="53px"
            />
            <h2 className="projects__title">Возможно подойдет.</h2>
          </div>
          <div className="projects__content">
            <a href="#" className="projects__item-link">
              <div className="projects__item">
                <figure>
                  <img
                    className="projects__item-img"
                    src="images/big-boss.webp"
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
                    src="images/wings.webp"
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
                    src="images/dino-power.webp"
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
                    src="images/radio-ray.webp"
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
                      <img src="images/big-boss.webp" alt="" />
                      <figcaption>Big boss</figcaption>
                    </figure>
                  </div>
                </a>
              </div>
              <div className="swiper-slide">
                <a href="#" className="projects__item-link">
                  <div className="projects__item">
                    <figure>
                      <img src="images/wings.webp" alt="" />
                      <figcaption>The wings</figcaption>
                    </figure>
                  </div>
                </a>
              </div>
              <div className="swiper-slide">
                <a href="#" className="projects__item-link">
                  <div className="projects__item">
                    <figure>
                      <img src="images/dino-power.webp" alt="" />
                      <figcaption>Dino power</figcaption>
                    </figure>
                  </div>
                </a>
              </div>
              <div className="swiper-slide">
                <a href="404.html" className="projects__item-link">
                  <div className="projects__item">
                    <figure>
                      <img src="images/radio-ray.webp" alt="" />
                      <figcaption>Radio ray</figcaption>
                    </figure>
                  </div>
                </a>
              </div>
            </div>

            
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
      </section>
      
      <footer className="footer">
        <div className="container footer__container">
          <div className="footer__item footer__item_logo">
            <a href="index.html" className="logo footer__logo"
              ><img
                src="images/logo.svg"
                alt="ElectroPuzzle"
                className="logo__img footer__logo-img"
              /><span className="logo__text footer__logo-text"
                >ElectroPuzzle</span
              ></a
            >
            <form id="footer-form" action="" className="footer__form">
              <div className="footer__email">
                <input
                  name="email"
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
                <a href="#" className="footer__list-link">Дилеи</a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__list-link">Бустеры</a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__list-link">Овердрайвы</a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__list-link">Дисторшены</a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__list-link">Модуляция</a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__list-link">Фузы</a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__list-link">Компрессоры</a>
              </li>
            </ul>
          </div>
          <div className="footer__item">
            <h2 className="footer__item-title">СТРАНИЦЫ</h2>
            <ul className="footer__list footer__list_pages">
              <li className="footer__list-item">
                <a href="#" className="footer__list-link">Главная</a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__list-link">Педали</a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__list-link">Контакты</a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__list-link">Новости</a>
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

    

    <div className="overlay" id="overlay"></div>

    <div className="popup-container" id="popup1">
      <div className="blockcentr">
        <h3 className="popup-pay__title">Оформление заказа</h3>
        <form id="form-info" action="" className="popup-pay__form">
          <fieldset>
            <label htmlFor="popup-pay-fio">
              <span>ФИО*</span>
              <input
                name="fio"
                required
                id="input-fio"
                type="text"
                className="popup-pay__input"
              />
            </label>
            <label htmlFor="popup-pay-tel">
              <span>Телефон*</span>
              <input
                name="phone"
                required
                id="input-tel"
                type="tel"
                className="popup-pay__input"
              />
            </label>
          </fieldset>
          <button
            id="submit1"
            type="submit"
            className="popup-pay__btn openokno openokno2 btn-green"
          >
            Продолжить
          </button>
        </form>
      </div>
    </div>

    <div className="popup-container" id="popup2">
      <div className="blockcentr2">
        <div className="popup-pay__img-block">
          <img src="images/popup-pay-icon.webp" alt="" className="popup-pay__img" />
        </div>

        <h3 className="popup-pay__title">Заказ принят</h3>
        <button
          id="closePopup2"
          type="button"
          className="btn-green popup-pay__btn openokno2"
        >
          Продолжить
        </button>
      </div>
    </div>

    <Script>
        {`
      document
        .getElementById("showPopup")
        .addEventListener("click", function () {
          document.getElementById("overlay").style.display = "block";
          document.getElementById("popup1").style.display = "block";
          document.body.style.overflow = "hidden";

          setTimeout(function () {
            document.getElementById("overlay").style.opacity = 1;
            document.getElementById("popup1").style.opacity = 1;
          }, 10);
        });

      document
        .getElementById("submit1")
        .addEventListener("click", function (event) {
          event.preventDefault();
          var inputFio = document.getElementById("input-fio");
          var inputTel = document.getElementById("input-tel");

          if (inputFio.checkValidity() && inputTel.checkValidity()) {
            document.getElementById("popup1").style.display = "none";
            document.getElementById("popup2").style.display = "block";

            setTimeout(function () {
              document.getElementById("popup2").style.opacity = 1;
            }, 10);
          } else {
            if (!inputFio.checkValidity()) {
              inputFio.classList.add("invalid-input");
            } else {
              inputFio.classList.remove("invalid-input");
            }

            if (!inputTel.checkValidity()) {
              inputTel.classList.add("invalid-input");
            } else {
              inputTel.classList.remove("invalid-input");
            }
          }

          return false;
        });

      document
        .getElementById("closePopup2")
        .addEventListener("click", function () {
          document.getElementById("overlay").style.opacity = 0;
          document.getElementById("popup2").style.opacity = 0;
          document.getElementById("form-sum").submit();

          setTimeout(function () {
            document.getElementById("overlay").style.display = "none";
            document.getElementById("popup2").style.display = "none";
            document.body.style.overflow = "auto";
          }, 300);
        });

      document.getElementById("overlay").addEventListener("click", function () {
        document.getElementById("overlay").style.opacity = 0;
        document.getElementById("popup1").style.opacity = 0;
        document.getElementById("popup2").style.opacity = 0;

        setTimeout(function () {
          document.getElementById("overlay").style.display = "none";
          document.getElementById("popup1").style.display = "none";
          document.getElementById("popup2").style.display = "none";
          document.body.style.overflow = "auto";
        }, 300);
      });`}
    </Script>
  

        </>
    )
}