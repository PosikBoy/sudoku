// import { IAuthResponse, ITokens } from "@/types/auth.interface";
// import Cookies from "js-cookie";

// export const saveTokensStorage = (data: ITokens) => {
//   Cookies.set("accessToken", data.accessToken);
//   Cookies.set("refreshToken", data.refreshToken);
// };

// export const saveToStorage = (data: IAuthResponse) => {
//   saveTokensStorage(data);
//   localStorage.setItem("user", JSON.stringify(data.user));
// };

// export const removeInfoStorage = () => {
//   Cookies.remove("accessToken");
//   Cookies.remove("refreshToken");
//   localStorage.removeItem("user");
// };

// export const getAccessTokenStorage = () => {
//   const accessToken = Cookies.get("accessToken");
//   return accessToken || null;
// };

// export const getRefreshTokenStorage = () => {
//   const refreshToken = Cookies.get("refreshToken");
//   return refreshToken || null;
// };

// export const getUserStorage = () => {
//   const user = JSON.parse(localStorage.getItem("user") || "{}");
//   return user || null;
// };

// export const getUserTelegram = () => {
//   const username = window?.Telegram?.WebApp;

//   return username || null;
// };
