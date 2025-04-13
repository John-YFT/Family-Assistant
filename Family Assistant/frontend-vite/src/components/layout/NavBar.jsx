import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Context } from "../../main";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();
  
  const activeButton = "border-solid border-stroke border-[1px] rounded-[0.62vw]";
  const navLinkStyle = "hover:text-gray-300 py-[0.6vw] px-[2vw] transition-colors duration-300 ease-in-out";
  const buttonStyle = "text-primary bg-white text-[1vw] py-[0.6vw] px-[2vw] rounded-[0.62vw] transition-colors duration-300 ease-in-out hover:bg-gray-50";

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <nav className="bg-primary text-secondary">
      <div
        className="flex justify-between items-center
        h-[7.4vw]
        ml-[7.4vw]
        mr-[4vw]"
      >
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="
              font-tenor uppercase font-normal
              text-[1.8vw]
              transition-colors duration-300 ease-in-out
              hover:text-gray-300"
          >
            FamilyAssistant
          </Link>

          <div
            className="flex justify-center items-center
              ml-[4.3vw]
              gap-[2vw] 
              text-[1vw]"
          >
            <Link
              to="/"
              className={
                navLinkStyle +
                " " +
                (location.pathname === "/" ? activeButton : "")
              }
            >
              Главная
            </Link>
            <Link
              to="/about"
              className={
                navLinkStyle +
                " " +
                (location.pathname === "/about" ? activeButton : "")
              }
            >
              О нас
            </Link>
            <Link
              to="/product"
              className={
                navLinkStyle +
                " " +
                (location.pathname === "/product" ? activeButton : "")
              }
            >
              О продукте
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-[1vw]">
          {user.isAuth ? (
            <>
              {user.user.role === 'ADMIN' && (
                <Link
                  to="/admin"
                  className={buttonStyle + " " + (location.pathname === "/admin" ? activeButton : "")}
                >
                  Админ-панель
                </Link>
              )}
              <button
                onClick={logOut}
                className={buttonStyle}
              >
                Выйти
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className={buttonStyle + " " + (location.pathname === "/login" ? activeButton : "")}
            >
              Авторизация
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
});

export default NavBar;
