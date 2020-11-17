import { get, RESTURL } from "./common";

export const getMe = () => {
  const url = RESTURL.template("/users").toString();
  return get({ url, withCredentials: true });
};
