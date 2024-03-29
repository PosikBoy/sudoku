import { IUser } from "./user.interface";

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}
export interface IAuthResponse extends ITokens {
  user: IUser;
}
