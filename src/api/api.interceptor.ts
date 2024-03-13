// import {
//   getAccessTokenStorage,
//   removeInfoStorage,
// } from "@/services/auth/auth.helper";
// import axios from "axios";
// import { errorCatch } from "./api.helper";
// import { authService } from "@/services/auth/auth.service";

// const instance = axios.create({
//   baseURL: process.env.SERVER_URL,
//   headers: { "Content-Type": "application/json" },
// });

// instance.interceptors.request.use((config) => {
//   const accessToken = getAccessTokenStorage();
//   if (config.headers && accessToken) {
//     config.headers.Authorization = `Bearer ${accessToken}`;
//   }
//   return config;
// });

// instance.interceptors.response.use(
//   (config) => config,
//   async (error) => {
//     const originalRequest = error.config;

//     if (
//       (error.response.status === 401 ||
//         errorCatch(error) === "jwt expired" ||
//         errorCatch(error) === "jwt must be provided") &&
//       error.config &&
//       error._isRetry
//     ) {
//       originalRequest._isRetry = true;
//       try {
//         authService.getNewTokens();
//         return instance.request(originalRequest);
//       } catch (error) {
//         if (errorCatch(error) === "jwt expired") {
//           removeInfoStorage();
//         }
//       }
//     }
//   }
// );
