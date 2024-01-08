export default function ErrorPage() {
  return (
    <>
      <header className="header">
        <div className="container header__container">
          <a href="index.html" className="logo header__logo">
            <img
              src="images/logo-black.svg"
              alt="ElectroPuzzle"
              className="logo__img header__logo-img"
            />
            <span
              style={{ color: "#444444" }}
              className="logo__text header__logo-text page-404__logo-text"
            >
              ElectroPuzzle
            </span>
          </a>
        </div>
      </header>
      <main className="main page-404">
        <div className="page-404__content">
          <div className="page-404__text-block">
            <h1 className="page-404__title">404</h1>
            <p className="page-404__text">Что-то пошло не так</p>
            <a href="index.html" className="page-404__btn">
              На главную
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
