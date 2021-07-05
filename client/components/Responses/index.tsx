import { AxiosResponse } from "axios";

export interface CurrentUserResponse {
  currentUser: UserPayload | null;
}

export interface UserPayload {
  id: string;
  email: string;
}
