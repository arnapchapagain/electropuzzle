export default function Footer () {
    return (
        <>
        <footer className="footer">
        <div className="container footer__container">
          <div className="footer__item footer__item_logo">
            <a href="/" className="logo footer__logo"
              ><img
                src="/images/logo.svg"
                alt="ElectroPuzzle"
                className="logo__img footer__logo-img"/><span className="logo__text footer__logo-text">ElectroPuzzle</span></a>
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
                <a href="/pedals" className="footer__list-link">Дилеи</a>
              </li>
              <li className="footer__list-item">
                <a href="/pedals" className="footer__list-link">Бустеры</a>
              </li>
              <li className="footer__list-item">
                <a href="/pedals" className="footer__list-link">Овердрайвы</a>
              </li>
              <li className="footer__list-item">
                <a href="/pedals" className="footer__list-link">Дисторшены</a>
              </li>
              <li className="footer__list-item">
                <a href="/pedals" className="footer__list-link">Модуляция</a>
              </li>
              <li className="footer__list-item">
                <a href="/pedals" className="footer__list-link">Фузы</a>
              </li>
              <li className="footer__list-item">
                <a href="/pedals" className="footer__list-link">Компрессоры</a>
              </li>
            </ul>
          </div>
          <div className="footer__item">
            <h2 className="footer__item-title">СТРАНИЦЫ</h2>
            <ul className="footer__list footer__list_pages">
              <li className="footer__list-item">
                <a href="/" className="footer__list-link">Главная</a>
              </li>
              <li className="footer__list-item">
                <a href="/pedals" className="footer__list-link">Педали</a>
              </li>
              <li className="footer__list-item">
                <a href="/contacts" className="footer__list-link">Контакты</a>
              </li>
            </ul>
          </div>

          <div className="footer__item footer__item_img-block">
            <img
              width="264"
              height="264"
              className="footer__item-img"
              src="/images/footer-pedals-img.webp"
              alt=""
            />
          </div>
        </div>
        <div className="footer__text">
          © 2023 ElectroPuzzle. Design by Kiselev Roman.
        </div>
      </footer>
        </>
    )
}