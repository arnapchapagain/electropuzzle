import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function ContactsPage() {
  return (
    <>
      <Navbar />

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
        className="hero-contacts"
        style={{
          background:
            "url('images/contacts-hero.webp') no-repeat center center fixed",
        }}
      ></section>

      <div className="wrapper">
        <main className="main main-contacts">
          <section className="contacts-info main-contacts__info">
            <div className="container contacts-info__container">
              <div className="contacts-info__item">
                <img
                  src="images/navigation-icon.svg"
                  alt=""
                  className="contacts-info__img"
                />
                <h3 className="contacts-info__title">Как нас найти</h3>
                <p className="contacts-info__text">Москва, Тропаёво</p>
              </div>
              <div className="contacts-info__item">
                <img
                  src="images/alarm-clock-icon.svg"
                  alt=""
                  className="contacts-info__img"
                />
                <h3 className="contacts-info__title">Рабочее время</h3>
                <p className="contacts-info__text">Понедельник - Суббота</p>
              </div>
              <div className="contacts-info__item">
                <img
                  src="images/chat-icon.svg"
                  alt=""
                  className="contacts-info__img"
                />
                <h3 className="contacts-info__title">Почта</h3>
                <p className="contacts-info__text">spamkinguru@gmail.com</p>
              </div>
            </div>
          </section>
          <section className="contacts-about">
            <div className="container contacts-about__container">
              <h3 className="contacts-about__title">О компании</h3>
              <p className="contacts-about__text">
                DIRTY JOE Fuzz - это один из вариантов Catalinbread Karma Suture
                германиевая версия Оригинальный Karma Suture был выпущен в 2014
                году. Он был основан на Interfax Harmonic Percolator, но с
                несколькими изменениями схемы, чтобы сделать его собственным
                эффектом, а не прямым клоном. Большинство значений были изменены
                по сравнению с исходными, и были добавлены элементы управления
                «Плотность» и «Диоды».
              </p>
              <p className="contacts-about__text">
                Силиконовая версия последовала в 2016 году, снова с некоторыми
                частичными изменениями по сравнению с германиевой версией. Хотя
                структура схемы почти идентична, силиконовая версия звучит
                совершенно иначе, и на самом деле это две разные педали.
              </p>
              <p className="contacts-about__text">
                Плата DIRTY JOE разработана для использования Русских
                германиевых транзисторов (как в оригинале) также как
                альтернатива можно использовать китайские ac128
              </p>
            </div>
          </section>
          <section className="contacts-img">
            <div className="container contacts-img__container">
              <img
                src="images/contacts-content-img.webp"
                alt=""
                className="contacts-img__img"
              />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
