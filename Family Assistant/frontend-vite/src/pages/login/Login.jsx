import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Context } from "../../main";
import { login, registration } from "../../http/userApi";

const Login = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    phone: "",
    gender: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError(""); // Очищаем ошибку при изменении данных
  };

  const validateForm = () => {
    // Очищаем предыдущие ошибки
    setError("");

    // Проверка email
    if (!formData.email.trim()) {
      setError("Email обязателен для заполнения");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Введите корректный email адрес");
      return false;
    }

    // Проверка пароля
    if (!formData.password) {
      setError("Пароль обязателен для заполнения");
      return false;
    }

    if (formData.password.length < 6) {
      setError("Пароль должен содержать минимум 6 символов");
      return false;
    }

    // Дополнительные проверки для регистрации
    if (!isLogin) {
      // Проверка подтверждения пароля
      if (formData.password !== formData.confirmPassword) {
        setError("Пароли не совпадают");
        return false;
      }

      // Проверка имени пользователя
      if (!formData.fullName.trim()) {
        setError("Имя пользователя обязательно для заполнения");
        return false;
      }

      // Проверка телефона
      if (!formData.phone.trim()) {
        setError("Номер телефона обязателен для заполнения");
        return false;
      }

      const phoneRegex = /^\+?[0-9]{10,12}$/;
      if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
        setError("Введите корректный номер телефона");
        return false;
      }

      // Проверка пола
      if (!formData.gender) {
        setError("Пожалуйста, выберите пол");
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Проверяем валидацию перед отправкой
    if (!validateForm()) {
      return;
    }

    try {
      let userData;
      if (isLogin) {
        userData = await login(formData.email, formData.password);
      } else {
        userData = await registration(
          formData.email,
          formData.password,
          formData.fullName,
          formData.phone,
          formData.gender
        );
      }

      user.setUser(userData);
      user.setIsAuth(true);
      navigate("/");
    } catch (e) {
      setError(e.response?.data?.message || "Произошла ошибка");
    }
  };

  return (
    <div
      className="w-full flex flex-col items-center justify-start bg-stroke
      pt-[3vw]
      pb-[3vw]
      rounded-bl-[7.5vw] 
      rounded-br-[7.5vw] "
    >
      <div className="w-[31.25vw] bg-primary rounded-[1.04vw] p-[2.08vw] border-[1px] border-primary">
        <h2 className="font-tenor text-stroke text-[2.5vw] mb-[2.08vw] text-center">
          {isLogin ? "Авторизация" : "Регистрация"}
        </h2>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-[1.56vw]">
          {!isLogin && (
            <>
              <div className="flex flex-col gap-[0.52vw]">
                <label className="font-ysabeau text-stroke text-[1.25vw]">
                  Имя пользователя
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Введите логин..."
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full bg-stroke rounded-[0.52vw] p-[0.78vw] text-[1.04vw] font-ysabeau border-[1px] border-primary text-primary placeholder:text-primary/50"
                />
              </div>

              <div className="flex flex-col gap-[0.52vw]">
                <label className="font-ysabeau text-stroke text-[1.25vw]">
                  Номер телефона
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Введите ваш номер телефона..."
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-stroke rounded-[0.52vw] p-[0.78vw] text-[1.04vw] font-ysabeau border-[1px] border-primary text-primary placeholder:text-primary/50"
                />
              </div>

              <div className="flex flex-col gap-[0.52vw]">
                <label className="font-ysabeau text-stroke text-[1.25vw]">
                  Пол
                </label>
                <div className="flex gap-[1.56vw]">
                  <label className="flex items-center gap-[0.52vw] cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value="Мужской"
                      checked={formData.gender === "Мужской"}
                      onChange={handleInputChange}
                      className="w-[1.04vw] h-[1.04vw] accent-primary"
                    />
                    <span className="font-ysabeau text-stroke text-[1.04vw]">
                      Мужской
                    </span>
                  </label>
                  <label className="flex items-center gap-[0.52vw] cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value="Женский"
                      checked={formData.gender === "Женский"}
                      onChange={handleInputChange}
                      className="w-[1.04vw] h-[1.04vw] accent-primary"
                    />
                    <span className="font-ysabeau text-stroke text-[1.04vw]">
                      Женский
                    </span>
                  </label>
                </div>
              </div>
            </>
          )}

          <div className="flex flex-col gap-[0.52vw]">
            <label className="font-ysabeau text-stroke text-[1.25vw]">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Введите ваш email..."
              value={formData.email}
              onChange={handleInputChange}
              className="w-full bg-stroke rounded-[0.52vw] p-[0.78vw] text-[1.04vw] font-ysabeau border-[1px] border-primary text-primary placeholder:text-primary/50"
            />
          </div>

          <div className="flex flex-col gap-[0.52vw]">
            <label className="font-ysabeau text-stroke text-[1.25vw]">
              Пароль
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Введите ваш пароль..."
              value={formData.password}
              onChange={handleInputChange}
              className="w-full bg-stroke rounded-[0.52vw] p-[0.78vw] text-[1.04vw] font-ysabeau border-[1px] border-primary text-primary placeholder:text-primary/50"
            />
          </div>

          {!isLogin && (
            <div className="flex flex-col gap-[0.52vw]">
              <label className="font-ysabeau text-stroke text-[1.25vw]">
                Подтверждение пароля
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Повторите ваш пароль..."
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full bg-stroke rounded-[0.52vw] p-[0.78vw] text-[1.04vw] font-ysabeau border-[1px] border-primary text-primary placeholder:text-primary/50"
              />
            </div>
          )}

          <label className="flex items-center gap-[0.52vw] cursor-pointer">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
              className="w-[1.04vw] h-[1.04vw] accent-primary"
            />
            <span className="font-ysabeau text-stroke text-[1.04vw]">
              Показать пароль
            </span>
          </label>

          <div className="flex flex-col gap-[1.04vw] mt-[1.04vw]">
            <button
              type="submit"
              className="w-full bg-primary text-stroke font-tenor text-[1.25vw] rounded-[0.52vw] py-[0.78vw] border-[1px] border-stroke hover:bg-primary/90 transition-colors"
            >
              {isLogin ? "Войти" : "Зарегистрироваться"}
            </button>
          </div>
        </form>
      </div>

      <div className="flex items-center gap-[0.52vw] mt-[2vw]">
        <p className="font-ysabeau text-primary text-[1.25vw]">
          {isLogin ? "Нет аккаунта? " : "Есть аккаунт? "}
        </p>
        <button
          type="button"
          onClick={() => {
            setIsLogin(!isLogin);
            setError("");
            setFormData({
              email: "",
              password: "",
              confirmPassword: "",
              fullName: "",
              phone: "",
              gender: "",
            });
          }}
          className="font-tenor text-primary text-[1.25vw] underline hover:text-primary/80 transition-colors"
        >
          {isLogin ? "Зарегистрируйтесь!" : "Войдите!"}
        </button>
      </div>
    </div>
  );
});

export default Login;
