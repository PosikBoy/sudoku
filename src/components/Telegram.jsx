"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const TelegramLogin = () => {
  const [user, setUser] = useState();
  const [inputValue, setInputValue] = useState();
  const [localStorageValue, setLocalStorageValue] = useState();

  const addToLocalStorage = (item) => {
    localStorage.setItem("item", item);
  };
  useEffect(() => {
    setLocalStorageValue(
      localStorage.getItem("item") || "Здесь пока ничего нет"
    );
  }, []);
  return (
    <div>
      <h1>Telegram Login</h1>
      <Script
        src="https://telegram.org/js/telegram-web-app.js"
        async
        onLoad={() => {
          setUser(window.Telegram.WebApp.initDataUnsafe);
        }}
      />
      <p>Айди пользователя:</p>
      {user && <div>{user?.user?.id}</div>}
      <button onClick={() => addToLocalStorage(inputValue)}>
        добавить в локальное хранилище
      </button>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <p>
        Инфо из локал хранилища:
        {localStorageValue}
      </p>
    </div>
  );
};

export default TelegramLogin;
