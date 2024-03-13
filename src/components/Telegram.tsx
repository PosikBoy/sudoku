"use client";

import Script from "next/script";
import { useState } from "react";

const TelegramLogin = () => {
  const [user, setUser] = useState();
  console.log(user);
  return (
    <div>
      <h1>Telegram Login</h1>
      <Script
        src="https://telegram.org/js/telegram-web-app.js"
        async
        onLoad={() => {
          setUser(window.Telegram.WebApp.initData);
        }}
      />
      {user && <div>{user.username}</div>}
    </div>
  );
};

export default TelegramLogin;
