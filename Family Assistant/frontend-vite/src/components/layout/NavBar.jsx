import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Context } from "../../main";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const activeButton = "border-solid border-stroke border-[1px] rounded-[1.5vw] md:rounded-[0.8vw] xl:rounded-[0.62vw]";
  const navLinkStyle = "hover:text-gray-300 transition-colors duration-300 ease-in-out py-4 px-6 md:py-[1vw] md:px-[3vw] xl:py-[0.6vw] xl:px-[2vw]";
  const buttonStyle = "text-primary bg-white rounded-[1.5vw] md:rounded-[0.8vw] xl:rounded-[0.62vw] transition-colors duration-300 ease-in-out hover:bg-gray-50 text-[4vw] py-4 px-6 md:text-[1.5vw] md:py-[1vw] md:px-[3vw] xl:text-[1vw] xl:py-[0.6vw] xl:px-[2vw]";

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  return (
    <>
      {/* Добавляем пустой div для компенсации фиксированной высоты навбара на мобильных */}
      <div className="h-[15vw] md:h-0"></div>
      
      <nav className="bg-primary text-secondary fixed md:relative top-0 left-0 right-0 z-50">
        <div className="flex justify-between items-center h-[15vw] px-4 md:h-[10vw] xl:h-[7.4vw] xl:ml-[7.4vw] xl:mr-[4vw]">
          <div className="flex justify-between items-center w-full md:w-auto">
            {/* Логотип */}
            <Link
              to="/"
              className="font-tenor uppercase font-normal 
              text-[5vw] md:text-[2vw] xl:text-[1.8vw] transition-colors duration-300 ease-in-out hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              FamilyAssistant
            </Link>

            {/* Гамбургер для мобильных */}
            <button 
              className="md:hidden p-2 relative w-8 h-8 focus:outline-none"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Закрыть" : "Меню"}
            >
              <div className="flex flex-col justify-between h-5">
                <div className="w-6 h-0.5 bg-white transition-all duration-300 ease-in-out"></div>
                <div className="w-6 h-0.5 bg-white transition-all duration-300 ease-in-out"></div>
                <div className="w-6 h-0.5 bg-white transition-all duration-300 ease-in-out"></div>
              </div>
            </button>
          </div>

          {/* Навигация и кнопки */}
          <div className={`
            md:flex md:justify-between md:items-center md:flex-1
            fixed md:static inset-0 md:inset-auto
            bg-primary md:bg-transparent
            transition-transform duration-300 ease-in-out
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            md:translate-x-0
            flex flex-col md:flex-row
            pt-[20vw] md:pt-0
            px-4 md:px-0
            h-screen md:h-auto
            z-40
            items-end md:items-center
          `}>
            {/* Кнопка закрытия в мобильном меню */}
            <button 
              className="md:hidden absolute top-4 right-4 p-2 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Закрыть меню"
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Навигационные ссылки */}
            <div className="flex flex-col md:flex-row items-end md:items-center gap-6 md:gap-[2.5vw] xl:gap-[2vw] md:ml-[4.3vw] w-full md:w-auto">
              <Link
                to="/"
                className={`text-[4vw] md:text-[1.5vw] xl:text-[1vw] ${navLinkStyle} ${location.pathname === "/" ? activeButton : ""}`}
                onClick={() => {
                  setIsMenuOpen(false);
                  document.body.style.overflow = 'auto';
                }}
              >
                Главная
              </Link>
              <Link
                to="/about"
                className={`text-[4vw] md:text-[1.5vw] xl:text-[1vw] ${navLinkStyle} ${location.pathname === "/about" ? activeButton : ""}`}
                onClick={() => {
                  setIsMenuOpen(false);
                  document.body.style.overflow = 'auto';
                }}
              >
                О нас
              </Link>
              <Link
                to="/product"
                className={`text-[4vw] md:text-[1.5vw] xl:text-[1vw] ${navLinkStyle} ${location.pathname === "/product" ? activeButton : ""}`}
                onClick={() => {
                  setIsMenuOpen(false);
                  document.body.style.overflow = 'auto';
                }}
              >
                О продукте
              </Link>
            </div>

            {/* Кнопки авторизации */}
            <div className="flex flex-col md:flex-row items-end md:items-center gap-4 md:gap-[1.5vw] xl:gap-[1vw] mt-8 md:mt-0 w-full md:w-auto">
              {user.isAuth ? (
                <>
                  {user.user.role === 'ADMIN' && (
                    <Link
                      to="/admin"
                      className={buttonStyle + " " + (location.pathname === "/admin" ? activeButton : "")}
                      onClick={() => {
                        setIsMenuOpen(false);
                        document.body.style.overflow = 'auto';
                      }}
                    >
                      Админ-панель
                    </Link>
                  )}
                  <button
                    onClick={() => {
                      logOut();
                      document.body.style.overflow = 'auto';
                    }}
                    className={buttonStyle}
                  >
                    Выйти
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className={buttonStyle + " " + (location.pathname === "/login" ? activeButton : "")}
                  onClick={() => {
                    setIsMenuOpen(false);
                    document.body.style.overflow = 'auto';
                  }}
                >
                  Авторизация
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
});

export default NavBar;
