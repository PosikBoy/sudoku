import { IAuthResponse } from "@/types/auth.interface";
import {
  getRefreshTokenStorage,
  saveToStorage,
} from "@/services/auth/auth.helper";

import { Cookies } from "js-cookie";
import axios from "axios";

export const authService = {
  //     async auth(type: "login" | "register", data) {
  //         const response = awa
  //   }

  async getNewTokens() {
    const refreshToken = getRefreshTokenStorage();
    const response = await axios.post<
      string,
      {
        data: IAuthResponse;
      }
    >(
      process.env.SERVER_URL + "/login/access-token",
      { refreshToken },
      { headers: { "Content-Type": "application/json" } }
    );
    if (response.data.accessToken) {
      saveToStorage(response.data);
    }
    return response;
  },
};
