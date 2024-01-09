"use client";

import Script from "next/script";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import Carousel from "reactjs-nextjs-carousel";

export default function ProductPage() {
  const slides = [
    "https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ",
    "https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s",
    "https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w",
  ];

  return (
    <>
      <Navbar />

      <div className="wrapper">
        <main className="main main-product">
          <div className="container product-container">
            <div className="product-content">
              <section className="product-item product-content__item">
                <h3 className="product-content__main-title">Morning coffee</h3>
                <p className="product-content__main-subtitle">
                  Основан на: Marshall Bluesbreaker
                </p>

                {/* products image carousel */}
                <div style={{ flex: 2 }}>
                  <div className="w-full">
                    <Carousel
                      slides={slides}
                      thumbWidth={"280rem"}
                      autoSlide={false}
                      effect="slide"
                      carouselWidth={"70rem"}
                    />
                  </div>
                </div>

                <div className="product-item__info" style={{ flex: 3 }}>
                  <h3 className="product-content__title product-item__title">
                    Morning coffee
                  </h3>
                  <p className="product-item__subtitle">
                    Основан на: Marshall Bluesbreaker
                  </p>
                  <p className="product-item__price">11000.00 ₽</p>
                  <div className="product-item__sum">
                    <form
                      id="form-sum"
                      className="product-item__form"
                      action=""
                    >
                      <div className="counter">
                        <button type="button" id="decrease">
                          -
                        </button>
                        <input type="text" id="count" value="1" name="sum" />
                        <button type="button" id="increase">
                          +
                        </button>
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
                    Percolator, но с несколькими изменениями схемы, чтобы
                    сделать его собственным эффектом, а не прямым клоном.
                    Большинство значений были изменены по сравнению с исходными,
                    и были добавлены элементы управления «Плотность» и «Диоды».
                  </p>
                  <p className="product-item__text">
                    Силиконовая версия последовала в 2016 году, снова с
                    некоторыми частичными изменениями по сравнению с германиевой
                    версией. Хотя структура схемы почти идентична, силиконовая
                    версия звучит совершенно иначе, и на самом деле это две
                    разные педали.
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
                style={{ marginBottom: "32px" }}
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
                  <h3 className="product-description__info-title">
                    Особенности
                  </h3>
                  <p className="product-description__text">
                    DIRTY JOE Fuzz - это один из вариантов Catalinbread Karma
                    Suture германиевая версия Оригинальный Karma Suture был
                    выпущен в 2014 году. Он был основан на Interfax Harmonic
                    Percolator, но с несколькими изменениями схемы, чтобы
                    сделать его собственным эффектом, а не прямым клоном.
                    Большинство значений были изменены по сравнению с исходными,
                    и были добавлены элементы управления «Плотность» и «Диоды».
                  </p>
                </div>
              </section>
              <h3
                className="product-content__title"
                style={{ marginBottom: "15px" }}
              >
                Видео
              </h3>
              <section className="product-video">
                <div
                  // onClick={() => openVideo('videos/video-one.mp4')}
                  className="product-video__item"
                >
                  <img src="images/video-one.webp" alt="" />
                </div>
                <div
                  // onClick={() => openVideo('videos/video-one.mp4')}
                  className="product-video__item"
                >
                  <img src="images/video-two.webp" alt="" />
                </div>
                <div
                  // onClick={() => openVideo('videos/video-one.mp4')}
                  className="product-video__item"
                >
                  <img src="images/video-three.webp" alt="" />
                </div>
                <div
                  // onClick={() => openVideo('videos/video-one.mp4')}
                  className="product-video__item"
                >
                  <img src="images/video-vour.webp" alt="" />
                </div>
                <div
                  // onClick={() => openVideo('videos/video-one.mp4')}
                  className="product-video__item"
                >
                  <img src="images/video-five.webp" alt="" />
                </div>
                <div
                  // onClick={() => openVideo('videos/video-one.mp4')}
                  className="product-video__item"
                >
                  <img src="images/video-six.webp" alt="" />
                </div>
              </section>
              <div id="video-modal" className="video-window-modal">
                {/* <span () => lassName="close" onClick={closeVideo()">&times;</span} */}
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

              <h3
                className="product-content__title"
                style={{ marginBottom: "30px" }}
              >
                Управление
              </h3>
              <section className="product-control">
                <ol className="product-control__list">
                  <div className="product-control__list-column">
                    <li className="product-control__list-item">
                      Неквантованный:
                      <span>
                        плавный, неквантованный отклик во всем рабочем
                        диапазоне.
                      </span>
                    </li>
                    <li className="product-control__list-item">
                      Неквантованный с нарастанием:
                      <span>
                        плавный, неквантованный отклик во всем рабочем
                        диапазоне, но с музыкальным нарастанием, напоминающим
                        поворот ручки вариспида на старинной британской
                        ленточной задержке. «Перетаскивание» будет отставать от
                        изменения ручки или CV, но затем быстро догонит.
                      </span>
                    </li>
                    <li className="product-control__list-item">
                      Неквантованный вольт/октава:
                      <span>
                        плавный и неквантованный, но масштабируемый для
                        выравнивания с кривой 1 В/октава, чтобы обеспечить
                        мелодическую модуляцию звука в буфере или управлять
                        частотой автоколебаний, как генератор, управляемый
                        напряжением.
                      </span>
                    </li>
                    <li className="product-control__list-item">
                      Хроматическая гамма:
                      <span>
                        квантование 1 В/октаву до хроматической гаммы.
                      </span>
                    </li>
                  </div>
                  <div className="product-control__list-column">
                    <li className="product-control__list-item">
                      Минорная гамма:
                      <span>квантование 1 В/октаву до минорной гаммы.</span>
                    </li>
                    <li className="product-control__list-item">
                      Мажорная гамма (лидийская):
                      <span>
                        квантование 1v/октавы до мажорной гаммы (лидийская).
                      </span>
                    </li>
                    <li className="product-control__list-item">
                      Пентатоника:
                      <span>квантование 1v/октавы до пентатоники.</span>
                    </li>
                    <li className="product-control__list-item">
                      Октавы и квинты:
                      <span>
                        квантованная 1v/октава, чтобы исключить все, кроме октав
                        и квинт.
                      </span>
                    </li>
                    <li className="product-control__list-item">
                      Октавы:
                      <span>
                        квантование по 1 В/октаву, чтобы исключить все, кроме
                        октав.
                      </span>
                    </li>
                  </div>
                </ol>
              </section>
            </div>
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
          </div>
        </section>

        <Footer />
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
            <img
              src="images/popup-pay-icon.webp"
              alt=""
              className="popup-pay__img"
            />
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
    </>
  );
}
